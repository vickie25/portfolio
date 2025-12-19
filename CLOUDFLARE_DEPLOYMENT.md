# Cloudflare Pages Deployment Guide

## Issue
The deployment platform is trying to use `npx wrangler deploy` which is for Cloudflare Workers, not Cloudflare Pages.

## Solution

### Option 1: Update Cloudflare Pages Settings (Recommended)

In your Cloudflare Pages dashboard, update the deployment settings:

1. **Build command**: `npm run build:cloudflare`
2. **Deploy command**: `npx wrangler pages deploy .vercel/output/static`
3. **Output directory**: `.vercel/output/static`

### Option 2: Use npm deploy script

If your platform allows custom deploy commands, use:
```bash
npm run deploy
```

This will:
1. Build Next.js with Cloudflare adapter
2. Deploy to Cloudflare Pages

### Option 3: Manual Deployment

After building, deploy manually:
```bash
npm run build:cloudflare
npx wrangler pages deploy .vercel/output/static
```

## Configuration Files

- `wrangler.toml` - Cloudflare configuration
- `package.json` - Contains build and deploy scripts
- `next.config.ts` - Next.js configuration (already set up)

## Notes

- The `@cloudflare/next-on-pages` package is required for Next.js on Cloudflare Pages
- Make sure your Cloudflare account has Pages enabled
- The build output goes to `.vercel/output/static` after running the Cloudflare adapter

