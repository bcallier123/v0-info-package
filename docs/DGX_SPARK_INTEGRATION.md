# DGX Spark Integration Guide

## Overview

Your NVIDIA DGX Spark system serves as the AI inference backend for the Miles College chatbot. This guide explains how to properly integrate it with the Next.js website.

## Architecture

\`\`\`
┌─────────────┐
│   Browser   │
└──────┬──────┘
       │
       │ HTTPS
       ▼
┌─────────────────┐
│  Next.js Server │
│  (Website)      │
└────────┬────────┘
         │
         │ Internal API Call
         ▼
┌─────────────────┐
│   DGX Spark     │
│   AI Server     │
│   (GPU)         │
└─────────────────┘
\`\`\`

## Setup Instructions

### 1. Install Inference Server on DGX Spark

**Option A: vLLM (Recommended)**
\`\`\`bash
pip install vllm

# Start server
python -m vllm.entrypoints.openai.api_server \
    --model meta-llama/Llama-2-70b-chat-hf \
    --host 0.0.0.0 \
    --port 8000 \
    --gpu-memory-utilization 0.9 \
    --max-num-batched-tokens 4096
\`\`\`

**Option B: TGI (Text Generation Inference)**
\`\`\`bash
docker run --gpus all --shm-size 1g -p 8000:80 \
    ghcr.io/huggingface/text-generation-inference:latest \
    --model-id meta-llama/Llama-2-70b-chat-hf
\`\`\`

**Option C: Ollama**
\`\`\`bash
ollama serve
ollama run llama2:70b
\`\`\`

### 2. Secure the API Endpoint

**Generate API Key**:
\`\`\`bash
openssl rand -hex 32
# Use this as AI_API_KEY
\`\`\`

**Add Authentication Middleware**:
\`\`\`python
# middleware.py
from fastapi import HTTPException, Security
from fastapi.security.api_key import APIKeyHeader

API_KEY = "your_generated_key"
api_key_header = APIKeyHeader(name="Authorization")

def verify_api_key(api_key: str = Security(api_key_header)):
    if api_key != f"Bearer {API_KEY}":
        raise HTTPException(status_code=403, detail="Invalid API Key")
\`\`\`

### 3. Network Configuration

**Option A: VPN (Most Secure)**
\`\`\`bash
# Connect website server to DGX via VPN
# Use internal IP: http://10.0.0.5:8000
\`\`\`

**Option B: Reverse Proxy**
\`\`\`nginx
# On edge server
upstream dgx_backend {
    server dgx-spark.internal:8000;
}

server {
    listen 443 ssl;
    server_name ai.miles.edu;
    
    location /v1/ {
        proxy_pass http://dgx_backend;
        proxy_set_header Authorization $http_authorization;
    }
}
\`\`\`

**Option C: Cloudflare Tunnel**
\`\`\`bash
# Secure tunnel without opening ports
cloudflared tunnel create miles-ai
cloudflared tunnel route dns miles-ai ai.miles.edu
cloudflared tunnel run miles-ai
\`\`\`

### 4. Update Website Configuration

\`\`\`env
# .env.production
AI_API_URL=https://ai.miles.edu/v1/chat/completions
AI_API_KEY=your_generated_key_here
\`\`\`

## Testing the Integration

\`\`\`bash
# Test from website server
curl -X POST https://ai.miles.edu/v1/chat/completions \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-3.5-turbo",
    "messages": [{"role": "user", "content": "Hello"}],
    "max_tokens": 100
  }'
\`\`\`

## Performance Optimization

### Model Selection
- **Development**: 7B parameter model (fast)
- **Production**: 70B parameter model (quality)

### Batching Configuration
\`\`\`bash
--max-num-seqs 256  # Process multiple requests
--max-model-len 4096  # Context window
\`\`\`

### Caching
\`\`\`python
# Cache frequent questions
from functools import lru_cache

@lru_cache(maxsize=1000)
def get_cached_response(question: str) -> str:
    # ... generate response
    pass
\`\`\`

## Monitoring

### GPU Utilization
\`\`\`bash
watch -n 1 nvidia-smi
\`\`\`

### Request Logs
\`\`\`python
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@app.post("/v1/chat/completions")
async def chat(request: ChatRequest):
    logger.info(f"Request from {request.client.host}")
    # ... handle request
\`\`\`

### Metrics Dashboard
\`\`\`bash
# Prometheus + Grafana
docker-compose up -d prometheus grafana
\`\`\`

## Troubleshooting

### "Connection Refused"
- Check DGX Spark firewall rules
- Verify server is running: `netstat -tlnp | grep 8000`
- Test internal connectivity: `curl http://localhost:8000/health`

### "Out of Memory"
- Reduce `--gpu-memory-utilization`
- Use smaller model
- Reduce batch size

### "Slow Responses"
- Check GPU utilization (should be >80%)
- Reduce `max_tokens` in requests
- Enable request batching

## Security Checklist

- [ ] API key is stored securely (not in code)
- [ ] DGX Spark is not exposed to public internet
- [ ] Firewall rules restrict access to website server only
- [ ] HTTPS is enforced
- [ ] Rate limiting is configured
- [ ] Input validation is implemented
- [ ] Monitoring and alerts are set up

## Support

For DGX Spark specific issues:
- NVIDIA Enterprise Support
- DGX Spark Documentation: https://docs.nvidia.com/dgx/
