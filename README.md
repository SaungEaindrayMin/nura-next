ONENEX
- A modern frontend web application built with React 19 and Vite, focused on smooth animations, scalable architecture, and high-performance visuals using Framer Motion and Three.js.


Tech Stack Overview
1. React 19 – Modern UI library for building component-based interfaces
2. Vite – Fast development server and optimized build tool
3. Tailwind CSS – Utility-first CSS framework for rapid UI development
4. Framer Motion – Advanced animations and transitions
5. React Router DOM – Client-side routing
6. TanStack React Query – Data fetching, caching, and synchronization
7. Axios – HTTP client for API communication
8. Three.js + React Three Fiber/Drei – 3D graphics and WebGL rendering (which is use in service page's hero section)
9. ESLint – Code quality and linting
10. Email.js - for email services


Installation
- Make sure you have the following installed - Node.js (v18 or later recommended) / npm or yarn. You can check node version by using this command (node -v).


Install Dependencies
- Clone the repository and install dependencies:
- [git clone https://github.com/SaungEaindrayMin/technical-assessment.git]
- cd nura-next
- npm install


Running the Project Locally
- npm run dev
- The app will be available at (http://localhost:5173)


Key Technical Decisions
- Vite was chosen for its extremely fast startup time, instant HMR, and optimized production bundles.
- React 19 is used to stay future-proof and take advantage of modern React patterns and performance improvements.
- Tailwind CSS enables a consistent design system, rapid UI iteration, and full responsiveness.
- Framer Motion was selected for animations because it integrates natively with React and provides smooth page transitions and UI micro-interactions.
- TanStack React Query simplifies server-state management by handling caching, background updates, and error states efficiently.
- Three.js with React Three Fiber is used to create declarative 3D scenes within React, specifically implemented in the Service page hero section.
- ESLint ensures consistent code quality and helps prevent common bugs during development.