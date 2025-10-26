# Tasks: Services Catalog

**Input**: Design documents from `/specs/1-services-catalog/`
**Prerequisites**: plan.md (required), spec.md (required for user stories)

**Tests**: Manual testing only (as per constitution and plan)

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/` at repository root
- Paths follow existing project structure

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Create base component structure

- [ ] T001 Create `src/views/CatalogView.vue` component file with basic template structure
- [ ] T002 Add router configuration for `/catalog` route in `src/router/index.js`
- [ ] T003 Update navigation in `src/views/LandingView.vue` to link to catalog page

---

## Phase 2: User Story 1 - Browse Services Catalog (Priority: P1) 🎯 MVP

**Goal**: Display a grid of service listings with essential information (images, titles, categories, prices)

**Independent Test**: Navigate to `/catalog` and verify service grid displays with all services showing images, titles, categories, and prices

### Implementation for User Story 1

- [ ] T004 [US1] Add mock service data array in `src/views/CatalogView.vue` (12+ sample services with required fields)
- [ ] T005 [US1] Create service card grid layout in template using Tailwind grid classes (responsive grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- [ ] T006 [US1] Implement service card template with image, title, category badge, price tag, and rating display in `src/views/CatalogView.vue`
- [ ] T007 [US1] Add header section with page title "Katalog Usług" and description in `src/views/CatalogView.vue`
- [ ] T008 [US1] Add navigation bar component (reuse from LandingView) in `src/views/CatalogView.vue`
- [ ] T009 [US1] Add footer component (reuse from LandingView) in `src/views/CatalogView.vue`
- [ ] T010 [US1] Style service cards with hover effects and proper spacing using Tailwind utilities

**Checkpoint**: At this point, User Story 1 should be fully functional - catalog displays all services in a responsive grid

---

## Phase 3: User Story 2 - Search Services (Priority: P1) 🎯 MVP

**Goal**: Filter services by keyword search in title, description, and category fields

**Independent Test**: Type search terms in search box and verify results update to show only matching services

### Implementation for User Story 2

- [ ] T011 [US2] Add search input field to filter section in `src/views/CatalogView.vue` with search icon
- [ ] T012 [US2] Add `searchQuery` data property in `src/views/CatalogView.vue` component
- [ ] T013 [US2] Create `filteredServices` computed property that filters by search keywords in `src/views/CatalogView.vue`
- [ ] T014 [US2] Bind search input to `searchQuery` with v-model in template
- [ ] T015 [US2] Update results grid to use `filteredServices` instead of raw services array

**Checkpoint**: At this point, User Stories 1 AND 2 should both work - users can browse and search services

---

## Phase 4: User Story 3 - Filter by Category (Priority: P2)

**Goal**: Filter services by category selection (Operator Kamery, Oświetlenie, Dźwięk, etc.)

**Independent Test**: Select a category from dropdown and verify only services in that category are displayed

### Implementation for User Story 3

- [ ] T016 [US3] Add category filter dropdown to filter section in `src/views/CatalogView.vue`
- [ ] T017 [US3] Add `selectedCategory` data property with default empty string in `src/views/CatalogView.vue`
- [ ] T018 [US3] Include category filter logic in existing `filteredServices` computed property in `src/views/CatalogView.vue`
- [ ] T019 [US3] Add filter options: "All Categories", "Operator Kamery", "Oświetlenie", "Dźwięk", "Postprodukcja", "Produkcja", "Montaż"
- [ ] T020 [US3] Bind category dropdown to `selectedCategory` with v-model

**Checkpoint**: At this point, Users 1, 2, AND 3 should all work - users can browse, search, and filter by category

---

## Phase 5: User Story 4 - Filter by Price Range (Priority: P2)

**Goal**: Filter services by price range selection (do 1000 zł, 1000-2500 zł, powyżej 2500 zł)

**Independent Test**: Select a price range from dropdown and verify only services in that range are displayed

### Implementation for User Story 4

- [ ] T021 [US4] Add price range filter dropdown to filter section in `src/views/CatalogView.vue`
- [ ] T022 [US4] Add `selectedPriceRange` data property with default empty string in `src/views/CatalogView.vue`
- [ ] T023 [US4] Include price filter logic in existing `filteredServices` computed property in `src/views/CatalogView.vue`
- [ ] T024 [US4] Add filter options: "All prices", "do 1000 zł", "1000-2500 zł", "powyżej 2500 zł"
- [ ] T025 [US4] Bind price dropdown to `selectedPriceRange` with v-model
- [ ] T026 [US4] Add `priceFilter` field to mock service data (low, medium, high) in `src/views/CatalogView.vue`

**Checkpoint**: At this point, Users 1, 2, 3, AND 4 should all work - users can browse, search, filter by category, and filter by price

---

## Phase 6: User Story 5 - Polish & Cross-Cutting (Priority: P3)

**Goal**: Add remaining UI improvements including results count, empty state, and clickable cards

**Independent Test**: All features work together smoothly with proper feedback

### Implementation for User Story 5

- [ ] T027 [US5] Add results count display showing "Znaleziono X usług" in filter section
- [ ] T028 [US5] Implement empty state component for when no services match filters in `src/views/CatalogView.vue`
- [ ] T029 [US5] Add onClick handler to service cards with `viewService` method (placeholder for future detail page)
- [ ] T030 [US5] Update service cards with "Zobacz szczegóły" button in `src/views/CatalogView.vue`
- [ ] T031 [US5] Test responsive behavior: verify filters stack on mobile and display horizontally on desktop
- [ ] T032 [US5] Verify all color tokens use clapperly design system (clapperly-gold, clapperly-dark, etc.)

**Checkpoint**: All user stories should now be fully functional with polish

---

## Phase 7: Integration & Final Polish

**Purpose**: Ensure everything works together and follows project standards

- [ ] T033 Verify catalog route is accessible from landing page navigation
- [ ] T034 Verify catalog loads within 2 seconds
- [ ] T035 Verify search results display within 500ms of typing
- [ ] T036 Verify page works on mobile (grid stacks to 1 column)
- [ ] T037 Verify page works on tablet (grid shows 2 columns)
- [ ] T038 Verify page works on desktop (grid shows 3-4 columns)
- [ ] T039 Test all filter combinations work correctly together
- [ ] T040 Verify design consistency with landing page (navigation, footer, colors, typography)
- [ ] T041 Run `npm run dev` and manually test all user flows
- [ ] T042 Run `npm run build` to verify production build succeeds
- [ ] T043 Test production build with `npm run preview`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **User Story 1 (Phase 2)**: Depends on Setup completion (T001, T002, T003)
- **User Story 2 (Phase 3)**: Depends on User Story 1 completion (needs grid to filter)
- **User Story 3 (Phase 4)**: Depends on User Story 2 completion (extends filtering)
- **User Story 4 (Phase 5)**: Depends on User Story 3 completion (extends filtering further)
- **User Story 5 (Phase 6)**: Depends on User Story 4 completion (adds polish)
- **Integration (Phase 7)**: Depends on all previous phases

### User Story Dependencies

- **User Story 1 (P1)**: Foundation - must be first
- **User Story 2 (P1)**: Builds on US1 - adds search to existing grid
- **User Story 3 (P2)**: Builds on US2 - extends filtering
- **User Story 4 (P2)**: Builds on US3 - extends filtering further
- **User Story 5 (P3)**: Builds on US4 - adds polish and UX improvements

### Within Each User Story

- Data setup before template
- Template structure before styling
- Basic functionality before enhancements

### Parallel Opportunities

- None for this frontend feature (sequential dependencies)
- Tasks within same file must be sequential

---

## Parallel Example: Not Applicable

All tasks in this feature are sequential due to shared component file and interdependent functionality.

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (T001-T003)
2. Complete Phase 2: User Story 1 (T004-T010)
3. **STOP and VALIDATE**: Test catalog displays with all services
4. Deploy/demo if ready

### Incremental Delivery

1. Setup + User Story 1 → Test → Deploy/Demo (Catalog visible - MVP!)
2. Add User Story 2 → Test → Deploy/Demo (Search works!)
3. Add User Story 3 → Test → Deploy/Demo (Category filter works!)
4. Add User Story 4 → Test → Deploy/Demo (Price filter works!)
5. Add User Story 5 → Test → Deploy/Demo (Polish complete!)

### Team Strategy

- Single developer can work through tasks sequentially
- All tasks work with same component file
- Natural checkpoints after each user story

---

## Notes

- All tasks work within `src/views/CatalogView.vue` component
- Tasks marked [P] indicate they can be done in parallel
- Each user story should be independently testable
- Commit after each phase completion for easy rollback
- Manual testing via `npm run dev` (as per constitution)
- No automated tests required (manual testing approach)
- Design system colors and classes from `tailwind.config.js`
- Follow existing code patterns from `LandingView.vue`
