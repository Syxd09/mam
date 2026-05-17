# MAM Industries Platform

A modern, high-performance web platform and administrative command center for MAM Industries, a precision metal fabrication company based in Bengaluru.

## Features
- **Public Site**: High-conversion landing pages detailing fabrication services, trusted clients, and an image gallery.
- **Real-Time Leads**: Custom database-driven CRM integration that captures customer enquiries instantly alongside email notifications.
- **Dynamic Content**: Connected to a live Supabase database for real-time updates to the gallery, services, and client lists.
- **Admin Command Center**: Secure dashboard for administrators to manage testimonials, upload new projects, and reply to client leads directly via WhatsApp or Email.

## Tech Stack
- **Frontend**: React, Vite, Tailwind CSS, Framer Motion
- **Backend & Database**: Supabase (PostgreSQL, Auth, Storage)
- **Email Delivery**: Web3Forms

## Deployment
This project is configured to be deployed effortlessly on Vercel or Netlify. 

### Required Environment Variables
Before deploying, ensure you configure the following environment variables in your hosting provider:
- `VITE_SUPABASE_URL` (Your Supabase Project URL)
- `VITE_SUPABASE_ANON_KEY` (Your Supabase Public Anon Key)

### Build Settings
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
