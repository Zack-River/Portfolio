# Abdullah Wajih | Software Engineer Portfolio

An immersive, high-performance personal portfolio that blends modern web development with interactive 3D graphics. Designed to showcase engineering capabilities without sacrificing user experience or load times.

🌐 **Live Demo:** [zack-river.vercel.app](https://zack-river.vercel.app/)

## 🚀 The Tech Stack

### Core Architecture
- **Framework:** React 18 & Vite
- **Language:** TypeScript
- **Routing:** React Router v6
- **Styling:** Tailwind CSS (with custom design tokens & dark mode)

### 3D & Graphics
- **Engine:** Three.js
- **Integration:** React Three Fiber (`@react-three/fiber`) & Drei (`@react-three/drei`)
- **Optimization:** Draco 3D Geometry Compression (reducing model size by >80%)

### Animation & Physics
- **Scroll Animations:** GSAP (GreenSock) & ScrollTrigger
- **UI Transitions:** Framer Motion
- **Smooth Scrolling:** Lenis 

## ⚡ Performance Optimizations

Despite featuring heavy WebGL content and advanced scroll animations, this architecture is heavily optimized:
- **True Lazy Loading:** The 3D scene and massive Three.js library are entirely detached from the critical render path.
- **Accurate Pre-loading:** A custom loading screen dynamically tracks the exact network download ratio of the Draco-compressed `.glb` payload.
- **Theme-Aware Lighting:** Procedural IBL (Image-Based Lighting) in light mode to eliminate HDR network requests, and deferred HDR environment mapping in dark mode.
- **Render-Blocking Prevention:** Aggressive code-splitting and asset deferral ensuring an exceptionally fast First Contentful Paint (FCP).

## 💻 Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Zack-River/Portfolio.git
