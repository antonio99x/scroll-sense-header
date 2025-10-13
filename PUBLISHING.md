# Publishing Guide

## Pre-publishing Checklist

✅ **Clean Repository**
- Removed test-app directory
- Removed test.html and test-package.sh
- Removed examples.tsx
- Removed old .tgz files
- Kept demo.html for GitHub Pages

✅ **Package Configuration**
- Updated author to "Antonio99x"
- Updated repository URLs to use antonio99x GitHub
- Added publishConfig for public access
- Verified build process works

✅ **Build Verification**
- `npm run build` completes successfully
- dist/ folder contains all necessary files
- TypeScript definitions are generated

## Publishing Steps

1. **Login to npm** (if not already logged in):
   ```bash
   npm login
   ```

2. **Verify package contents**:
   ```bash
   npm pack --dry-run
   ```

3. **Publish the package**:
   ```bash
   npm publish
   ```

4. **Verify publication**:
   ```bash
   npm view react-scroll-sense-header
   ```

## Post-publishing

After publishing, the demo.html will work correctly with:
```html
<script src="https://unpkg.com/react-scroll-sense-header@latest/dist/index.js"></script>
```

## Version Management

To publish updates:
1. Update version in package.json: `npm version patch|minor|major`
2. Run `npm publish`
3. Update GitHub Pages will automatically deploy the updated demo

## Files Included in Package

- `dist/` - Built JavaScript and TypeScript definitions
- `README.md` - Documentation
- `LICENSE` - MIT License
- `package.json` - Package metadata

## Files Excluded from Package

- `src/` - Source files (not needed for consumers)
- `demo.html` - GitHub Pages demo
- `test-app/` - Test files (removed)
- `node_modules/` - Dependencies
- `.github/` - GitHub Actions workflows
