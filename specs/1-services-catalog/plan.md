# Implementation Plan: Services Catalog

**Branch**: `1-services-catalog` | **Date**: 2024-01-19 | **Spec**: [spec.md](./spec.md)

**Note**: This template is filled in by the `/speckit.plan` command.

## Summary

The Services Catalog feature enables users to browse, search, and filter film production services, equipment, locations, and talent through an interactive catalog page. The implementation will use Vue 3 with Tailwind CSS to create a responsive, performant interface that allows users to discover services using search keywords, category filters, and price range filters.

**Technical Approach**: Frontend-only implementation using Vue 3 reactive data for filtering, with mock data initially. The catalog will be built as a single-page component with computed properties for real-time filtering.

## Technical Context

**Language/Version**: JavaScript (ES6+), Vue 3.4.0  
**Primary Dependencies**: Vue 3, Vue Router 4.2.5, Tailwind CSS 3.4.0  
**Storage**: N/A (frontend-only, using mock data in component state)  
**Testing**: Manual testing via development server (`npm run dev`)  
**Target Platform**: Modern web browsers (Chrome, Firefox, Safari, Edge - latest)  
**Project Type**: Web application (single-page frontend)  
**Performance Goals**: 
- Page load < 2 seconds
- Search results display within 500ms of typing
- 20+ service listings without lag
**Constraints**: 
- Must be mobile-responsive
- No backend integration required for MVP
- Client-side filtering only
**Scale/Scope**: 
- Single catalog page view
- Support for 50+ service listings in mock data
- Client-side filtering capabilities

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### I. Design-Driven Development ✓
**Status**: PASS  
- Catalog page design will follow established Tailwind design system
- Uses existing clapperly color tokens (clapperly-gold, clapperly-dark, etc.)
- Responsive layout with mobile-first approach

### II. Component-Based Architecture ✓
**Status**: PASS  
- Single page-level component: `CatalogView.vue`
- Reusable service card component can be extracted if needed
- Clear separation of concerns with Vue data/computed properties

### III. Responsive-First ✓
**Status**: PASS  
- Grid layout uses Tailwind responsive classes (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Filters stack vertically on mobile, horizontal on desktop
- Mobile-first breakpoints applied throughout

### IV. Performance Optimization ✓
**Status**: PASS  
- Client-side filtering uses Vue computed properties (efficient reactivity)
- No external API calls (mock data only)
- Minimal component complexity
- Vite handles optimization automatically

### V. Consistency Across Pages ✓
**Status**: PASS  
- Uses same navigation component as landing page
- Consistent footer component
- Same color scheme and typography (Inter font)
- Unified header section styling

**Overall**: All gates PASS. No violations or justifications needed.

## Project Structure

### Documentation (this feature)

```text
specs/1-services-catalog/
├── plan.md              # This file
├── spec.md              # Feature specification
├── checklists/
│   └── requirements.md  # Specification quality checklist
└── [future: tasks.md will be created by /speckit.tasks]
```

### Source Code (repository root)

```text
src/
├── views/
│   ├── LandingView.vue   # Existing landing page
│   └── CatalogView.vue   # NEW: Catalog page component
├── router/
│   └── index.js          # Existing: Add /catalog route
├── App.vue               # Existing: Root component
├── main.js               # Existing: Entry point
└── style.css             # Existing: Global styles

specs/
└── 1-services-catalog/   # Feature documentation
```

**Structure Decision**: Single-project structure. The catalog feature is a new page-level view added to the existing Vue 3 application. No new top-level directories needed; follows existing `/src/views` pattern.

## Phase 0: Research & Planning

### Completed Research

**Decision**: Client-side filtering with Vue computed properties  
**Rationale**: 
- Simple, performant approach for MVP
- No backend required initially
- Real-time filtering provides excellent UX
- Computed properties handle reactivity efficiently

**Alternatives considered**:
- Backend API: More complex, not needed for MVP
- External search library: Overkill for client-side filtering
- State management library (Pinia): Unnecessary complexity for single-page feature

**Decision**: Mock data array in component  
**Rationale**: 
- Allows rapid development without backend
- Easy to replace with API calls later
- Sufficient for MVP requirements

**Alternatives considered**:
- External JSON file: Requires fetch, adds complexity
- LocalStorage: Unnecessary persistence for catalog browsing
- Direct API integration: Not available yet

## Phase 1: Design & Contracts

### Data Model

**Entity**: Service Listing

| Field | Type | Description | Required |
|-------|------|-------------|----------|
| id | number | Unique identifier | Yes |
| title | string | Service title | Yes |
| category | string | Service category | Yes |
| categoryFilter | string | Filter value (operator, lighting, etc.) | Yes |
| description | string | Service description | Yes |
| price | string | Display price (e.g., "od 1000 zł") | Yes |
| priceFilter | string | Filter value (low, medium, high) | Yes |
| rating | number | Star rating (1-5) | Yes |
| reviews | number | Review count | Yes |
| image | string | Image URL | Yes |

**Filter State**

| Field | Type | Description | Default |
|-------|------|-------------|---------|
| searchQuery | string | Search keyword | "" |
| selectedCategory | string | Selected category filter | "" |
| selectedPriceRange | string | Selected price range | "" |

### Component Design

**Component**: `CatalogView.vue`

**Props**: None (page-level component)

**Data**:
- `searchQuery`: string
- `selectedCategory`: string
- `selectedPriceRange`: string
- `services`: array of service objects

**Computed**:
- `filteredServices()`: Returns services matching all active filters

**Methods**:
- `viewService(service)`: Navigate to service details (placeholder for now)

**Structure**:
- Navigation bar (shared component)
- Header section with title and description
- Filter section with search, category, and price filters
- Services grid with service cards
- Empty state component
- Footer (shared component)

## Implementation Strategy

1. **Create catalog view component** with base structure
2. **Add mock service data** array (12-20 sample services)
3. **Implement search filtering** with computed property
4. **Implement category filtering** with dropdown select
5. **Implement price filtering** with dropdown select
6. **Add results count display**
7. **Add empty state** for no results
8. **Add service cards** with images, ratings, descriptions
9. **Test responsive behavior** across breakpoints
10. **Add router configuration** for `/catalog` route
11. **Update navigation** on landing page to link to catalog

## Success Criteria

- [ ] Catalog page loads with service grid
- [ ] Search input filters services by keyword
- [ ] Category dropdown filters by service type
- [ ] Price dropdown filters by price range
- [ ] Multiple filters work simultaneously
- [ ] Results count updates correctly
- [ ] Empty state displays when no matches
- [ ] Service cards are clickable (navigation placeholder)
- [ ] Page is responsive on mobile, tablet, desktop
- [ ] Visual design matches existing pages
- [ ] Routing works from landing page to catalog

## Next Steps

After plan approval:
1. Run `/speckit.tasks` to generate task breakdown
2. Begin implementation with task T001
3. Test each feature as it's implemented
4. Update task status in tasks.md

## Notes

- This is a frontend-only feature requiring no backend changes
- Mock data will be replaced with API integration in future iteration
- Service detail view is out of scope for this feature
- Focus on filtering and browsing capabilities
- All design follows existing Tailwind design system
