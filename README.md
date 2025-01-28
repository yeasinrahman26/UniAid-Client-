# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Live link : - https://uni-aid.web.app/

# Uniaid Client Site 

A scholarship application portal allowing users to browse and apply for scholarships, with dashboards for regular users, moderators, and admins. 

## Features

- **Home Page**: Navbar, banner carousel, top scholarships, and additional sections like Featured Scholarships.
- **Scholarship Cards**: Display essential details like University name, Scholarship category, Application Fees, etc.
- **Scholarship Details Page**: Detailed info, reviews, and an "Apply Scholarship" button.
- **Apply for Scholarship**: Users can apply after a payment process using a payment gateway (Stripe/SSL-Commerz).
- **Search Functionality**: Search scholarships by name, university, or degree.
- **Authentication**: Email/password and social login. JWT for secure access.
- **User Dashboard**: Manage profile, view applied scholarships, and submitted reviews.
- **Moderator/Admin Dashboards**: Manage scholarships, users, applications, and reviews.

## Technologies Used
- **Frontend**: React, TailwindCSS, React Router, React Query, React Icons, SweetAlert2
- **Backend**: Firebase Authentication, Stripe/SSL-Commerz (for payment)
- **Database**: MongoDB

## Dependencies

### Core Dependencies
- **@tanstack/react-query**: `^5.64.2` - For data fetching and caching.
- **axios**: `^1.7.9` - Promise-based HTTP client for making requests.
- **firebase**: `^11.2.0` - For user authentication (Email/Password and social login).
- **react**: `^18.3.1` - JavaScript library for building user interfaces.
- **react-router-dom**: `^7.1.3` - For routing and navigation in React.
- **sweetalert2**: `^11.15.10` - For displaying alerts and notifications in a nice modal style.
- **tailwindcss**: `^4.0.0` - Utility-first CSS framework for designing custom UIs.

### Development Dependencies
- **vite**: `^6.0.5` - Next-generation front-end tool for building and serving React apps.
- **daisyui**: `^5.0.0-beta.2` - Tailwind CSS components for quicker UI building.
- **eslint**: `^9.17.0` - Linter for JavaScript and JSX code.
- **@eslint/js**: `^9.17.0` - ESLint plugin for modern JS standards.
- **@vitejs/plugin-react**: `^4.3.4` - Vite plugin for React support.
- **@types/react**: `^18.3.18` - TypeScript types for React.
- **@types/react-dom**: `^18.3.5` - TypeScript types for React DOM.

---

This list of dependencies includes all the main libraries used in your project. Let me know if you need further changes or additions!




## Installation

### Clone the Repository:
```bash
git clone https://github.com/your-username/uniaid-client-site.git
cd uniaid-client-site
