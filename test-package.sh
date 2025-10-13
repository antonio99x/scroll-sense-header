#!/bin/bash

echo "🧪 Testing react-scroll-sense-header package..."
echo "=============================================="

# Check if dist folder exists and has all files
echo "📁 Checking build files..."
if [ -f "dist/styles.css" ]; then
    echo "✅ styles.css found in dist/"
else
    echo "❌ styles.css missing from dist/"
    exit 1
fi

if [ -f "dist/index.js" ]; then
    echo "✅ index.js found in dist/"
else
    echo "❌ index.js missing from dist/"
    exit 1
fi

if [ -f "dist/ScrollSenseHeader.js" ]; then
    echo "✅ ScrollSenseHeader.js found in dist/"
else
    echo "❌ ScrollSenseHeader.js missing from dist/"
    exit 1
fi

# Check if CSS import works
echo ""
echo "🔍 Checking CSS import in ScrollSenseHeader.js..."
if grep -q "styles.css" dist/ScrollSenseHeader.js; then
    echo "✅ CSS import found in ScrollSenseHeader.js"
else
    echo "❌ CSS import missing from ScrollSenseHeader.js"
    exit 1
fi

# Check package contents
echo ""
echo "📦 Checking package contents..."
npm pack --dry-run | grep -E "(styles\.css|ScrollSenseHeader\.js|index\.js)"

echo ""
echo "🎉 Package verification complete!"
echo ""
echo "To test the package:"
echo "1. cd test-app"
echo "2. npm start"
echo ""
echo "To publish:"
echo "1. npm publish"
