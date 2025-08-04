# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Debita.aí homepage - a Brazilian fintech landing page built with Next.js 15.2.0, featuring a multi-step signup flow, legal documentation system, and animated UI components. The project serves as a marketing site with user registration capabilities.

## Development Commands

### Essential Commands
- `bun run dev` - Start development server
- `bun run build` - Build for production (static export configured)
- `bun run start` - Start production server
- `bun run lint` - Run ESLint
- `bun install` - Install dependencies (uses Bun package manager)

### Testing
- Currently no test framework configured

## Architecture Overview

### Tech Stack
- **Next.js 15.2.0** with App Router
- **TypeScript 5.7.3** with strict mode
- **Tailwind CSS 3.4.17** with custom design system
- **Framer Motion 12.10.5** for animations
- **@debita-ai/ragekit 1.0.7** - Custom component library
- **Radix UI** components for accessibility

### Directory Structure
- **`/src/app/`** - Next.js App Router pages and API routes
- **`/src/components/layout/`** - Large homepage section components (Hero, Features, Footer, etc.)
- **`/src/components/ui/`** - Reusable UI primitives (Shadcn-style)
- **`/src/lib/`** - Utilities and hooks
- **`/src/service/`** - API client and authentication logic

### Key Pages
- **`/`** - Homepage with sectioned layout (many sections currently commented out)
- **`/cadastro`** - Multi-step signup form with CNPJ/CPF validation
- **`/legal/`** - Legal documentation with dynamic sidebar navigation
- **`/api/auth/signup/`** - Signup API endpoint

## Design System

### Colors (Custom Tailwind Config)
- **Primary Orange**: `#E27936` (brand color)
- **Dark Orange**: `#C65A1A`
- **Light Orange**: `#F5E6D3`
- Additional blue and green variants

### Typography
- **Primary**: Satoshi (Google Font)
- **Display**: Libre Baskerville for headings

### Component Patterns
- Heavy use of Framer Motion for animations
- Radix UI + custom styling approach
- Responsive-first design with extensive breakpoints
- Client-side components marked with "use client"

## API Integration

### Authentication Flow
- Google IAM integration for business authentication
- JWT token management with automatic injection
- CPF/CNPJ validation for Brazilian market

### API Client (`/src/service/api.ts`)
- Comprehensive axios-based client
- Endpoints for auth, users, orders, invoices, analytics
- Automatic token handling via interceptors

## Configuration Notes

### Build Configuration
- **Static export enabled** - configured for Netlify/Render deployment
- **Image optimization disabled** - for static export compatibility
- **Remote image domains configured** - for external assets

### Path Aliases
- `@/*` maps to `src/*` - use absolute imports consistently

### Environment Setup
- Requires `NEXT_PUBLIC_APP_URL` for auth redirects
- Google IAM credentials needed for signup flow

## Development Guidelines

### Component Organization
- Large layout components should go in `/components/layout/`
- Reusable UI components follow Shadcn patterns in `/components/ui/`
- Use Framer Motion consistently for animations
- Mark interactive components with "use client"

### Form Handling
- Zod schemas for validation (especially CPF/CNPJ formatting)
- Multi-step form pattern established in `/cadastro`
- Brazilian-specific validation utilities available

### Styling Approach
- Tailwind-first with custom design tokens
- Extensive use of CSS custom properties for theming
- Animation utilities and scroll reveal patterns established
- Responsive design patterns consistently applied

## Legal Documentation System

The `/legal/` section uses a dynamic layout with:
- Automatic sidebar navigation generation
- Responsive design with animations
- 7+ legal documents including terms, privacy policies, and compliance docs

Many homepage sections are currently commented out but available for activation, including testimonials, integrations, pricing, FAQ, and blog sections.