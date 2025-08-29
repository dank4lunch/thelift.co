# The Lift Co - Personal Training & Creative Business Platform

## Overview

The Lift Co is a premium fitness and creative services platform founded by Tshiamo Sookane, a certified personal trainer and creative entrepreneur based in Gauteng, South Africa. The platform combines elite personal training services with brand development and business strategy offerings, targeting young professionals, creatives, and entrepreneurs aged 21-55.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: Next.js 14 with App Router for modern React development
- **TypeScript**: Full type safety throughout the application
- **Styling**: Tailwind CSS with custom design system featuring gold/bronze color palette
- **Component Structure**: Modular components for navigation, hero sections, service displays, and contact forms
- **Responsive Design**: Mobile-first approach with accessibility features (WCAG compliance)
- **3D Elements**: Three.js integration for interactive visual elements and floating animations
- **Error Handling**: Client-side error boundaries for graceful failure recovery

### Design System
- **Color Palette**: Primary gold (#e3b547), accent bronze/tan (#a89148), neutral dark theme
- **Typography**: Inter and Poppins fonts with JetBrains Mono for technical elements
- **Animations**: Framer Motion for smooth transitions and floating particle effects
- **Icons**: Lucide React icons with Twemoji support for emoji rendering

### Content Management
- **Static Content**: Component-based content management for services, packages, and trainer information
- **Media Assets**: Local image storage with optimized Next.js Image components
- **Form Handling**: Contact forms with email integration via EmailJS

### Payment Integration
- **Dual Payment Gateway Support**: Both iKhokha (primary) and PayFast payment processing systems
- **iKhokha Integration**: Primary payment gateway with competitive rates and instant EFT support
- **PayFast Integration**: Alternative South African payment processing system for broader compatibility
- **Package Structure**: Three-tier training packages (Free Consultation, PT Starter Pack, Elite Monthly)
- **Payment Flow**: Customer details collection → Gateway selection → Redirect to chosen provider → success/failure handling
- **Webhook Support**: Payment notification handling for both gateways for order fulfillment

### Security & Performance
- **Environment Variables**: Secure configuration for PayFast credentials and site URLs
- **Security Headers**: X-Frame-Options, X-Content-Type-Options, and Referrer-Policy
- **Code Splitting**: Optimized package imports and lazy loading
- **SEO Optimization**: Comprehensive metadata, Open Graph tags, and structured data

## External Dependencies

### Payment Processing
- **iKhokha**: Primary South African payment gateway with competitive transaction rates (2.0% EFT, 2.85% local cards)
- **PayFast**: Alternative South African payment gateway for processing training package purchases
- **Sandbox Environment**: Development testing environments for both payment gateways
- **API Integration**: Custom payment utilities for secure transaction processing and webhook handling

### Communication Services
- **EmailJS**: Client-side email service for contact form notifications
- **WhatsApp Integration**: Direct messaging links for instant customer communication

### UI/UX Libraries
- **Framer Motion**: Animation library for smooth transitions and interactive elements
- **Three.js/@react-three/fiber**: 3D graphics and interactive visual elements
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **ESLint**: Code quality and consistency enforcement
- **PostCSS & Autoprefixer**: CSS processing and browser compatibility
- **TypeScript**: Static type checking and development experience enhancement

### Analytics & Monitoring
- **Built-in Error Tracking**: Custom error boundaries for application monitoring
- **Performance Optimization**: Next.js optimizations for fast loading and SEO