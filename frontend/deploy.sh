#!/bin/bash

# Deployment script for Netlify
echo "🚀 Starting deployment process..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Update browserslist database
echo "🔄 Updating browserslist database..."
npx update-browserslist-db@latest

# Build the project
echo "🔨 Building the project..."
npm run build

# Check if build was successful
if [ -d "build" ]; then
    echo "✅ Build successful! Build folder created."
    echo "📁 Build folder contents:"
    ls -la build/
    echo ""
    echo "🎯 Ready for Netlify deployment!"
    echo "📋 Next steps:"
    echo "1. Push your code to Git repository"
    echo "2. Connect your repo to Netlify"
    echo "3. Set build command: npm run build"
    echo "4. Set publish directory: build"
    echo "5. Add environment variables in Netlify dashboard"
else
    echo "❌ Build failed! Please check the error messages above."
    exit 1
fi
