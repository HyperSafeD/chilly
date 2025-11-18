# Changelog

All notable changes to the Chilly project will be documented in this file.

## [Unreleased]

### Added

- **Dashboard Page** (`/dashboard`): Complete order management interface

  - Order statistics display with real-time counts
  - Order filtering by status, network, and search
  - Order list with grid layout and loading states
  - Create order modal with form validation
  - Order cards with status indicators and metadata

- **Dashboard Components**:

  - `OrderCard`: Individual order display component
  - `OrderList`: Grid layout for orders with empty states
  - `OrderFilters`: Search and filter controls
  - `OrderStats`: Statistics display component
  - `CreateOrderModal`: Modal for creating new orders

- **Type System**:

  - `Order` interface with complete order structure
  - `OrderStatus` type with all possible statuses
  - `OrderFilters` interface for filtering options
  - `OrderStats` interface for statistics

- **Mock Data**:

  - Sample orders for development and testing
  - Mock statistics for dashboard display

- **Documentation**:

  - Enhanced README with detailed setup instructions
  - CONTRIBUTING.md with contribution guidelines
  - ARCHITECTURE.md with system design documentation
  - API.md with type definitions and interfaces
  - CHANGELOG.md for tracking changes

- **Navigation**:
  - Updated Header with Dashboard link
  - Updated Hero component with dashboard navigation
  - Wallet connection state-based navigation

### Changed

- Updated README with improved features list
- Enhanced project structure documentation
- Improved environment variable documentation
- Better error handling for missing Project ID

### Fixed

- Build error when Project ID is not set (now uses default for development)
- Navigation links updated to use proper routes

## [0.1.0] - Initial Release

### Added

- Basic Next.js 16 setup with App Router
- Web3 integration with Reown AppKit and wagmi
- Landing page with Hero, Features, How It Works sections
- Tailwind CSS styling with dark mode support
- TypeScript configuration
- Basic component structure
