# Testing Guide for react-scroll-sense-header

## 🧪 Testing Methods

Here are several ways to test your package before publishing:

## 1. Quick HTML Test (Fastest)

Open `test.html` in your browser to quickly verify the core logic:

```bash
# Open the test file
open test.html
# or
firefox test.html
# or
google-chrome test.html
```

**What to test:**
- Scroll down slowly → header becomes sticky
- Continue scrolling → header hides
- Scroll up → header reappears  
- Scroll to top → header returns to normal
- Click buttons to test reset and status

## 2. React Test App (Most Comprehensive)

The test app provides a full React environment to test the actual package:

```bash
# Start the test app
cd test-app
npm start
```

**What to test:**
- All scroll behaviors
- TypeScript integration
- Component props and callbacks
- Ref methods (reset, getScrollState)
- CSS class applications
- Console logging of state changes

## 3. npm pack Testing (Production-like)

Test the actual packaged version:

```bash
# Build and pack the package
npm run build
npm pack

# Install in test app
cd test-app
npm install ../react-scroll-sense-header-1.0.0.tgz

# Start the app
npm start
```

## 4. npm link Testing (Development)

For active development with live updates:

```bash
# In package directory
npm link

# In test app directory  
cd test-app
npm link react-scroll-sense-header

# Start both (package in watch mode)
# Terminal 1: npm run dev (in package dir)
# Terminal 2: npm start (in test-app dir)
```

## 5. Manual Testing Checklist

### ✅ Basic Functionality
- [ ] Header becomes sticky when scrolling down past threshold
- [ ] Header hides when continuing to scroll down
- [ ] Header shows when scrolling up
- [ ] Header returns to normal when scrolling to top
- [ ] Smooth transitions work correctly
- [ ] Body padding adjusts to prevent layout shift

### ✅ Props Testing
- [ ] `transitionDelay` prop works
- [ ] `hideThreshold` prop works  
- [ ] `showThreshold` prop works
- [ ] `onScrollStateChange` callback fires
- [ ] `className` and `style` props apply correctly

### ✅ Ref Methods
- [ ] `reset()` method works
- [ ] `getScrollState()` returns correct state
- [ ] Ref is properly typed in TypeScript

### ✅ CSS Classes
- [ ] `.scroll-sense-header` base class applies
- [ ] `.scroll-sense-header--sticky` applies when sticky
- [ ] `.scroll-sense-header--sticky-transition` applies for transitions
- [ ] `.scroll-sense-header--hidden` applies when hidden

### ✅ Edge Cases
- [ ] Works with different header heights
- [ ] Works with rapid scrolling
- [ ] Works when scrolling to exact threshold values
- [ ] Works when resizing window
- [ ] Works with different screen sizes

### ✅ Performance
- [ ] No memory leaks (check browser dev tools)
- [ ] Smooth scrolling performance
- [ ] Passive scroll listeners work correctly

## 6. Browser Testing

Test in multiple browsers:
- Chrome (latest)
- Firefox (latest)  
- Safari (if on Mac)
- Edge (if on Windows)

## 7. Mobile Testing

Test on mobile devices or browser dev tools:
- Touch scrolling behavior
- Different screen sizes
- Performance on mobile

## 8. Integration Testing

Test with different React setups:
- Create React App (already done)
- Next.js
- Vite
- Webpack

## 🚀 Running Tests

### Start React Test App:
```bash
cd test-app
npm start
```

### Open HTML Test:
```bash
open test.html
```

### Build and Test Package:
```bash
npm run build
npm pack
cd test-app
npm install ../react-scroll-sense-header-1.0.0.tgz
npm start
```

## 📝 Test Results

After testing, you should see:
- Smooth sticky behavior
- Proper hiding/showing on scroll
- Console logs showing state changes
- Buttons working correctly
- No console errors
- Good performance

If all tests pass, your package is ready for publishing! 🎉
