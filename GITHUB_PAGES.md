# GitHub Pages Configuration

This repository uses GitHub Actions for automated deployment to GitHub Pages.

## 🚀 Automated Deployment

The repository includes a GitHub Actions workflow (`.github/workflows/static.yml`) that automatically:

1. **Builds** the package when you push to the main branch
2. **Deploys** the demo to GitHub Pages
3. **Updates** the live demo automatically

## Demo Page

The interactive demo is available at: `demo.html`

## Deployment Process

### Automatic Deployment
1. Push your changes to the `main` branch
2. GitHub Actions automatically builds and deploys
3. Access the demo at: `https://your-username.github.io/react-scroll-sense-header/demo.html`

### Manual Deployment
You can also trigger deployment manually:
1. Go to the **Actions** tab in your GitHub repository
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow**

## Repository Settings

To enable GitHub Pages with GitHub Actions:

1. Go to **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. The workflow will automatically deploy your demo

## Local Testing

To test the demo locally:

```bash
# Start a local server
python3 -m http.server 8000

# Or using Node.js
npx serve .

# Then visit http://localhost:8000/demo.html
```

## Workflow Features

- ✅ **Automatic builds** on push to main
- ✅ **Manual deployment** trigger
- ✅ **Concurrent deployment protection**
- ✅ **Proper permissions** for GitHub Pages
- ✅ **Node.js caching** for faster builds
- ✅ **Environment deployment** with URL output

## Files for GitHub Pages

- `demo.html` - Interactive demo page
- `README.md` - Documentation with demo link
- `dist/` - Built package files
- `src/` - Source code
- `.github/workflows/static.yml` - GitHub Actions workflow
