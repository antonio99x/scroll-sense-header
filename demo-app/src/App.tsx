import React, { useState, useRef, useEffect } from 'react';
import { ScrollSenseHeader, ScrollSenseHeaderRef } from 'react-scroll-sense-header';

function DemoApp() {
  const headerRef = useRef<ScrollSenseHeaderRef>(null);
  const [scrollY, setScrollY] = useState(0);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: 700 }}>
          ScrollSenseHeader
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
          Simple Demo - Scroll down to see the header behavior!
        </p>
      </div>

      <ScrollSenseHeader
        ref={headerRef}
        behavior="hide-on-scroll"
        hideThreshold={100}
        showThreshold={5}
        boxShadow="light"
        transitionDuration={300}
        zIndex={1000}
        backgroundColor="#ffffff"
      >
        <div style={{
          padding: '1rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'white',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h1 style={{
            margin: 0,
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#333'
          }}>
            ScrollSenseHeader Demo
          </h1>
          <nav style={{ display: 'flex', gap: '1rem' }}>
            <a href="#home" style={{
              textDecoration: 'none',
              color: '#333',
              fontWeight: 500,
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              transition: 'background-color 0.2s'
            }}>Home</a>
            <a href="#about" style={{
              textDecoration: 'none',
              color: '#333',
              fontWeight: 500,
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              transition: 'background-color 0.2s'
            }}>About</a>
            <a href="#contact" style={{
              textDecoration: 'none',
              color: '#333',
              fontWeight: 500,
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              transition: 'background-color 0.2s'
            }}>Contact</a>
            <a href="#docs" style={{
              textDecoration: 'none',
              color: '#333',
              fontWeight: 500,
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              transition: 'background-color 0.2s'
            }}>Docs</a>
          </nav>
        </div>
      </ScrollSenseHeader>

      <div style={{
        padding: '2rem',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h2 style={{
          color: '#495057',
          marginBottom: '1rem',
          fontSize: '1.8rem'
        }}>
          ScrollSenseHeader Demo
        </h2>
        <p style={{
          color: '#6c757d',
          marginBottom: '1.5rem',
          fontSize: '1.1rem'
        }}>
          This is a simple demo of the ScrollSenseHeader component. 
          Scroll down to see the header become sticky and then hide.
          Scroll back up to see it reappear.
        </p>

        <div style={{
          margin: '2rem 0',
          padding: '2rem',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          border: '1px solid #e0e0e0',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#495057', marginBottom: '1rem' }}>
            Current Scroll Position: {scrollY}px
          </h3>
          <p style={{ color: '#6c757d', lineHeight: '1.6' }}>
            The header will become sticky when you scroll down 100px, 
            and will hide when you continue scrolling down.
          </p>
        </div>
      </div>

      {/* Generate content for scrolling */}
      {Array.from({ length: 15 }, (_, i) => (
        <div key={i} style={{
          margin: '2rem',
          padding: '2rem',
          backgroundColor: i % 2 === 0 ? '#f8f9fa' : '#ffffff',
          borderRadius: '8px',
          border: '1px solid #e0e0e0',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#495057', marginBottom: '1rem' }}>
            Demo Section {i + 1}
          </h3>
          <p style={{ color: '#6c757d', lineHeight: '1.6', marginBottom: '1rem' }}>
            This is demo content for section {i + 1}. Scroll through these sections to test 
            the ScrollSenseHeader functionality.
          </p>
          <p style={{ color: '#6c757d', lineHeight: '1.6' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
            eu fugiat nulla pariatur.
          </p>
        </div>
      ))}

      <div style={{
        textAlign: 'center',
        padding: '3rem 2rem',
        backgroundColor: '#d4edda',
        borderRadius: '8px',
        margin: '2rem',
        border: '1px solid #c3e6cb'
      }}>
        <h3 style={{ color: '#155724', marginBottom: '1rem' }}>
          Demo Complete!
        </h3>
        <p style={{ color: '#155724', fontSize: '1.1rem' }}>
          You've seen the ScrollSenseHeader in action! 
          Check out the <a href="https://github.com/antonio99x/react-scroll-sense-header" style={{ color: '#155724', fontWeight: 'bold' }}>GitHub repository</a> for more information.
        </p>
      </div>
    </div>
  );
}

export default DemoApp;
