import React, { useRef } from 'react';
import { ScrollSenseHeader, ScrollSenseHeaderRef } from './src';

// Example 1: Basic Usage
export function BasicExample() {
  return (
    <div>
      <ScrollSenseHeader>
        <header style={{ 
          padding: '1rem', 
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e0e0e0'
        }}>
          <h1>Basic Header Example</h1>
          <nav>
            <a href="#home" style={{ marginRight: '1rem' }}>Home</a>
            <a href="#about" style={{ marginRight: '1rem' }}>About</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>
      </ScrollSenseHeader>
      
      <main style={{ padding: '2rem' }}>
        <h2>Main Content</h2>
        <p>Scroll down to see the header become sticky and hide...</p>
        {/* Add more content to enable scrolling */}
        {Array.from({ length: 50 }, (_, i) => (
          <p key={i}>This is paragraph {i + 1}. Keep scrolling to see the effect!</p>
        ))}
      </main>
    </div>
  );
}

// Example 2: Advanced Usage with Custom Props
export function AdvancedExample() {
  const headerRef = useRef<ScrollSenseHeaderRef>(null);

  const handleScrollStateChange = (isSticky: boolean, isHidden: boolean) => {
    console.log('Header state changed:', { isSticky, isHidden });
  };

  const resetHeader = () => {
    headerRef.current?.reset();
  };

  const getScrollState = () => {
    const state = headerRef.current?.getScrollState();
    console.log('Current scroll state:', state);
  };

  return (
    <div>
      <ScrollSenseHeader
        ref={headerRef}
        className="custom-header"
        transitionDelay={500}
        hideThreshold={150}
        showThreshold={10}
        onScrollStateChange={handleScrollStateChange}
        style={{ 
          backgroundColor: '#f8f9fa',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}
      >
        <header style={{ 
          padding: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1>Advanced Header</h1>
          <div>
            <button onClick={resetHeader} style={{ marginRight: '1rem' }}>
              Reset Header
            </button>
            <button onClick={getScrollState}>
              Log State
            </button>
          </div>
        </header>
      </ScrollSenseHeader>
      
      <main style={{ padding: '2rem' }}>
        <h2>Advanced Example</h2>
        <p>This example shows custom thresholds and callbacks.</p>
        <p>Try the buttons in the header to interact with the component!</p>
        {/* Add more content */}
        {Array.from({ length: 30 }, (_, i) => (
          <div key={i} style={{ marginBottom: '2rem' }}>
            <h3>Section {i + 1}</h3>
            <p>This is section {i + 1} content. The header will hide after scrolling down 150px and show again when scrolling up past 10px.</p>
          </div>
        ))}
      </main>
    </div>
  );
}

// Example 3: Next.js App Router Usage
export function NextJSExample() {
  return (
    <div>
      <ScrollSenseHeader
        className="nextjs-header"
        style={{
          backgroundColor: '#000000',
          color: '#ffffff'
        }}
      >
        <header style={{ 
          padding: '1rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1>Next.js App</h1>
          <nav>
            <a href="/" style={{ color: '#ffffff', marginRight: '1rem' }}>Home</a>
            <a href="/about" style={{ color: '#ffffff', marginRight: '1rem' }}>About</a>
            <a href="/contact" style={{ color: '#ffffff' }}>Contact</a>
          </nav>
        </header>
      </ScrollSenseHeader>
      
      <main style={{ padding: '2rem' }}>
        <h2>Next.js Example</h2>
        <p>Perfect for Next.js applications with dark theme headers.</p>
        {/* Content for scrolling */}
        {Array.from({ length: 40 }, (_, i) => (
          <div key={i} style={{ marginBottom: '1rem' }}>
            <h3>Page Content {i + 1}</h3>
            <p>This demonstrates how the component works in a Next.js environment.</p>
          </div>
        ))}
      </main>
    </div>
  );
}

// Example 4: Custom Styling
export function CustomStylingExample() {
  return (
    <div>
      <style>{`
        .custom-sticky-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        
        .custom-sticky-header--sticky {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          backdrop-filter: blur(10px);
        }
        
        .custom-sticky-header--hidden {
          transform: translateY(-100%);
        }
      `}</style>
      
      <ScrollSenseHeader
        className="custom-sticky-header"
        transitionDelay={200}
      >
        <header style={{ 
          padding: '1rem',
          textAlign: 'center'
        }}>
          <h1>Custom Styled Header</h1>
          <p>With gradient background and blur effect</p>
        </header>
      </ScrollSenseHeader>
      
      <main style={{ padding: '2rem' }}>
        <h2>Custom Styling Example</h2>
        <p>This example shows how to customize the appearance with CSS.</p>
        {/* Content for scrolling */}
        {Array.from({ length: 25 }, (_, i) => (
          <div key={i} style={{ marginBottom: '1.5rem' }}>
            <h3>Styled Section {i + 1}</h3>
            <p>Notice the gradient background and smooth transitions.</p>
          </div>
        ))}
      </main>
    </div>
  );
}
