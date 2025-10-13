import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';
import { ScrollSenseHeaderProps, ScrollState, ScrollSenseHeaderRef } from './types';

const ScrollSenseHeader = forwardRef<ScrollSenseHeaderRef, ScrollSenseHeaderProps>(
  (
    {
      children,
      className = '',
      style = {},
      behavior = 'hide-on-scroll',
      hideThreshold,
      showThreshold = 3,
      dataAttribute = 'data-scroll-sense-header',
      boxShadow = 'light',
      transitionDuration = 300,
      zIndex = 1000,
      backgroundColor = 'transparent',
      onScrollStateChange,
    },
    ref
  ) => {
    const headerRef = useRef<HTMLDivElement>(null);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [scrollState, setScrollState] = useState<ScrollState>({
      isSticky: false,
      isHidden: false,
      isTransitioning: false,
    });

    useImperativeHandle(ref, () => ({
      getScrollState: () => scrollState,
      reset: () => {
        if (headerRef.current) {
          headerRef.current.style.top = '0';
          headerRef.current.classList.remove(
            'scroll-sense-header--sticky',
            'scroll-sense-header--sticky-transition',
            'scroll-sense-header--hidden',
            'scroll-sense-header--always-fixed',
            'scroll-sense-header--always-top'
          );
          document.body.style.paddingTop = '0';
          setScrollState({
            isSticky: false,
            isHidden: false,
            isTransitioning: false,
          });
        }
      },
    }));

    useEffect(() => {
      const header = headerRef.current;
      if (!header) return;

      // Reset component state when behavior changes
      const resetComponent = () => {
        header.style.top = '0';
        header.classList.remove(
          'scroll-sense-header--sticky',
          'scroll-sense-header--sticky-transition',
          'scroll-sense-header--hidden',
          'scroll-sense-header--always-fixed',
          'scroll-sense-header--always-top'
        );
        document.body.style.paddingTop = '0';
        setScrollState({
          isSticky: false,
          isHidden: false,
          isTransitioning: false,
        });
        setLastScrollY(window.scrollY);
      };

      // Reset first to clean up any previous behavior
      resetComponent();

      const headerHeight = header.clientHeight || 0;
      const threshold = hideThreshold || headerHeight;

      // Handle different behaviors
      if (behavior === 'always-fixed') {
        header.classList.add('scroll-sense-header--always-fixed');
        document.body.style.paddingTop = `${headerHeight}px`;
        setScrollState(prev => ({ ...prev, isSticky: true }));
        return;
      }

      if (behavior === 'always-top') {
        header.classList.add('scroll-sense-header--always-top');
        document.body.style.paddingTop = '0';
        setScrollState(prev => ({ ...prev, isSticky: false }));
        return;
      }

      // Default behavior: hide-on-scroll
      const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
          // Scroll down
          if (currentScrollY > threshold) {
            header.style.top = `-${headerHeight}px`;

            if (!header.classList.contains('scroll-sense-header--hidden')) {
              header.classList.add('scroll-sense-header--hidden');
            }

            setScrollState(prev => ({ ...prev, isHidden: true }));
          }
        } else if (currentScrollY < lastScrollY) {
          // Scroll up
          header.style.top = '0';

          if (header.classList.contains('scroll-sense-header--hidden')) {
            header.classList.remove('scroll-sense-header--hidden');
          }

          setScrollState(prev => ({ ...prev, isHidden: false }));
        }

        if (currentScrollY > threshold) {
          // Add sticky class
          if (!header.classList.contains('scroll-sense-header--sticky')) {
            // Remove any existing transition class first
            header.classList.remove('scroll-sense-header--sticky-transition');
            
            header.classList.add('scroll-sense-header--sticky');

            setScrollState(prev => ({ ...prev, isSticky: true }));

            // Set body padding-top to prevent layout shift
            document.body.style.paddingTop = `${headerHeight}px`;

            // Wait for transition duration and add transition class to prevent flicker
            if (transitionDuration > 0) {
              setTimeout(() => {
                header.classList.add('scroll-sense-header--sticky-transition');
                setScrollState(prev => ({ ...prev, isTransitioning: true }));
              }, transitionDuration);
            }
          }
        } else if (currentScrollY < showThreshold) {
          // Remove sticky class
          if (header.classList.contains('scroll-sense-header--sticky')) {
            header.classList.remove('scroll-sense-header--sticky');
            header.classList.remove('scroll-sense-header--sticky-transition');
            setScrollState(prev => ({ 
              ...prev, 
              isSticky: false, 
              isTransitioning: false 
            }));
          }

          // Remove body padding top
          document.body.style.paddingTop = '0';
        }

        setLastScrollY(currentScrollY);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [lastScrollY, hideThreshold, showThreshold, behavior, transitionDuration]);

    // Call onScrollStateChange when scroll state changes
    useEffect(() => {
      if (onScrollStateChange) {
        onScrollStateChange(scrollState.isSticky, scrollState.isHidden);
      }
    }, [scrollState.isSticky, scrollState.isHidden, onScrollStateChange]);

    const boxShadowClass = boxShadow !== 'none' ? `scroll-sense-header--box-shadow-${boxShadow}` : '';
    const combinedClassName = `scroll-sense-header ${boxShadowClass} ${className}`.trim();
    const combinedStyle = {
      ...style,
      zIndex,
      backgroundColor,
      ...(transitionDuration > 0 && {
        '--transition-duration': `${transitionDuration}ms`,
      }),
    };

    return (
      <div
        ref={headerRef}
        className={combinedClassName}
        style={combinedStyle}
        data-scroll-sense-header={dataAttribute}
      >
        {children}
      </div>
    );
  }
);

ScrollSenseHeader.displayName = 'ScrollSenseHeader';

export default ScrollSenseHeader;
