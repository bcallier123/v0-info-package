# Miles College Website - Comprehensive Development & Deployment Plan

## Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Development Setup](#development-setup)
4. [Performance Optimization](#performance-optimization)
5. [Security & Best Practices](#security--best-practices)
6. [Production Deployment](#production-deployment)
7. [DGX Spark Integration](#dgx-spark-integration)
8. [Monitoring & Maintenance](#monitoring--maintenance)

---

## Project Overview

**Miles College Information Package Website**
- **Framework**: Next.js 16.0.7 (App Router)
- **UI Library**: React 19.2.0
- **Styling**: Tailwind CSS v4 + shadcn/ui components
- **TypeScript**: Full type safety
- **AI Integration**: Custom chatbot powered by DGX Spark backend

### Key Features
- Responsive, accessible university website
- AI-powered student assistance chatbot
- Multi-section information architecture (Admissions, Academics, Campus Life, Athletics)
- Real-time data integration capabilities
- SEO optimized for student recruitment

---

## Architecture

### Project Structure
```
miles-college-website/
├── app/                          # Next.js App Router
│   ├── api/                      # API Routes
│   │   └── chat/route.ts         # AI Chatbot API
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Homepage
│   └── globals.css               # Global styles
├── components/                   # React Components
│   ├── ui/                       # shadcn/ui components
│   ├── hero-section.tsx          # Main landing section
│   ├── navigation.tsx            # Site navigation
│   ├── floating-chat-widget.tsx  # AI chatbot interface
│   └── [other sections...]
├── lib/                          # Utilities
│   └── utils.ts                  # Helper functions
├── public/                       # Static assets
│   └── images/                   # Optimized images
├── next.config.mjs               # Next.js configuration
└── package.json                  # Dependencies

```

### Technology Stack

**Frontend**
- Next.js 16 with App Router (React Server Components)
- TypeScript for type safety
- Tailwind CSS v4 for styling
- Radix UI primitives for accessible components
- Lucide React for icons

**Backend Services**
- Next.js API Routes for serverless functions
- DGX Spark for AI/ML inference (external)
- Environment-based configuration

**Development Tools**
- ESLint for code quality
- TypeScript compiler
- Vercel Analytics (optional)

---

## Development Setup

### Prerequisites
```bash
Node.js >= 18.x
npm or pnpm package manager
Git version control
```

### Local Development

1. **Clone & Install**
```bash
git clone <repository-url>
cd miles-college-website
pnpm install
```

2. **Environment Variables**
Create `.env.local`:
```env
# AI Chatbot Configuration
NEXT_PUBLIC_AI_API_URL=http://your-dgx-spark-server:port/v1/chat/completions
AI_API_KEY=your_api_key_here

# Analytics (Optional)
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id

# Contact Information
NEXT_PUBLIC_CONTACT_EMAIL=admissions@miles.edu
NEXT_PUBLIC_CONTACT_PHONE=(205) 929-1657
```

3. **Run Development Server**
```bash
pnpm dev
# Access at http://localhost:3000
```

### Development Workflow

**File Watching**: Hot module replacement (HMR) enabled
**TypeScript**: Real-time type checking
**CSS**: Tailwind JIT compilation
**API Routes**: Auto-reloading on changes

---

## Performance Optimization

### 1. Image Optimization

**Current Status**: Images are unoptimized (development mode)

**Production Configuration**:
```javascript
// next.config.mjs
const nextConfig = {
  images: {
    unoptimized: false, // Enable optimization
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
  },
}
```

**Image Best Practices**:
- Use Next.js `<Image>` component for automatic optimization
- Serve WebP/AVIF formats with fallbacks
- Implement lazy loading for below-fold images
- Use appropriate sizes for different viewports
- Add proper alt text for accessibility

### 2. Code Splitting

**Automatic Splitting** (Next.js default):
- Route-based code splitting
- Component-level splitting with dynamic imports

**Manual Optimization**:
```typescript
// Lazy load heavy components
import dynamic from 'next/dynamic'

const FloatingChatWidget = dynamic(
  () => import('@/components/floating-chat-widget'),
  { ssr: false } // Client-side only
)
```

### 3. Bundle Size Optimization

**Analysis**:
```bash
# Add to package.json scripts
"analyze": "ANALYZE=true next build"

# Install bundle analyzer
pnpm add -D @next/bundle-analyzer
```

**Optimization Strategies**:
- Tree-shake unused code
- Use ES modules imports
- Minimize third-party dependencies
- Lazy load non-critical features

### 4. Caching Strategy

**Static Assets**:
- Immutable assets: `Cache-Control: public, max-age=31536000, immutable`
- Dynamic content: `Cache-Control: public, s-maxage=60, stale-while-revalidate`

**API Routes**:
```typescript
export const dynamic = 'force-dynamic' // No cache for chat API
export const runtime = 'nodejs' // Use Node.js runtime for AI
```

### 5. Fonts Optimization

**Current Setup**:
```typescript
import { Geist, Geist_Mono } from 'next/font/google'

const geistSans = Geist({ 
  subsets: ['latin'],
  display: 'swap', // Prevent layout shift
  preload: true
})
```

---

## Security & Best Practices

### 1. Environment Variables

**Never commit**:
- `.env.local` (local development)
- `.env.production` (production secrets)

**Public vs Private**:
```env
# Public (exposed to browser)
NEXT_PUBLIC_API_URL=https://...

# Private (server-only)
AI_API_KEY=secret_key
DATABASE_URL=connection_string
```

### 2. API Security

**Rate Limiting**:
```typescript
// app/api/chat/route.ts
const rateLimit = new Map()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const requests = rateLimit.get(ip) || []
  const recentRequests = requests.filter(time => now - time < 60000)
  
  if (recentRequests.length >= 10) return false
  
  rateLimit.set(ip, [...recentRequests, now])
  return true
}
```

**Input Validation**:
```typescript
import { z } from 'zod'

const chatSchema = z.object({
  message: z.string().min(1).max(500),
  persona: z.enum(['freshman', 'transfer', 'parent', 'counselor'])
})
```

### 3. Content Security Policy

```typescript
// next.config.mjs
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';"
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
        ]
      }
    ]
  }
}
```

### 4. TypeScript Configuration

**Strict Mode** (Production):
```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

---

## Production Deployment

### Pre-Deployment Checklist

- [ ] Remove `typescript.ignoreBuildErrors` from next.config.mjs
- [ ] Enable image optimization
- [ ] Set up environment variables on hosting platform
- [ ] Configure custom domain
- [ ] Set up SSL/TLS certificates
- [ ] Enable compression
- [ ] Configure CDN for static assets
- [ ] Set up error tracking (Sentry)
- [ ] Configure analytics
- [ ] Test all critical user flows
- [ ] Run accessibility audit
- [ ] Perform load testing

### Deployment Options

#### Option 1: Vercel (Recommended)

**Why Vercel**:
- Built for Next.js
- Automatic HTTPS
- Global CDN
- Edge functions
- Preview deployments
- Zero-config deployment

**Setup**:
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

**Configuration** (`vercel.json`):
```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["iad1"],
  "env": {
    "NEXT_PUBLIC_AI_API_URL": "@ai_api_url",
    "AI_API_KEY": "@ai_api_key"
  }
}
```

#### Option 2: Docker Container

**Dockerfile**:
```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json pnpm-lock.yaml* ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set permissions
RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
```

**Build & Run**:
```bash
docker build -t miles-college-website .
docker run -p 3000:3000 miles-college-website
```

#### Option 3: Traditional VPS/Server

**Build**:
```bash
pnpm build
```

**Start Production Server**:
```bash
pnpm start
# Or with PM2
pm2 start npm --name "miles-website" -- start
```

**Nginx Reverse Proxy**:
```nginx
server {
    listen 80;
    server_name miles.edu www.miles.edu;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Build Optimization

**Production Build Script**:
```json
{
  "scripts": {
    "build": "next build",
    "build:analyze": "ANALYZE=true next build",
    "start": "next start",
    "deploy": "npm run build && pm2 restart miles-website"
  }
}
```

**next.config.mjs** (Production):
```javascript
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  
  // Enable SWC minification
  swcMinify: true,
  
  // Image optimization
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
  },
  
  // Standalone output for Docker
  output: 'standalone',
  
  // TypeScript
  typescript: {
    ignoreBuildErrors: false, // Fix all errors before production
  },
  
  // Redirects & Rewrites
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
}
```

---

## DGX Spark Integration

### Understanding the Architecture

**Important**: DGX Spark is your AI inference server, NOT the web hosting platform.

```
┌─────────────────┐         ┌──────────────────┐
│  User's Browser │ ───────>│  Next.js Website │
│                 │         │  (Vercel/VPS)    │
└─────────────────┘         └──────────────────┘
                                     │
                                     │ HTTPS API Call
                                     ▼
                            ┌──────────────────┐
                            │   DGX Spark      │
                            │   AI Server      │
                            │   (GPU Inference)│
                            └──────────────────┘
```

### DGX Spark Setup

**1. Expose AI API Endpoint**

Your DGX Spark should run an inference server:

```python
# Example: vLLM server on DGX
python -m vllm.entrypoints.openai.api_server \
    --model meta-llama/Llama-2-70b-chat-hf \
    --host 0.0.0.0 \
    --port 8000 \
    --gpu-memory-utilization 0.95
```

**2. Network Configuration**

Options for exposing DGX to website:

**Option A: Reverse Proxy** (Recommended)
```nginx
# On public server
server {
    listen 443 ssl;
    server_name ai.miles.edu;

    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    location /v1/chat/completions {
        proxy_pass http://dgx-spark-internal:8000;
        proxy_set_header X-API-Key $http_x_api_key;
        
        # CORS headers
        add_header Access-Control-Allow-Origin https://miles.edu;
    }
}
```

**Option B: VPN/Private Network**
- Keep DGX on private network
- Website server has VPN access
- API calls go through secure tunnel

**Option C: Cloud Tunnel** (Development)
```bash
# Use ngrok for testing
ngrok http 8000
# Provides: https://abc123.ngrok.io
```

**3. API Authentication**

```typescript
// app/api/chat/route.ts
const AI_API_URL = process.env.AI_API_URL // http://dgx-spark:8000/v1/chat/completions
const AI_API_KEY = process.env.AI_API_KEY // Secret key

export async function POST(req: Request) {
  const { message } = await req.json()
  
  const response = await fetch(AI_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${AI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
      max_tokens: 500,
      temperature: 0.7,
    }),
  })
  
  return response
}
```

### Security Considerations

**1. API Key Management**
- Store API keys in environment variables (never in code)
- Rotate keys regularly
- Use different keys for dev/prod

**2. Rate Limiting**
```typescript
// Prevent abuse of your GPU resources
const MAX_REQUESTS_PER_IP = 10 // per minute
const MAX_TOKENS_PER_REQUEST = 500
```

**3. Input Sanitization**
```typescript
// Prevent prompt injection
function sanitizeInput(message: string): string {
  // Remove system prompt attempts
  return message
    .replace(/system:|assistant:|user:/gi, '')
    .substring(0, 500)
}
```

**4. Firewall Rules**
```bash
# Only allow website server IP to access DGX
sudo ufw allow from <website-server-ip> to any port 8000
sudo ufw deny 8000
```

### Performance Tuning

**1. Model Selection**
- **Development**: Smaller model (7B parameters) for fast testing
- **Production**: Larger model (70B parameters) for quality

**2. Batching**
```python
# vLLM config
--max-num-batched-tokens 4096
--max-num-seqs 256
```

**3. Caching**
```typescript
// Cache common responses
const responseCache = new Map<string, string>()

function getCachedResponse(question: string): string | null {
  const normalized = question.toLowerCase().trim()
  return responseCache.get(normalized) || null
}
```

**4. Fallback Strategy**
```typescript
// If DGX is down, use fallback responses
const fallbackResponses = {
  'admissions': 'For admissions information, call (205) 929-1657',
  'financial_aid': 'Visit our Financial Aid office or email financialaid@miles.edu',
}
```

---

## Monitoring & Maintenance

### 1. Error Tracking

**Sentry Integration**:
```bash
pnpm add @sentry/nextjs
```

```typescript
// sentry.client.config.ts
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
  environment: process.env.NODE_ENV,
})
```

### 2. Analytics

**Vercel Analytics**:
```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

**Google Analytics**:
```typescript
// lib/gtag.ts
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}
```

### 3. Health Checks

```typescript
// app/api/health/route.ts
export async function GET() {
  const checks = {
    timestamp: new Date().toISOString(),
    status: 'healthy',
    services: {
      website: 'up',
      ai_backend: await checkAIBackend(),
    }
  }
  
  return Response.json(checks)
}

async function checkAIBackend(): Promise<string> {
  try {
    const response = await fetch(process.env.AI_API_URL!, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ test: true }),
      signal: AbortSignal.timeout(5000),
    })
    return response.ok ? 'up' : 'down'
  } catch {
    return 'down'
  }
}
```

### 4. Logging

**Structured Logging**:
```typescript
// lib/logger.ts
export const logger = {
  info: (message: string, meta?: object) => {
    console.log(JSON.stringify({ level: 'info', message, ...meta }))
  },
  error: (message: string, error?: Error, meta?: object) => {
    console.error(JSON.stringify({ 
      level: 'error', 
      message, 
      error: error?.message,
      stack: error?.stack,
      ...meta 
    }))
  }
}
```

### 5. Backup Strategy

**Code**: Git repository (GitHub/GitLab)
**Content**: Regular database backups (if using CMS)
**Images**: S3/Blob storage with versioning
**Configuration**: Environment variables documented

### 6. Update Schedule

- **Security Updates**: Immediate
- **Dependencies**: Monthly
- **Next.js Framework**: After testing (quarterly)
- **Content Updates**: As needed

---

## SEO Optimization

### 1. Metadata Configuration

```typescript
// app/layout.tsx
export const metadata = {
  title: {
    default: 'Miles College | HBCU in Birmingham, Alabama',
    template: '%s | Miles College'
  },
  description: 'The only 4-year HBCU in Birmingham offering 30+ degree programs, financial aid, and a vibrant campus life. Start your journey today.',
  keywords: ['HBCU', 'Birmingham', 'College', 'University', 'Miles College', 'Financial Aid', 'Alabama'],
  authors: [{ name: 'Miles College' }],
  openGraph: {
    title: 'Miles College',
    description: 'Birmingham\'s only 4-year HBCU',
    url: 'https://miles.edu',
    siteName: 'Miles College',
    images: ['/images/og-image.jpg'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miles College',
    description: 'Birmingham\'s only 4-year HBCU',
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}
```

### 2. Sitemap Generation

```typescript
// app/sitemap.ts
export default function sitemap() {
  return [
    {
      url: 'https://miles.edu',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://miles.edu/admissions',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // ... more pages
  ]
}
```

### 3. robots.txt

```typescript
// app/robots.ts
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://miles.edu/sitemap.xml',
  }
}
```

### 4. Structured Data

```typescript
// JSON-LD Schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Miles College',
  url: 'https://miles.edu',
  logo: 'https://miles.edu/images/logo.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5500 Myron Massey Blvd',
    addressLocality: 'Fairfield',
    addressRegion: 'AL',
    postalCode: '35064',
    addressCountry: 'US'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-205-929-1657',
    contactType: 'Admissions'
  }
}
```

---

## Continuous Integration/Deployment

### GitHub Actions Workflow

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install pnpm
        uses: pnpm/action-setup@v2
        
      - name: Install dependencies
        run: pnpm install --frozen-lockfile
        
      - name: Run tests
        run: pnpm test
        
      - name: Build
        run: pnpm build
        env:
          NEXT_PUBLIC_AI_API_URL: ${{ secrets.AI_API_URL }}
          
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

---

## Support & Documentation

### Internal Documentation
- **Design System**: `/docs/design-system.md`
- **Component Library**: Storybook (optional)
- **API Documentation**: OpenAPI spec for internal APIs

### External Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)

### Contact
- **Technical Support**: IT Department
- **Content Updates**: Marketing Team
- **Emergency Contact**: [On-call rotation]

---

## Conclusion

This comprehensive plan provides a production-ready deployment strategy for the Miles College website with proper integration of your DGX Spark AI infrastructure. The architecture separates concerns: the Next.js website handles presentation and user interaction, while the DGX Spark server provides AI inference capabilities securely and efficiently.

**Next Steps**:
1. Review and approve this plan
2. Set up production environment variables
3. Configure DGX Spark API endpoint with proper security
4. Deploy website to Vercel or VPS
5. Set up monitoring and analytics
6. Conduct thorough testing
7. Go live!
