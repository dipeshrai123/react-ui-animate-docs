# React UI Animate Documentation Outline (v5.3.0-next.1)

## Learning Path Structure

This outline follows a progressive learning approach - from basic concepts to advanced patterns.

---

## 📚 Table of Contents

### 1. **Getting Started** (Foundation)

- Introduction to React UI Animate
- Installation
- Quick example
- Core concepts overview
- **Learning Goal:** Understand what the library does and how to set it up

### 2. **Core Concepts** (Building Blocks)

#### 2.1 The `animate` Component

- What is `animate`?
- Basic usage with static styles
- Available HTML elements (`animate.div`, `animate.span`, etc.)
- **Learning Goal:** Understand the foundation component

#### 2.2 The `useValue` Hook

- Introduction to `useValue`
- Basic usage with numbers
- Immediate vs animated updates
- Working with different value types (numbers, strings, arrays, objects)
- **Learning Goal:** Master the core hook for managing animated values

#### 2.3 Animation Modifiers Overview

- What are animation modifiers?
- When to use each modifier
- How modifiers work with `useValue`
- **Learning Goal:** Understand the animation system

### 3. **Animation Modifiers** (How to Animate)

#### 3.1 `withSpring` - Physics-Based Motion

- Natural, bouncy animations
- Configuration options (stiffness, damping, mass)
- Real-world examples
- **Learning Goal:** Create natural-feeling animations

#### 3.2 `withTiming` - Time-Based Animations

- Precise, controlled animations
- Duration and easing
- When to use timing vs spring
- **Learning Goal:** Create predictable, timed animations

#### 3.3 `withDecay` - Momentum Animations

- Natural deceleration
- Velocity and friction
- Use cases (scroll, drag)
- **Learning Goal:** Add momentum to interactions

#### 3.4 `withSequence` - Chaining Animations

- Running animations one after another
- Complex choreography
- Real-world patterns
- **Learning Goal:** Create multi-step animations

#### 3.5 `withLoop` - Repeating Animations

- Infinite and finite loops
- Loading indicators
- Continuous animations
- **Learning Goal:** Create repeating animations

#### 3.6 `withDelay` - Delayed Animations

- Adding pauses
- Staggered animations
- Sequential reveals
- **Learning Goal:** Time animations precisely

### 4. **Presence & Exit Animations** (Mount/Unmount)

#### 4.1 Introduction to Presence

- What is `Presence`?
- Why use Presence instead of conditional rendering?
- Basic usage
- **Learning Goal:** Understand exit animations

#### 4.2 Basic Presence Patterns

- Fade in/out
- Slide animations
- Scale animations
- **Learning Goal:** Create simple enter/exit animations

#### 4.3 Advanced Presence

- Multiple properties
- Complex exit animations
- Modal patterns
- **Learning Goal:** Master exit animations

### 5. **Interactive Animations** (User Interactions)

#### 5.1 Hover Animations

- Using the `hover` prop
- Preset animations (`hoverScale`)
- Custom hover effects
- **Learning Goal:** Animate on hover

#### 5.2 Press Animations

- Using the `press` prop
- Preset animations (`pressScale`)
- Button feedback
- **Learning Goal:** Animate on click/press

#### 5.3 Focus Animations

- Using the `focus` prop
- Accessibility considerations
- Form inputs
- **Learning Goal:** Animate on focus

#### 5.4 View Animations (Scroll-Triggered)

- Using the `view` prop
- Intersection Observer integration
- Scroll-triggered reveals
- **Learning Goal:** Animate when elements enter viewport

### 6. **Gestures** (User Input)

#### 6.1 Gestures Overview

- What are gesture hooks?
- When to use gestures
- Common patterns
- **Learning Goal:** Understand gesture system

#### 6.2 `useDrag` - Drag Interactions

- Basic drag setup
- Movement tracking
- Multiple elements
- Real-world examples (cards, sliders)
- **Learning Goal:** Implement drag interactions

#### 6.3 `useMove` - Pointer Tracking

