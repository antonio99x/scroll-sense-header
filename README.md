# react-scroll-sense-header

A React component that provides sticky header functionality with scroll-based hiding and showing. Perfect for creating headers that stick to the top when scrolling down and hide when scrolling down further, then reappear when scrolling up.

## Features

- **Smart Scroll Detection**: Automatically detects scroll direction and position
- **Multiple Behaviors**: Choose between hide-on-scroll, always-fixed, or always-top
- **Responsive**: Works on all screen sizes
- **Performance Optimized**: Uses passive scroll listeners for better performance
- **Customizable**: Flexible styling and behavior options
- **TypeScript Support**: Full TypeScript definitions included
- **Zero Dependencies**: No external dependencies required

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
        <header>
          <h1>My Website Header</h1>
          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>
      </ScrollSenseHeader>
      
      <main>
        {/* Your main content here */}
      </main>
    </div>
  );
}
```

## Advanced Usage

```tsx
import React, { useRef } from 'react';
import { ScrollSenseHeader, ScrollSenseHeaderRef } from 'react-scroll-sense-header';

function App() {
  const headerRef = useRef<ScrollSenseHeaderRef>(null);

  const handleScrollStateChange = (isSticky: boolean, isHidden: boolean) => {
    console.log('Header is sticky:', isSticky);
    console.log('Header is hidden:', isHidden);
  };

  const resetHeader = () => {
    headerRef.current?.reset();
  };

  return (
    <div>
      <ScrollSenseHeader
        ref={headerRef}
        className="custom-header"
        behavior="hide-on-scroll"
        transitionDelay={500}
        hideThreshold={150}
        showThreshold={10}
        boxShadow={true}
        enableTransition={true}
        transitionDuration={400}
        zIndex={2000}
        backgroundColor="#ffffff"
        onScrollStateChange={handleScrollStateChange}
      >
        <header className="my-header">
          <h1>Advanced Header</h1>
          <button onClick={resetHeader}>Reset Header</button>
        </header>
      </ScrollSenseHeader>
      
      <main>
        {/* Your main content here */}
      </main>
    </div>
  );
}
```

## Behavior Options

### hide-on-scroll (default)
The header becomes sticky when scrolling down past the threshold and hides when continuing to scroll down, then reappears when scrolling up.

```tsx
<ScrollSenseHeader behavior="hide-on-scroll">
  <header>Your header content</header>
</ScrollSenseHeader>
```

### always-fixed
The header is always fixed to the top of the viewport.

```tsx
<ScrollSenseHeader behavior="always-fixed">
  <header>Your header content</header>
</ScrollSenseHeader>
```

### always-top
The header stays in its normal position in the document flow.

```tsx
<ScrollSenseHeader behavior="always-top">
  <header>Your header content</header>
</ScrollSenseHeader>
```

## Box Shadow Presets

Choose from predefined box shadow options that are applied when the header is sticky and visible:

### none (default)
No box shadow is applied.

```tsx
<ScrollSenseHeader boxShadow="none">
  <header>Your header content</header>
</ScrollSenseHeader>
```

### light
Subtle shadow for minimal depth.

```tsx
<ScrollSenseHeader boxShadow="light">
  <header>Your header content</header>
</ScrollSenseHeader>
```

### medium
Balanced shadow for good depth perception.

```tsx
<ScrollSenseHeader boxShadow="medium">
  <header>Your header content</header>
</ScrollSenseHeader>
```

### heavy
Strong shadow for prominent depth.

```tsx
<ScrollSenseHeader boxShadow="heavy">
  <header>Your header content</header>
</ScrollSenseHeader>
```

### custom
Use your own custom box shadow value.

```tsx
<ScrollSenseHeader 
  boxShadow="custom" 
  customBoxShadow="0 4px 12px 0 rgba(59, 130, 246, 0.15)"
>
  <header>Your header content</header>
</ScrollSenseHeader>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | **Required.** The content to wrap with sticky functionality |
| `className` | `string` | `''` | Additional CSS class names |
| `style` | `CSSProperties` | `{}` | Inline styles to apply to the wrapper |
| `behavior` | `'hide-on-scroll' \| 'always-fixed' \| 'always-top'` | `'hide-on-scroll'` | Header behavior mode |
| `hideThreshold` | `number` | `headerHeight` | Scroll position threshold for hiding the header |
| `showThreshold` | `number` | `3` | Scroll position threshold for showing the header |
| `dataAttribute` | `string` | `'data-scroll-sense-header'` | Data attribute name for the wrapper element |
| `boxShadow` | `'none' \| 'light' \| 'medium' \| 'heavy' \| 'custom'` | `'none'` | Box shadow preset to apply when sticky |
| `customBoxShadow` | `string` | - | Custom box shadow value (only used when `boxShadow="custom"`) |
| `enableTransition` | `boolean` | `true` | Whether to enable CSS transitions |
| `transitionDuration` | `number` | `300` | Duration of transitions in milliseconds |
| `zIndex` | `number` | `1000` | CSS z-index value |
| `backgroundColor` | `string` | `'transparent'` | Background color of the header |
| `onScrollStateChange` | `(isSticky: boolean, isHidden: boolean) => void` | - | Callback fired when scroll state changes |

## Ref Methods

The component exposes the following methods through a ref:

| Method | Type | Description |
|--------|------|-------------|
| `getScrollState` | `() => ScrollState` | Returns current scroll state object |
| `reset` | `() => void` | Resets the header to its initial state |

## ScrollState Interface

```tsx
interface ScrollState {
  isSticky: boolean;      // Whether the header is in sticky mode
  isHidden: boolean;      // Whether the header is hidden
  isTransitioning: boolean; // Whether the header is transitioning
}
```

## CSS Classes

The component automatically applies the following CSS classes:

- `.scroll-sense-header` - Base class for the wrapper
- `.scroll-sense-header--sticky` - Applied when header becomes sticky
- `.scroll-sense-header--sticky-transition` - Applied for smooth transitions
- `.scroll-sense-header--hidden` - Applied when header is hidden
- `.scroll-sense-header--always-fixed` - Applied when behavior is always-fixed
- `.scroll-sense-header--always-top` - Applied when behavior is always-top

## Custom Styling

You can override the default styles by targeting the CSS classes:

```css
.scroll-sense-header {
  background-color: #your-color;
}

.scroll-sense-header--sticky {
  background-color: #your-sticky-color;
}

.scroll-sense-header--hidden {
  transform: translateY(-100%);
}
```

## How It Works

### hide-on-scroll behavior (default)
1. **Initial State**: Header is positioned normally in the document flow
2. **Scroll Down**: When scrolling down past the threshold, header becomes sticky and fixed to the top
3. **Continue Scrolling**: Header hides by moving up (negative top position)
4. **Scroll Up**: Header reappears and becomes visible again
5. **Scroll to Top**: Header returns to normal positioning

### always-fixed behavior
The header is immediately fixed to the top of the viewport and stays there regardless of scroll position.

### always-top behavior
The header remains in its normal position in the document flow and doesn't change based on scroll.

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
