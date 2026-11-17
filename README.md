# Nectar - Online Grocery App 🛒

A modern, responsive, mobile-first online grocery shopping and delivery application built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Zustand**.

---

## 🌟 Key Features

### 🚀 Onboarding & Authentication Flow
- **Splash Screen**: Animated branding with automatic navigation to onboarding.
- **Onboarding Walkthrough**: High-resolution welcome screen introducing the app.
- **Sign In & Social Connect**: Support for social login options (Google & Facebook).
- **Mobile Verification**: Dedicated mobile number entry with country code selection and a 4-digit OTP verification screen.
- **Location Selector**: Interactive zone selection covering major Indian metropolitan cities (Delhi, Mumbai, Bengaluru, Kolkata, Chennai, Hyderabad, etc.).
- **User Authentication**: Login and registration forms with client-side validation and password toggle.

### 🛍️ Store & Shopping Experience
- **Home Feed**: Promotional banners, "Exclusive Offers" carousel, "Best Selling" items, and category shortcuts.
- **Dynamic Header**: Displays the user's active delivery location saved globally.
- **Auto-Hiding Navigation**: Smart bottom navigation bar that hides on scroll to maximize screen real estate and reappears when scrolling stops.

### 🔍 Discovery & Advanced Search
- **Explore Categories**: Visual grid with colorful categorized cards (Fresh Fruits & Vegetables, Cooking Oil & Ghee, Meat & Fish, Bakery & Snacks, Dairy & Eggs, Beverages).
- **Debounced Live Search**: Fast, responsive product search powered by a custom `useDebounce` hook to optimize performance.
- **Filtering System**: Modal filter drawer with category and brand checkboxes that integrate with search results.
- **Empty States**: Helpful messages and action buttons when search criteria or filters yield no results.

### 📦 Product Details & Wishlist
- **Detailed Product View**: Rich product imagery, unit descriptions, dynamic quantity increment/decrement, and total price calculation.
- **Interactive Favorites**: Heart toggle to add/remove products from the global favorites wishlist.
- **Product Accordions**: Detailed product descriptions, nutritional facts, and customer rating reviews.

### 🛒 Cart & Checkout
- **Cart Management**: Real-time quantity adjustments, item removal, and automatic subtotal calculation.
- **Interactive Checkout Sheet**: Slide-up modal for selecting delivery method, payment method, and promo codes.
- **Order Confirmation**: Order acceptance screen (`/order-accepted`) that automatically empties the cart upon successful placement.
- **Fallback Screens**: Order failure (`/order-failed`) modal with retry logic.

### 👤 Account & Profile
- **Account Overview**: User profile dashboard with links to Orders, My Details, Delivery Addresses, Payment Methods, Notifications, and Help.
- **Logout Handling**: Secure logout redirect resetting the browsing session.

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [React 19](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Bundler & Dev Server** | [Vite 8](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS v3](https://tailwindcss.com/) + PostCSS + Autoprefixer |
| **Routing** | [React Router DOM v7](https://reactrouter.com/) |
| **State Management** | [Zustand v5](https://zustand-demo.pmnd.rs/) |
| **Icons & Assets** | Custom SVGs & Figma asset exports |
| **Deployment Configuration** | [Vercel](https://vercel.com/) SPA rewrite rules (`vercel.json`) |

---

## 📁 Project Structure

```text
grocery-app/
├── public/                  # Public static assets
├── src/
│   ├── assets/              # Icons (SVG) and product images (PNG/JPG)
│   ├── components/
│   │   ├── layout/          # MainLayout, BottomNav
│   │   └── ui/              # Reusable UI components (ProductCard)
│   ├── data/
│   │   └── mockData.ts      # Product catalog mock dataset
│   ├── hooks/
│   │   └── useDebounce.ts   # Custom debounce hook for search queries
│   ├── pages/
│   │   ├── auth/            # Splash, Onboarding, SignIn, NumberInput, Verification, Location, Login, SignUp
│   │   └── main/            # Home, Explore, CategoryProducts, ProductDetail, Search, Filters, Cart, Favorites, Account, OrderAccepted, OrderFailed
│   ├── store/               # Zustand stores (Cart, Favorites, Filter, Location, Product, Auth)
│   ├── types/               # TypeScript interfaces and enums
│   ├── App.tsx              # Application router and layout configuration
│   ├── index.css            # Tailwind directives and custom scrollbar utilities
│   └── main.tsx             # React application DOM root
├── index.html               # HTML entry point with mobile viewport configuration
├── package.json             # Project dependencies and npm scripts
├── tailwind.config.js       # Custom colors (primary green, darkGray, lightGray)
├── tsconfig.json            # TypeScript project configuration
├── vercel.json              # Client-side routing rewrites for Vercel deployment
└── vite.config.ts           # Vite React plugin configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (version 18 or higher recommended) and **npm** installed:

```bash
node -v
npm -v
```

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Jayant-Datta/Nector-Grocery-App.git
   cd Nector-Grocery-App
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the Vite local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open your browser and navigate to **`http://localhost:5173`**.

### Production Build

To compile TypeScript and create an optimized production build:

```bash
npm run build
```

The output files will be generated in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality and syntax:

```bash
npm run lint
```

---

## 📱 Mobile-First Design

This application is designed specifically with a mobile viewport in mind (standard 375px–430px smartphone aspect ratio). In desktop browsers, the app is centered in a container (`max-w-md`) with soft drop shadows to simulate a native smartphone screen experience.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
