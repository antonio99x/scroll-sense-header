# Quick Start Guide

## Installation

```bash
npm install react-scroll-sense-header
```

## Basic Usage

```tsx
import React from 'react';
import { ScrollSenseHeader } from 'react-scroll-sense-header';

function App() {
  return (
    <div>
      <ScrollSenseHeader>
        <header style={{ padding: '1rem', backgroundColor: '#fff' }}>
          <h1>My Header</h1>
        </header>
      </ScrollSenseHeader>
      
      <main>
        {/* Your content here */}
      </main>
    </div>
  );
}
```

## Key Features

- ✅ **Automatic sticky behavior**: Header becomes sticky when scrolling down
- ✅ **Smart hiding**: Header hides when scrolling down further
- ✅ **Smooth transitions**: Configurable transition delays
- ✅ **TypeScript support**: Full type definitions included
- ✅ **Customizable**: Flexible styling and behavior options
- ✅ **Performance optimized**: Uses passive scroll listeners

## How It Works

1. **Normal state**: Header is positioned normally in document flow
2. **Scroll down**: Header becomes sticky and fixed to top
3. **Continue scrolling**: Header hides by moving up
4. **Scroll up**: Header reappears
5. **Scroll to top**: Header returns to normal positioning

## Customization

```tsx
<ScrollSenseHeader
  transitionDelay={500}        // Transition delay in ms
  hideThreshold={100}          // Hide threshold in pixels
  showThreshold={5}           // Show threshold in pixels
  onScrollStateChange={(isSticky, isHidden) => {
    console.log('Sticky:', isSticky, 'Hidden:', isHidden);
  }}
>
  <header>Your header content</header>
</ScrollSenseHeader>
```

## CSS Classes

The component automatically applies these classes:
- `.scroll-sense-header` - Base wrapper
- `.scroll-sense-header--sticky` - When sticky
- `.scroll-sense-header--sticky-transition` - For transitions
- `.scroll-sense-header--hidden` - When hidden

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Need Help?

Check the full documentation in README.md or see examples in examples.tsx
