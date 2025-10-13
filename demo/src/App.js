import React, { useRef, useState, useEffect } from "react";
import { ScrollSenseHeader } from "react-scroll-sense-header";
import "./App.css";
import "react-scroll-sense-header/dist/styles.css";

function App() {
  const [behavior, setBehavior] = useState("hide-on-scroll");
  const [boxShadow, setBoxShadow] = useState("medium");
  const [transitionDuration, setTransitionDuration] = useState(300);
  const [backgroundColor, setBackgroundColor] = useState("#667eea");
  const headerRef = useRef(null);

  // Update CSS custom property for transition duration
  useEffect(() => {
    document.documentElement.style.setProperty('--transition-duration', `${transitionDuration}ms`);
  }, [transitionDuration]);

  const behaviorOptions = [
    { 
      value: "hide-on-scroll", 
      label: "Hide on Scroll", 
      description: "Header hides when scrolling down, shows when scrolling up" 
    },
    { 
      value: "always-fixed", 
      label: "Always Fixed", 
      description: "Header stays fixed at the top of the viewport" 
    },
    { 
      value: "always-top", 
      label: "Always Top", 
      description: "Header stays at the top of the document (scrolls with content)" 
    }
  ];

  const boxShadowOptions = [
    { value: "none", label: "None" },
    { value: "light", label: "Light" },
    { value: "medium", label: "Medium" },
    { value: "heavy", label: "Heavy" }
  ];

  const handleBehaviorChange = (value) => {
    setBehavior(value);
  };

  const handleBoxShadowChange = (value) => {
    setBoxShadow(value);
  };

  const handleTransitionDurationChange = (value) => {
    setTransitionDuration(parseInt(value));
  };

  const handleBackgroundColorChange = (value) => {
    setBackgroundColor(value);
  };

  return (
    <div className="App">
      <ScrollSenseHeader
        ref={headerRef}
        behavior={behavior}
        boxShadow={boxShadow}
        transitionDuration={transitionDuration}
        backgroundColor={backgroundColor}
        onScrollStateChange={(isSticky, isHidden) => {
          console.log('Header state:', { isSticky, isHidden });
        }}
      >
        <div className="header-content">
          <h1 className="logo">My Website</h1>
          <nav className="navigation">
            <ul className="nav-list">
              <li>
                <a href="#home" className="nav-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="nav-link">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </ScrollSenseHeader>

        <div className="app-layout">
          <aside className="settings-panel">            
            <div className="setting-group">
              <label className="setting-label">Behavior</label>
              {behaviorOptions.map((option) => (
                <div key={option.value} className="radio-group">
                  <input
                    type="radio"
                    id={`behavior-${option.value}`}
                    name="behavior"
                    value={option.value}
                    checked={behavior === option.value}
                    onChange={(e) => handleBehaviorChange(e.target.value)}
                  />
                  <label htmlFor={`behavior-${option.value}`} className="radio-label">
                    <strong>{option.label}</strong>
                    <small>{option.description}</small>
                  </label>
                </div>
              ))}
            </div>


            <div className="setting-group">
              <label className="setting-label">Box Shadow</label>
              {boxShadowOptions.map((option) => (
                <div key={option.value} className="radio-group">
                  <input
                    type="radio"
                    id={`shadow-${option.value}`}
                    name="boxShadow"
                    value={option.value}
                    checked={boxShadow === option.value}
                    onChange={(e) => handleBoxShadowChange(e.target.value)}
                  />
                  <label htmlFor={`shadow-${option.value}`} className="radio-label">
                    {option.label}
                  </label>
                </div>
              ))}
            </div>

            <div className="setting-group">
              <label className="setting-label">Transition Duration (ms)</label>
              <p className="setting-description">Controls how smoothly the header animates when hiding/showing</p>
              <input
                type="range"
                min="0"
                max="1000"
                step="50"
                value={transitionDuration}
                onChange={(e) => handleTransitionDurationChange(e.target.value)}
                className="range-input"
              />
              <span className="value-display">{transitionDuration}ms</span>
            </div>

            <div className="setting-group">
              <label className="setting-label">Background Color</label>
              <input
                type="color"
                value={backgroundColor}
                onChange={(e) => handleBackgroundColorChange(e.target.value)}
                className="color-input"
              />
            </div>
          </aside>

          <main className="main-content">
            <section id="home" className="section">
              <div className="container">
                <h2>Welcome to Our Website</h2>
                <p>
                  This is a simple React app demonstrating scroll-sensing header
                  functionality. Scroll down to see the header hide, and scroll up
                  to see it reappear! Use the settings panel to customize the behavior.
                </p>
              </div>
            </section>

        <section id="about" className="section">
          <div className="container">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <h2>Our Services</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <h2>Contact Us</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
        </section>

            {/* Extra content to enable scrolling */}
            <div className="spacer"></div>
          </main>
        </div>

      </div>
    );
  }

export default App;
