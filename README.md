# Miles College Information Package

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/miles-college/info-package)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/bQC9GBs59mP)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Features

- **AI-Powered Chatbot**: Integrated with DGX Spark for intelligent enrollment assistance
- **Responsive Design**: Professional, eye-catching design optimized for all devices
- **Presentation Mode**: Built-in presentation view for showcasing to prospective students
- **Comprehensive Information**: Complete details about programs, admissions, costs, and campus life

## Deployment

Your project is live at:

**[https://vercel.com/miles-college/info-package](https://vercel.com/miles-college/info-package)**

## DGX Spark AI Chatbot Setup

The chatbot is powered by your local DGX Spark server. To configure:

### Environment Variables

Add these to your Vercel project or `.env.local`:

```env
DGX_API_URL=http://192.168.1.25:8000/v1
DGX_MODEL=llama3
```

### Local Development

For local development, the chatbot connects to:
- **From DGX**: `http://localhost:8000/v1`
- **From other machines**: `http://192.168.1.25:8000/v1`

### DGX Spark Server Setup

If you need to start your vLLM server on DGX:

```bash
docker run --gpus all \
  -p 8000:8000 \
  vllm/vllm-openai:latest \
  --model meta-llama/Llama-3.1-8B-Instruct \
  --served-model-name llama3
```

### Production Deployment

For production on Vercel, you'll need to:
1. Expose your DGX server with a public endpoint (via tunneling service or public IP)
2. Update the `DGX_API_URL` environment variable in Vercel
3. Add authentication/security if exposing publicly

## Build your app

Continue building your app on:

**[https://v0.app/chat/bQC9GBs59mP](https://v0.app/chat/bQC9GBs59mP)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

## Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to view the app locally.
