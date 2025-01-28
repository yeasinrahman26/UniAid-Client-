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

## Installation

### Clone the Repository:
```bash
git clone https://github.com/your-username/uniaid-client-site.git
cd uniaid-client-site
