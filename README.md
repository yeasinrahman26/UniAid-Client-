Here is your **README.md** file in Markdown format:  

---

# 🎓 UniAid Client Site  

![UniAid Banner](https://i.ibb.co.com/xSYH1Hrg/screencapture-uni-aid-web-app-2026-03-06-02-12-11.png)  

## Introduction  

**UniAid** is a scholarship application portal that enables users to browse and apply for scholarships. The platform provides dashboards for different roles: regular users, moderators, and admins, ensuring seamless management of scholarships, applications, and reviews.  

### 🔗 Live Demo  
[UniAid Web App](https://uni-aid.web.app/)  

### 🔗 Backend Repository  
[UniAid Server Site](https://github.com/yeasinrahman26/UniAid-Server-site)  

---

## 🚀 Features  

- **🏠 Home Page**: Navbar, banner carousel, featured scholarships, and key sections like "Top Scholarships."  
- **🎓 Scholarship Cards**: Displays university name, category, fees, and other essential details.  
- **📄 Scholarship Details Page**: Shows full details, user reviews, and an "Apply Scholarship" button.  
- **📝 Apply for Scholarships**: Allows users to submit applications after payment (via Stripe or SSL-Commerz).  
- **🔎 Search Functionality**: Search scholarships by name, university, or degree.  
- **🔑 Authentication**: Email/password and social login with JWT-based secure access.  
- **👤 User Dashboard**: Profile management, applied scholarships tracking, and submitted reviews.  
- **🛠️ Moderator/Admin Dashboards**: Scholarship management, user control, application review, and handling user feedback.  

---

## 🛠 Technologies Used  

### 🌐 Frontend  
- **React** – Component-based UI development.  
- **TailwindCSS** – Utility-first CSS framework.  
- **React Router** – For client-side navigation.  
- **React Query** – Data fetching and caching.  
- **SweetAlert2** – Interactive alerts and modals.  

### 🔥 Backend & Authentication  
- **Firebase Authentication** – Secure login via Email/Password & social providers.  
- **MongoDB** – NoSQL database for storing user and scholarship data.  
- **Stripe / SSL-Commerz** – Payment gateway integration.  

---

## 📦 Dependencies  

### Core Dependencies  
| Package                          | Version   | Purpose                                      |  
|----------------------------------|-----------|----------------------------------------------|  
| `@tanstack/react-query`         | `^5.64.2`  | Data fetching and caching                  |  
| `axios`                         | `^1.7.9`   | Promise-based HTTP requests                 |  
| `firebase`                       | `^11.2.0`  | User authentication                         |  
| `react`                          | `^18.3.1`  | UI framework                                |  
| `react-router-dom`               | `^7.1.3`   | Client-side routing                         |  
| `sweetalert2`                    | `^11.15.10`| Alerts and notifications                    |  
| `tailwindcss`                    | `^4.0.0`   | UI styling                                  |  

### Development Dependencies  
| Package                          | Version   | Purpose                                      |  
|----------------------------------|-----------|----------------------------------------------|  
| `vite`                           | `^6.0.5`   | Fast build tool for React apps              |  
| `daisyui`                        | `^5.0.0-beta.2` | Tailwind CSS components                   |  
| `eslint`                         | `^9.17.0`  | JavaScript and JSX linter                   |  
| `@vitejs/plugin-react`           | `^4.3.4`   | Vite plugin for React                        |  
| `@types/react`                   | `^18.3.18` | TypeScript type definitions for React       |  
| `@types/react-dom`               | `^18.3.5`  | TypeScript type definitions for React DOM   |  

---

## 📥 Installation  

### Step 1: Clone the Repository  
```bash
git clone https://github.com/your-username/uniaid-client-site.git
cd uniaid-client-site
```

### Step 2: Install Dependencies  
```bash
npm install
```

### Step 3: Start the Development Server  
```bash
npm run dev
```

### Step 4: Build for Production  
```bash
npm run build
```

---



## 📖 Usage  

1. **Sign up or log in** via email/password or social accounts.  
2. **Search for scholarships** based on name, university, or degree.  
3. **View scholarship details** and read reviews.  
4. **Apply for scholarships** by filling in required information and completing payment.  
5. **Track your applications** via the user dashboard.  
6. **Admin/Moderators can** manage scholarships, review applications, and handle user queries.  

---

## 🔍 Troubleshooting  

- **App not starting?** Run `npm install` to ensure dependencies are installed.  
- **Build issues?** Clear the cache using:  
  ```bash
  rm -rf node_modules && npm install
  ```
- **Authentication errors?** Check if Firebase credentials are correctly set in `.env`.  
- **Payment failures?** Ensure Stripe/SSL-Commerz API keys are correctly configured.  

---

## 👨‍💻 Contributors  

| Name            | GitHub Profile                      |  
|----------------|------------------------------------|  
| **Your Name**  | [@yourusername](https://github.com/yourusername)  |  
| **Contributor 2** | [@contributor2](https://github.com/contributor2) |  

Want to contribute? Feel free to fork the repo and create a PR!  

---

## 📜 License  

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.  

---

## 🌟 Acknowledgements  

- **React + Vite** – The foundation of this project.  
- **Tailwind CSS** – Simplifying UI design.  
- **MongoDB & Firebase** – Managing authentication and database.  
- **Stripe / SSL-Commerz** – Powering secure payments.  

---

Copy and paste this into your `README.md` file! 🚀