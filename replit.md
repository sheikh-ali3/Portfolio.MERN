# Overview

This is a full-stack personal portfolio website built with React and Express, showcasing Muhammad Ali's software engineering experience and projects. The application features a modern, responsive design with a comprehensive portfolio presentation including work experience, education, skills, projects, and a contact form. The frontend uses React with TypeScript and Tailwind CSS for styling, while the backend provides API endpoints for contact form submissions and message storage.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system using CSS variables for consistent theming
- **UI Components**: Radix UI primitives with shadcn/ui component library for accessible, customizable components
- **State Management**: TanStack Query (React Query) for server state management and API caching
- **Build System**: Vite for fast development and optimized production builds
- **Theme Support**: Custom theme provider with light/dark mode switching capabilities

## Backend Architecture
- **Framework**: Express.js with TypeScript for the REST API server
- **Storage**: In-memory storage implementation with interface abstraction for easy database integration
- **API Design**: RESTful endpoints for contact form submissions and message retrieval
- **Development Setup**: Hot module replacement (HMR) in development with Vite middleware integration
- **Error Handling**: Centralized error handling middleware with structured error responses

## Data Storage Solutions
- **Current Implementation**: Memory-based storage using Map data structures for development/testing
- **Database Ready**: Drizzle ORM configured for PostgreSQL with schema definitions in `shared/schema.ts`
- **Schema Management**: Contact messages and user entities with proper TypeScript types
- **Migration Support**: Drizzle Kit configured for database migrations and schema changes

## Key Design Patterns
- **Monorepo Structure**: Shared schema and types between client and server for type consistency
- **Component Composition**: Modular React components with proper separation of concerns
- **Custom Hooks**: Reusable logic for animations, mobile detection, and toast notifications
- **API Abstraction**: Centralized API request handling with proper error management
- **Responsive Design**: Mobile-first approach with progressive enhancement

## Form Handling
- **Validation**: Zod schema validation for type-safe form data processing
- **User Feedback**: Toast notifications for form submission states
- **Error Management**: Comprehensive error handling with user-friendly messages

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: PostgreSQL database driver for Neon DB integration
- **drizzle-orm**: Type-safe ORM with PostgreSQL dialect support
- **@tanstack/react-query**: Server state management and API caching

## UI and Styling Dependencies
- **@radix-ui/***: Complete suite of accessible UI primitives (accordion, dialog, dropdown, etc.)
- **tailwindcss**: Utility-first CSS framework with custom configuration
- **class-variance-authority**: Type-safe variant API for component styling
- **lucide-react**: Icon library for consistent iconography

## Development and Build Tools
- **vite**: Fast build tool with HMR and optimized bundling
- **typescript**: Static type checking across the entire application
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay for Replit environment

## Validation and Forms
- **zod**: TypeScript-first schema validation library
- **react-hook-form**: Performant forms with easy validation
- **@hookform/resolvers**: Zod resolver for react-hook-form integration

## Utility Libraries
- **date-fns**: Date manipulation and formatting
- **clsx**: Conditional CSS class composition
- **embla-carousel-react**: Touch-friendly carousel component