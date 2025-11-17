# LaZerPay UI — Razorpay-Style Fintech Frontend

A modern, high-performance fintech UI built with **React 19**, **Vite**, **TailwindCSS**, and **react-icons**.
This project replicates a polished, enterprise-grade design experience similar to Razorpay — including:

* Responsive Navbar with Mega Menu
* Animated Hero Carousel
* Features Section
* Product Highlights Timeline
* Industry Solutions Tabs
* Testimonials/Reviews
* Footer with Legal & Certification Info

---

# Live Demo

The project is deployed and accessible at:

👉 **[https://lazerpays.vercel.app](https://lazerpays.vercel.app)**

Experience the full UI and animations live.

---

## Tech Stack

| Technology        | Purpose                  |
| ----------------- | ------------------------ |
| **React 19**      | UI Components            |
| **Vite 7**        | Development & Bundling   |
| **TailwindCSS 4** | Styling                  |
| **React Icons 5** | Icons                    |
| **ESLint 9**      | Linting                  |
| **Lazy Loading**  | Performance optimization |

---

# 🛠️ Installation & Setup

## 1️⃣ Clone the Repository

```sh
git clone https://github.com/your-username/razorpaystyle.git
cd razorpaystyle
```

---

## 2️⃣ Install Dependencies

Make sure you have **Node.js (>=18)** installed.

```sh
npm install
```

---

## 3️⃣ Start Development Server

```sh
npm run dev
```

Your app will run at:

👉 **[http://localhost:5173](http://localhost:5173)**

---

## 4️⃣ Production Build

```sh
npm run build
```

Build output will be generated inside:

```
/dist
```

---

## 5️⃣ Preview Production Build

```sh
npm run preview
```

Runs a local preview server for the built project.

---

# 🔧 Project Structure

```
RazorPayStyle/
├── README.md
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
├── public/
│
└── src/
    ├── App.jsx
    ├── App.css
    ├── main.jsx
    ├── index.css
    │
    ├── assets/
    │   ├── images/
    │   └── icon/
    │
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── Features.jsx
    │   ├── ProductHighlights.jsx
    │   ├── PoweringIndustries.jsx
    │   ├── Reviews.jsx
    │   └── Footer.jsx
    │
    └── sections/
        ├── MegaMenu.jsx
        ├── IconScroller.jsx
        ├── FeatureBox.jsx
        ├── BankingSection.jsx
        ├── GlobalPaymentsSection.jsx
        ├── HorizonSection.jsx
        └── (any future UI sections)

```

---

# 🎨 Styling Setup (TailwindCSS 4)

TailwindCSS is configured automatically through the Vite plugin:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

in your `index.css`.

Dependencies:

```json
"dependencies": {
  "@tailwindcss/vite": "^4.1.17",
  "tailwindcss": "^4.1.17"
}
```

---

# ⚙️ Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Create production build  |
| `npm run lint`    | Run ESLint               |
| `npm run preview` | Preview production build |

---