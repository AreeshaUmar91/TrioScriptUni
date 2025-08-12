# Deployment script for Netlify (PowerShell)
Write-Host "🚀 Starting deployment process..." -ForegroundColor Green

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
npm install

# Update browserslist database
Write-Host "🔄 Updating browserslist database..." -ForegroundColor Yellow
npx update-browserslist-db@latest

# Build the project
Write-Host "🔨 Building the project..." -ForegroundColor Yellow
npm run build

# Check if build was successful
if (Test-Path "build") {
    Write-Host "✅ Build successful! Build folder created." -ForegroundColor Green
    Write-Host "📁 Build folder contents:" -ForegroundColor Cyan
    Get-ChildItem "build" | Format-Table Name, Length, LastWriteTime
    Write-Host ""
    Write-Host "🎯 Ready for Netlify deployment!" -ForegroundColor Green
    Write-Host "📋 Next steps:" -ForegroundColor Cyan
    Write-Host "1. Push your code to Git repository"
    Write-Host "2. Connect your repo to Netlify"
    Write-Host "3. Set build command: npm run build"
    Write-Host "4. Set publish directory: build"
    Write-Host "5. Add environment variables in Netlify dashboard"
} else {
    Write-Host "❌ Build failed! Please check the error messages above." -ForegroundColor Red
    exit 1
}
