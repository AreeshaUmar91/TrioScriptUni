# Netlify Deployment Guide

## Prerequisites
- Your React app builds successfully with `npm run build`
- Your backend is deployed and accessible
- You have a Git repository (GitHub, GitLab, etc.)

## Step 1: Prepare Your Backend
1. Deploy your Node.js backend to a hosting service:
   - **Heroku**: `heroku create your-app-name`
   - **Railway**: Connect your GitHub repo
   - **Render**: Create a new Web Service
   - **DigitalOcean App Platform**: Deploy from GitHub

2. Get your backend URL (e.g., `https://your-app.herokuapp.com`)

## Step 2: Update Environment Variables
1. In your local `.env` file, update:
   ```
   REACT_APP_BASE_URL=https://your-actual-backend-url.com
   ```

2. In `netlify.toml`, update the production URLs:
   ```toml
   [context.production.environment]
     REACT_APP_BASE_URL = "https://your-actual-backend-url.com"
   ```

## Step 3: Deploy to Netlify
1. **Option A: Git Integration (Recommended)**
   - Push your code to GitHub/GitLab
   - Connect your repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `build`
   - Add environment variables in Netlify dashboard

2. **Option B: Manual Deploy**
   - Run `npm run build`
   - Drag the `build` folder to Netlify

## Step 4: Configure Environment Variables in Netlify
In Netlify dashboard → Site settings → Environment variables:
- `REACT_APP_BASE_URL`: Your backend URL
- `REACT_APP_ENV`: `production`

## Step 5: Test Your Deployment
1. Check if your app loads correctly
2. Test API calls to your backend
3. Verify all features work as expected

## Troubleshooting
- **Build fails**: Check Node.js version (should be 18+)
- **API calls fail**: Verify backend URL and CORS settings
- **Routing issues**: Ensure redirects are working in `netlify.toml`

## Important Notes
- Never commit `.env` files to Git
- Always use `REACT_APP_` prefix for environment variables
- Test your build locally before deploying
- Monitor your backend logs for any issues
