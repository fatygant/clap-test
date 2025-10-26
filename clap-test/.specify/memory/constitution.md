# Clapperly Constitution

## Core Principles

### I. Design-Driven Development
Every feature and page must originate from the Figma design specifications. UI components should match the visual design precisely, including colors, spacing, typography, and interactions. The design system (defined in `tailwind.config.js`) takes precedence over ad-hoc implementations.

### II. Component-Based Architecture
All UI elements must be built as reusable Vue components. Each component should be self-contained with clear props and events. The views directory contains page-level components, while shared components should be organized in a components directory.

### III. Responsive-First
All layouts must be mobile-first and fully responsive. Use Tailwind's responsive breakpoints (sm, md, lg, xl) to ensure optimal viewing across all device sizes. Test layouts on multiple screen sizes.

### IV. Performance Optimization
Leverage Vite's built-in optimizations and Vue 3's reactivity system. Minimize bundle size, lazy-load components where appropriate, and optimize images. The build process should produce production-ready assets with proper minification and code splitting.

### V. Consistency Across Pages
Maintain consistent navigation, footer, color scheme, and styling across all pages. The design system colors (clapperly-gold, clapperly-dark, etc.) should be used consistently throughout the application.

## Technology Stack

### Required Technologies
- **Vue 3**: Component framework with Composition API
- **Vite**: Build tool and development server
- **Vue Router**: Client-side routing
- **Tailwind CSS**: Utility-first styling framework
- **PostCSS + Autoprefixer**: CSS processing

### Design System Requirements
- All colors must use the defined tokens from `tailwind.config.js`
- Typography: Inter font family loaded from Google Fonts
- No inline styles except for dynamic values requiring JavaScript

## Development Workflow

### Code Organization
- `/src/views/`: Page-level components
- `/src/components/`: Reusable UI components (create as needed)
- `/src/router/`: Route definitions
- `/src/`: Global styles and main entry point

### Git Practices
- Commit messages should describe the feature or fix
- Main branch should always be in a deployable state
- New features go through development on local branches

### Testing Approach
- Manual testing on development server (`npm run dev`)
- Visual verification against Figma designs
- Cross-browser testing before deployment

## Governance

All development work must comply with these principles. When adding new features or pages:
1. Start from the Figma design (if available)
2. Create components using Vue 3 and Tailwind CSS
3. Ensure responsive behavior across breakpoints
4. Test functionality in the development environment
5. Build and preview production version before deployment

The design system and configuration files (tailwind.config.js, package.json) are authoritative. Any changes to these require updating dependent code to maintain consistency.

**Version**: 1.0.0 | **Ratified**: 2024-01-19 | **Last Amended**: 2024-01-19