- Mouse/pointer movement
- Single and multiple elements
- Hover effects
- **Learning Goal:** Track pointer movement

#### 6.4 `useScroll` - Scroll Interactions

- Scroll event handling
- Scroll-based animations
- Parallax effects
- **Learning Goal:** React to scroll events

#### 6.5 `useWheel` - Wheel/Touchpad

- Wheel event handling
- Zoom interactions
- Custom scroll behavior
- **Learning Goal:** Handle wheel gestures

#### 6.6 `useScrollProgress` - Progress Tracking

- Track scroll progress
- Progress-based animations
- Scroll indicators
- **Learning Goal:** Create progress-based animations

### 7. **Advanced Topics** (Power User Features)

#### 7.1 Interpolation

- The `to` function
- Mapping values to ranges
- Color interpolation
- Complex mappings
- **Learning Goal:** Map values to different ranges

#### 7.2 Combining Values

- The `combine` utility
- Derived animations
- Complex calculations
- **Learning Goal:** Combine multiple animated values

#### 7.3 Custom Animated Components

- `makeAnimated` utility
- Creating custom components
- TypeScript support
- **Learning Goal:** Extend the library

#### 7.4 Utility Hooks

- `useInView` - Viewport detection
- `useOutsideClick` - Click outside detection
- **Learning Goal:** Use utility hooks

### 8. **Real-World Examples** (Putting It All Together)

#### 8.1 Modal with Exit Animation

- Complete modal implementation
- Backdrop animation
- Exit animations
- **Learning Goal:** Build a production-ready modal

#### 8.2 Scroll-Triggered Animations

- Feature cards
- Staggered reveals
- Progress indicators
- **Learning Goal:** Create scroll-based experiences

#### 8.3 Interactive Buttons

- Hover effects
- Press feedback
- Loading states
- **Learning Goal:** Build interactive buttons

#### 8.4 Draggable Cards

- Drag interactions
- Spring animations
- Multi-card layouts
- **Learning Goal:** Create draggable interfaces

### 9. **Best Practices & Performance**

#### 9.1 Performance Tips

- GPU acceleration
- Avoiding layout thrashing
- Optimizing animations
- **Learning Goal:** Write performant animations

#### 9.2 Common Patterns

- Reusable patterns
- Code organization
- TypeScript tips
- **Learning Goal:** Write maintainable code

#### 9.3 Troubleshooting

- Common issues
- Debugging tips
- FAQ
- **Learning Goal:** Solve problems independently

---

## 📖 Learning Progression

### Beginner Path (Days 1-3)

1. Getting Started
2. Core Concepts (animate, useValue)
3. Animation Modifiers (withSpring, withTiming)
4. Interactive Animations (hover, press)

### Intermediate Path (Days 4-7)

5. Presence & Exit Animations
6. Gestures (useDrag, useMove)
7. Advanced Modifiers (withSequence, withLoop)
8. View Animations

### Advanced Path (Days 8+)

9. Advanced Topics (Interpolation, combine)
10. Complex Gestures (useScroll, useWheel)
11. Real-World Examples
12. Best Practices

---

## 🎯 Key Changes from Previous Version

1. **Mount → Presence**: New component for exit animations
2. **New animate props**: `hover`, `press`, `focus`, `view` for declarative animations
3. **New utilities**: `makeAnimated`, `to`, `combine`
4. **New hooks**: `useScrollProgress`, `useInView`
5. **Preset animations**: `hoverScale`, `pressScale`

---

## 📝 Documentation Principles

1. **Beginner-Friendly**: Start simple, build complexity gradually
2. **Example-Driven**: Every concept has working examples
3. **Real-World Focus**: Show practical use cases
4. **Progressive Disclosure**: Advanced topics come after basics
5. **Clear Structure**: Logical flow from basics to advanced

---

This outline ensures developers can:

- Start with zero knowledge
- Learn concepts in logical order
- Build real-world applications
- Understand when to use each feature
- Write performant, maintainable code
