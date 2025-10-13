# React ScrollSenseHeader

A React component that provides intelligent header behavior based on scroll position. The header can hide/show on scroll, stay fixed, or remain at the top of the document.

## Features

- **Hide on Scroll**: Header disappears when scrolling down, reappears when scrolling up
- **Always Fixed**: Header stays fixed at the top of the viewport
- **Always Top**: Header stays at the top of the document
- **Customizable Thresholds**: Control when the header becomes sticky or hides
- **Box Shadow Presets**: Choose from light, medium, heavy, or none
- **Smooth Transitions**: Adjustable transition duration (set to 0 for instant changes)
- **Custom Styling**: Full control over colors, z-index, and CSS classes
- **TypeScript Support**: Full TypeScript definitions included
- **Ref Support**: Access component methods and state via ref

## Installation

```bash
npm install react-scroll-sense-header
```

## Usage

```tsx
import React, { useRef } from 'react';
import { ScrollSenseHeader, ScrollSenseHeaderRef } from 'react-scroll-sense-header';

function App() {
  const headerRef = useRef<ScrollSenseHeaderRef>(null);

  return (
    <div>
      <ScrollSenseHeader
        ref={headerRef}
        behavior="hide-on-scroll"
        hideThreshold={100}
        showThreshold={5}
        boxShadow="light"
        transitionDuration={300}
        zIndex={1000}
        backgroundColor="#ffffff"
        onScrollStateChange={(isSticky, isHidden) => {
          console.log('Header state:', { isSticky, isHidden });
        }}
      >
        <div style={{ padding: '1rem 2rem', background: 'white' }}>
          <h1>My Header</h1>
          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </ScrollSenseHeader>
      
      {/* Your page content */}
      <div style={{ height: '200vh' }}>
        <h2>Page Content</h2>
        <p>Scroll down to see the header behavior...</p>
      </div>
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `behavior` | `'hide-on-scroll' \| 'always-fixed' \| 'always-top'` | `'hide-on-scroll'` | Header behavior mode |
| `hideThreshold` | `number` | `100` | Pixels to scroll before hiding (hide-on-scroll only) |
| `showThreshold` | `number` | `3` | Pixels to scroll up before showing (hide-on-scroll only) |
| `boxShadow` | `'none' \| 'light' \| 'medium' \| 'heavy'` | `'light'` | Box shadow preset |
| `transitionDuration` | `number` | `300` | Transition duration in milliseconds (0 for instant) |
| `zIndex` | `number` | `1000` | CSS z-index value |
| `backgroundColor` | `string` | `'transparent'` | Background color |
| `className` | `string` | `''` | Additional CSS classes |
| `style` | `React.CSSProperties` | `{}` | Additional inline styles |
| `dataAttribute` | `string` | `'data-scroll-sense-header'` | Data attribute for the header element |
| `onScrollStateChange` | `(isSticky: boolean, isHidden: boolean) => void` | `undefined` | Callback when scroll state changes |

## Ref Methods

Access these methods through the ref:

```tsx
const headerRef = useRef<ScrollSenseHeaderRef>(null);

// Get current scroll state
const scrollState = headerRef.current?.getScrollState();
// Returns: { isSticky: boolean, isHidden: boolean, isTransitioning: boolean }

// Reset header to initial state
headerRef.current?.reset();
```

## Behavior Modes

### Hide on Scroll
- Header becomes sticky when scrolling down past `hideThreshold`
- Header hides when continuing to scroll down
- Header shows when scrolling up past `showThreshold`

### Always Fixed
- Header stays fixed at the top of the viewport
- No hiding/showing behavior

### Always Top
- Header stays at the top of the document
- Scrolls with the page content

## Styling

The component includes built-in CSS classes:

```css
.scroll-sense-header {
  /* Base styles */
}

.scroll-sense-header--sticky {
  /* Applied when header becomes sticky */
}

.scroll-sense-header--hidden {
  /* Applied when header is hidden */
}

.scroll-sense-header--sticky-transition {
  /* Applied during transitions */
}

.scroll-sense-header--box-shadow-light {
  /* Light box shadow */
}

.scroll-sense-header--box-shadow-medium {
  /* Medium box shadow */
}

.scroll-sense-header--box-shadow-heavy {
  /* Heavy box shadow */
}
```

## Custom Styling

You can customize the appearance using:

1. **CSS Classes**: Add your own classes via the `className` prop
2. **Inline Styles**: Use the `style` prop for dynamic styling
3. **CSS Variables**: The component uses `--transition-duration` for transitions

```tsx
<ScrollSenseHeader
  className="my-custom-header"
  style={{
    '--transition-duration': '500ms',
    background: 'linear-gradient(45deg, #667eea, #764ba2)',
    color: 'white'
  }}
>
  {/* Header content */}
</ScrollSenseHeader>
```

## TypeScript

The package includes full TypeScript definitions:

```tsx
import { 
  ScrollSenseHeader, 
  ScrollSenseHeaderRef, 
  ScrollSenseHeaderProps,
  BoxShadowPreset 
} from 'react-scroll-sense-header';
```

## Browser Support

- Modern browsers with ES6+ support
- React 16.8+ (hooks support required)

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.