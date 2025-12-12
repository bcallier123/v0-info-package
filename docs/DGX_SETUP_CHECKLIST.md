# DGX Spark AI Bot - Complete Setup Checklist

This checklist ensures your DGX Spark AI chatbot is fully functional and ready for production use.

## Prerequisites Checklist

### Hardware/Network
- [ ] DGX Spark system is powered on and accessible
- [ ] Network connectivity between web server and DGX confirmed
- [ ] DGX has sufficient GPU resources available (check `nvidia-smi`)
- [ ] Firewall rules allow traffic on port 8000 (or your chosen port)

### Software
- [ ] Python 3.10+ installed on DGX
- [ ] CUDA drivers properly installed (check `nvidia-smi`)
- [ ] One of the following inference servers installed:
  - [ ] Ollama (recommended for ease of use)
  - [ ] vLLM (recommended for performance)
  - [ ] Text Generation Inference (TGI)
  - [ ] llama.cpp server

## Step 1: Install Inference Server on DGX

### Option A: Ollama (Easiest - Recommended for Testing)

\`\`\`bash
# On your DGX system
curl -fsSL https://ollama.com/install.sh | sh

# Start Ollama server
ollama serve

# Pull the model (in a new terminal)
ollama pull llama3

# Test it works
ollama run llama3 "Hello, test response"
\`\`\`

**Checklist:**
- [ ] Ollama installed successfully
- [ ] Ollama server running (check with `ps aux | grep ollama`)
- [ ] Model downloaded (llama3 or your chosen model)
- [ ] Test query returns response

### Option B: vLLM (Best Performance)

\`\`\`bash
# Install vLLM
pip install vllm

# Start vLLM server
python -m vllm.entrypoints.openai.api_server \
    --model meta-llama/Llama-3-70b-chat \
    --host 0.0.0.0 \
    --port 8000 \
    --dtype auto \
    --gpu-memory-utilization 0.9
\`\`\`

**Checklist:**
- [ ] vLLM installed successfully
- [ ] vLLM server running
- [ ] Model loaded without errors
- [ ] Test query via curl works (see below)

## Step 2: Test DGX Server Connection

\`\`\`bash
# Test from your DGX system (local)
curl http://localhost:8000/v1/models

# Test from your web server (remote)
curl http://YOUR_DGX_IP:8000/v1/models

# Test chat completions
curl http://YOUR_DGX_IP:8000/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "llama3",
    "messages": [{"role": "user", "content": "Hello"}],
    "max_tokens": 100
  }'
\`\`\`

**Checklist:**
- [ ] `/v1/models` endpoint returns model list
- [ ] `/v1/chat/completions` endpoint returns response
- [ ] Response time is acceptable (< 30 seconds)
- [ ] No timeout or connection errors

## Step 3: Configure Environment Variables

On your Next.js web server:

\`\`\`bash
# Create .env.local file
cat > .env.local << EOF
NEXT_PUBLIC_MILES_API_URL=http://YOUR_DGX_IP:8000
DGX_MODEL=llama3
AI_API_KEY=your_optional_security_key
EOF
\`\`\`

**Important:** Replace `YOUR_DGX_IP` with your actual DGX IP address.

**Checklist:**
- [ ] `.env.local` file created
- [ ] `NEXT_PUBLIC_MILES_API_URL` points to correct DGX IP and port
- [ ] `DGX_MODEL` matches the model you're running
- [ ] Environment variables loaded (restart dev server)

## Step 4: Test Web Application

\`\`\`bash
# Start your Next.js development server
npm run dev

# Navigate to http://localhost:3000/chat
\`\`\`

**Checklist:**
- [ ] Chat page loads without errors
- [ ] Connection status indicator shows green (connected)
- [ ] Send a test message and receive AI response
- [ ] Response time is reasonable (< 30 seconds)
- [ ] No console errors in browser DevTools

## Step 5: Verify Connection Health Check

Test the health check endpoint:

\`\`\`bash
# Should return connection status
curl http://localhost:3000/api/chat
\`\`\`

Expected response:
\`\`\`json
{
  "status": "ok",
  "dgxConnected": true,
  "dgxUrl": "http://192.168.1.25:8000",
  "model": "llama3",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
\`\`\`

**Checklist:**
- [ ] Health check endpoint returns 200 status
- [ ] `dgxConnected` is `true`
- [ ] `dgxUrl` is correct
- [ ] Timestamp is current

## Step 6: Test Error Handling

Intentionally cause errors to verify fallback behavior:

1. **Stop DGX server** temporarily
   - [ ] Chat shows "Offline Mode" badge
   - [ ] Status indicator turns red
   - [ ] Rule-based responses still work
   - [ ] Error message is helpful

2. **Invalid model name**
   - Change `DGX_MODEL` to non-existent model
   - [ ] Receives appropriate error message
   - [ ] Fallback response provided

3. **Network timeout**
   - [ ] Long-running requests timeout after 30 seconds
   - [ ] Error message explains timeout

## Step 7: Production Security Setup

**CRITICAL:** Do NOT expose DGX directly to internet without security!

Choose one security method:

### Method A: VPN (Recommended)
- [ ] Set up VPN between web server and DGX
- [ ] Configure firewall to only allow VPN traffic
- [ ] Test connection through VPN

### Method B: Reverse Proxy with Authentication
\`\`\`bash
# Install nginx on DGX
sudo apt install nginx

# Configure nginx with authentication
# See docs/DGX_SPARK_INTEGRATION.md for full config
\`\`\`

- [ ] Nginx installed and configured
- [ ] SSL/TLS certificate installed
- [ ] Authentication working
- [ ] Test authenticated requests

### Method C: Cloudflare Tunnel
\`\`\`bash
# Install cloudflared
curl -L https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64 -o cloudflared
sudo mv cloudflared /usr/local/bin
sudo chmod +x /usr/local/bin/cloudflared

# Create tunnel
cloudflared tunnel create miles-dgx
cloudflared tunnel route dns miles-dgx dgx.yourdomain.com
\`\`\`

- [ ] Cloudflare tunnel created
- [ ] DNS configured
- [ ] Tunnel running as service
- [ ] Test connection through tunnel

## Step 8: Performance Optimization

**Checklist:**
- [ ] GPU memory utilization optimized (70-90%)
- [ ] Model quantization considered (4-bit or 8-bit if needed)
- [ ] Connection pooling configured
- [ ] Health check caching working (check logs)
- [ ] Response times logged and monitored

## Step 9: Monitoring Setup

Set up monitoring to catch issues:

\`\`\`bash
# Monitor DGX logs
tail -f /var/log/ollama.log  # or vllm logs

# Monitor Next.js logs for [v0] messages
npm run dev | grep "\[v0\]"
\`\`\`

**Checklist:**
- [ ] Log monitoring in place
- [ ] GPU utilization monitoring (`nvidia-smi` or similar)
- [ ] Response time tracking
- [ ] Error rate monitoring
- [ ] Alert system for downtime (optional)

## Step 10: Final Production Deployment

**Checklist:**
- [ ] All tests passing
- [ ] Security measures in place
- [ ] Monitoring active
- [ ] Backup DGX configuration documented
- [ ] Fallback responses tested and working
- [ ] Production environment variables set
- [ ] Deploy to production
- [ ] Post-deployment testing complete

## Troubleshooting Guide

### Problem: "DGX connection failed"
**Solutions:**
1. Check DGX server is running: `ps aux | grep ollama` or `ps aux | grep vllm`
2. Verify network connectivity: `ping YOUR_DGX_IP`
3. Test port access: `telnet YOUR_DGX_IP 8000`
4. Check firewall rules: `sudo ufw status`

### Problem: "Timeout waiting for response"
**Solutions:**
1. Model might be too large for available GPU memory
2. Consider using smaller model or quantized version
3. Increase timeout in `route.ts` (currently 30 seconds)
4. Check GPU utilization: `nvidia-smi`

### Problem: "Connection works locally but not from web server"
**Solutions:**
1. Verify DGX server is bound to `0.0.0.0` not `127.0.0.1`
2. Check network routing between servers
3. Verify firewall allows traffic from web server IP
4. Test with curl from web server to DGX

### Problem: "Slow responses"
**Solutions:**
1. Use smaller model (llama3:8b instead of llama3:70b)
2. Enable quantization (4-bit or 8-bit)
3. Increase GPU memory utilization
4. Use vLLM instead of Ollama for better performance
5. Enable continuous batching in vLLM

## Quick Reference Commands

\`\`\`bash
# Check DGX server status
curl http://YOUR_DGX_IP:8000/v1/models

# Test chat completion
curl http://YOUR_DGX_IP:8000/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{"model":"llama3","messages":[{"role":"user","content":"Test"}]}'

# Check GPU usage
nvidia-smi

# Restart Ollama
sudo systemctl restart ollama

# View Ollama logs
sudo journalctl -u ollama -f

# Test web app health
curl http://localhost:3000/api/chat
\`\`\`

## Success Criteria

Your DGX Spark AI bot is fully working when:

- ✅ Green connection indicator in chat UI
- ✅ AI responses arrive in < 30 seconds
- ✅ Rule-based fallbacks work when DGX offline
- ✅ No console errors
- ✅ Health check endpoint returns `dgxConnected: true`
- ✅ Production security measures in place
- ✅ Monitoring and logging active

## Support

If you encounter issues not covered in this checklist:

1. Check Next.js console logs for `[v0]` messages
2. Check DGX server logs
3. Review the error messages in the chat UI
4. Refer to detailed documentation in `docs/DGX_SPARK_INTEGRATION.md`

Last updated: 2024-12-12
