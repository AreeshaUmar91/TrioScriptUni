# TrioScript University Management System - Frontend

## Deployment Instructions for Netlify

### Prerequisites
- Node.js 18+ installed
- npm 9+ installed
- Your backend API deployed and accessible

### Local Development
1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the frontend directory:
   ```env
   REACT_APP_BASE_URL=http://localhost:5000
   ```

3. Start the development server:
   ```bash
   npm start
   ```

### Netlify Deployment

#### Option 1: Deploy via Netlify UI
1. Go to [Netlify](https://netlify.com) and sign in
2. Click "New site from Git"
3. Connect your GitHub/GitLab/Bitbucket repository
4. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
   - Node version: `18`
5. Add environment variable:
   - Key: `REACT_APP_BASE_URL`
   - Value: `https://your-actual-backend-url.com`
6. Deploy!

#### Option 2: Deploy via Netlify CLI
1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Login to Netlify:
   ```bash
   netlify login
   ```

3. Initialize and deploy:
   ```bash
   netlify init
   netlify deploy --prod
   ```

### Important Notes

1. **Update Backend URL**: Before deploying, update the `REACT_APP_BASE_URL` in your Netlify environment variables to point to your actual backend API URL.

2. **CORS Configuration**: Ensure your backend allows requests from your Netlify domain.

3. **Environment Variables**: The app will fallback to `localhost:5000` if no environment variable is set, but this won't work in production.

### Build Commands
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (not recommended)

### Project Structure
```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── redux/         # State management
├── assets/        # Images and static files
└── App.js         # Main application component
```

### Dependencies
- React 18
- Material-UI (MUI)
- Redux Toolkit
- React Router
- Axios for API calls
- Styled Components

### Troubleshooting

#### Build Fails
- Ensure Node.js version is 18+
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check for syntax errors in your code

#### API Calls Fail in Production
- Verify `REACT_APP_BASE_URL` is set correctly in Netlify
- Check CORS settings on your backend
- Ensure backend is accessible from the internet

#### Routing Issues
- The app uses React Router with browser history
- Netlify redirects are configured in `netlify.toml`
- All routes redirect to `index.html` for SPA functionality
