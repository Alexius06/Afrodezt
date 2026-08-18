# Scroll Animations - Quick Reference Guide

## ✨ What's Been Implemented

### 1. **NAVBAR - Advanced Scroll Effects**
```jsx
// Features:
- Shrinks (scaleY) as user scrolls
- Background opacity increases (glass morphism)
- Logo scales proportionally
- Nav links have animated underline reveals on hover
- CTA button has glow effect on hover
```
**File:** `src/components/navbar.jsx`
**Customization:**
- Change `scrollTop / 2000` to adjust shrink sensitivity
- Modify `navBgOpacity` calculation to change glass effect intensity
- Update `hover:shadow-fire/50` to change button glow

---

### 2. **HERO SECTION - Character & Element Reveals**
```jsx
// Features:
- Tagline slides down on load
- Headlines fade in with staggered delays
- Description slides in
- Buttons slide from bottom
- Metal patterns slide in from sides
- Background image zooms on scroll
```
**File:** `src/pages/index.jsx` (Hero section)
**Customization:**
- Change delays: `animation: "fadeInUp 1s ease-out 0.3s forwards"`
- Adjust zoom speed: `1 + scrollTop / 3000` (smaller divisor = faster)
- Modify pattern animations: `fadeInLeft`, `fadeInRight`

---

### 3. **CAPABILITIES GRID - Cascading Cards**
```jsx
// Features:
- Cards 1-5: Rotate on entry (rotate 5deg + scale 0.95)
- Card 6: Scale animation (always navy)
- Staggered delays: 0.1s, 0.2s, 0.3s, 0.4s, 0.5s, 0.6s
- Hover: Navy background + text color change
- Floating decorative elements rotating in background
```
**File:** `src/pages/index.jsx` (Services section)
**Customization:**
- Change stagger: `style={{ animation: "rotateIn 0.8s ease-out 0.1s forwards" }}`
- Adjust rotation angle: Edit `@keyframes rotateIn` in `animations.css`
- Add/remove cards: Duplicate/remove grid items with new delays

---

### 4. **DECORATIVE ELEMENTS**
```jsx
// FloatingAccent - Rotating geometric shapes
<FloatingAccent 
  className="top-10 left-20 text-fire" 
  size="w-32 h-32" 
  duration={30} 
  delay={5} 
/>
```
**File:** `src/components/DecorativeElements.jsx`
**Properties:**
- `size`: w-{num} h-{num} (Tailwind sizing)
- `duration`: Rotation duration in seconds
- `delay`: Start delay in seconds
- `className`: Position and color (top-X, left-X, text-{color})

---

## 📚 Custom Hooks

### `useInView(options)`
Detects when element enters viewport and triggers animations once.
```jsx
const [ref, isInView] = useInView({ threshold: 0.2 });
// threshold: 0-1, lower = triggers earlier
```

### `useScroll()`
Tracks current scroll position for dynamic effects.
```jsx
const scrollY = useScroll();
// Returns current scroll position in pixels
```

---

## 🎬 Available Animation Keyframes

All defined in `src/animations.css`:

| Animation | Duration | Usage |
|-----------|----------|-------|
| `fadeInUp` | 0.8s | Elements slide up + fade |
| `fadeInDown` | 0.8s | Elements slide down + fade |
| `fadeInLeft` | 0.8s | Elements slide left + fade |
| `fadeInRight` | 0.8s | Elements slide right + fade |
| `scaleIn` | 0.8s | Elements scale from 0.9 |
| `rotateIn` | 0.8s | Elements rotate + scale |
| `charReveal` | 0.6s | Character-by-character |
| `wordReveal` | 0.6s | Word-by-word |
| `drawLine` | 0.8s | Width 0→100% |
| `floatPulse` | 3s | Loop: scale + Y translate |
| `rotateSlow` | 20s | Continuous rotation |
| `slideDown` | 0.6s | Top→bottom |

---

## 💡 How to Add Animations to New Components

### Method 1: Using Inline Styles (Simplest)
```jsx
<div style={{ animation: "fadeInUp 0.8s ease-out 0.3s forwards", opacity: 0 }}>
  Content
</div>
```

### Method 2: Using Animation Components
```jsx
import { AnimatedElement } from "../components/AnimationComponents";

<AnimatedElement 
  animation="fadeInUp" 
  delay={300}
  threshold={0.2}
>
  Content
</AnimatedElement>
```

### Method 3: Using useInView Hook
```jsx
const [ref, isInView] = useInView();

<div ref={ref} className={isInView ? "animate-fadeInUp" : "opacity-0"}>
  Content
</div>
```

---

## 🎯 Performance Tips

1. **Use intersection observers** (useInView) for scroll-heavy pages
2. **Limit concurrent animations** to 3-4 elements per section
3. **Use `will-change` CSS** sparingly for complex animations
4. **Debounce scroll events** if adding custom scroll listeners
5. **Test on mobile** - reduce animation durations for faster devices

---

## 🔧 Common Customizations

### Change Hover Color
```jsx
// From: hover:bg-navy hover:text-paper
// To: hover:bg-fire hover:text-white
className="hover:bg-fire hover:text-white"
```

### Adjust Animation Speed
```jsx
// Make 2x faster: change 0.8s to 0.4s
style={{ animation: "fadeInUp 0.4s ease-out 0.3s forwards" }}
```

### Add Shadow on Animation
```jsx
// Add to className:
className="shadow-lg shadow-fire/50"
```

### Stagger Multiple Elements
```jsx
{items.map((item, i) => (
  <div key={i} style={{
    animation: `fadeInUp 0.8s ease-out ${i * 0.1}s forwards`,
    opacity: 0
  }}>
    {item}
  </div>
))}
```

---

## 🚀 Next Steps (Optional Enhancements)

1. **Add parallax scrolling** to more sections
2. **Implement scroll-triggered counters** for more stats
3. **Add reveal on scroll** to portfolio items
4. **Create custom scroll progress** indicator
5. **Add text mask animations** for headlines
6. **Implement physics-based scroll animations** with libraries like Framer Motion

---

**Questions?** Check specific animation keyframes in `src/animations.css`
**Need more animations?** Extend the CSS file following the same @keyframes pattern
