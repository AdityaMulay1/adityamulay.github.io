# Deployment Guide

## Quick Deployment Options

### 1. Netlify (Recommended - Easiest)
1. Go to [netlify.com](https://netlify.com)
2. Sign up/login with GitHub
3. Drag and drop the `dist` folder to Netlify
4. Your site will be live instantly!

### 2. Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Import your GitHub repository
4. Deploy automatically

### 3. GitHub Pages
1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Select source: GitHub Actions
4. Create `.github/workflows/deploy.yml` (see below)

## GitHub Actions Workflow
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v2
      with:
        node-version: '18'
    - run: npm install
    - run: npm run build
    - uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## Manual Upload
Your built files are in the `dist` folder. Upload these to any web hosting service.