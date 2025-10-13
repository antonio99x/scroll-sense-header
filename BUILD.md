# Build and publish instructions

## Development

1. Install dependencies:
```bash
npm install
```

2. Build the package:
```bash
npm run build
```

3. Watch for changes during development:
```bash
npm run dev
```

## Publishing

1. Update version in package.json
2. Update CHANGELOG.md
3. Build the package:
```bash
npm run build
```

4. Publish to npm:
```bash
npm publish
```

## Testing

To test the package locally in another project:

1. Build the package:
```bash
npm run build
```

2. Pack the package:
```bash
npm pack
```

3. Install the packed file in your test project:
```bash
npm install /path/to/react-scroll-sense-header-1.0.0.tgz
```
