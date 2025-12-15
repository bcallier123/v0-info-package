# Quick Start Guide - Miles College Website

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
# Visit http://localhost:3000

# Build for production
pnpm build

# Start production server
pnpm start
```

## Environment Setup

Create `.env.local`:
```env
NEXT_PUBLIC_AI_API_URL=http://your-dgx-spark:8000/v1/chat/completions
AI_API_KEY=your_secret_key
```

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## DGX Spark Configuration

Your DGX Spark should expose an OpenAI-compatible API endpoint:

```bash
# Example with vLLM
python -m vllm.entrypoints.openai.api_server \
    --model your-model \
    --host 0.0.0.0 \
    --port 8000
```

Set the URL in your environment variables:
```
NEXT_PUBLIC_AI_API_URL=https://your-dgx-api.example.com/v1/chat/completions
```

## Common Issues

**Build Errors**: 
- Fix TypeScript errors before production
- Remove `ignoreBuildErrors: true` from next.config.mjs

**Image Loading**: 
- Enable image optimization in production
- Set proper domains in next.config.mjs

**AI Chatbot Not Working**:
- Verify DGX Spark is accessible
- Check API key is correct
- Review CORS configuration
