# 🎮 Top Up Games with POS System

Welcome to the **Top Up Games with POS System** technical test project! This front-end application allows users to select games, choose top-up amounts, and process payments through a point-of-sale (POS) system.

## 🏆 Project Goals

This project demonstrates the following:

-   **State management** with Zustand.
-   **UI library** integration (Radix UI Via shadcn).
-   **Form validation** with React Hook Form paired with zod type.
-   **Next.js App Router** for page routing.

## 📑 Key Pages & Features

1. **Homepage**

    - Slice the design based on the provided Figma.
    - Display game products and categories from the API.
    - Responsive layout for all device types.
    - Option to set a flash sale product.

2. **Product Detail Page**

    - UI design sliced based on Figma.
    - Form validation for required fields.
    - Shimmer loading effect and 3-second delay on the confirmation button before redirecting to Pending Payment Page.

3. **Pending Payment Page**

    - After 5 seconds, automatically redirect to "Payment Success".
    - Ensure data persists even after page refresh.
    - Implement smooth page transitions.

4. **Invoice Page**

    - Display payment details and ensure data persists after refresh.

5. **Order Tracker Page**

    - Track order status with persistent state management.

6. **Internationalization and Theming**

    - Integrated **next-intl** for language change functionality, allowing users to toggle between different languages seamlessly.
    - Implemented a theme toggle feature for switching between light and dark themes, enhancing user experience based on personal preferences.

## 🌐 SEO Metadata

To improve search engine visibility, the following SEO metadata is implemented:

-   **Title**: The title of the page is dynamically set based on the content.
-   **Description**: Each page includes a meta description that summarizes the content for search engines.
-   **Open Graph Tags**: For social media sharing, Open Graph tags are included to control how content appears when shared.
-   **Keywords**: Relevant keywords are included in the metadata to enhance searchability.
-   **Robots Meta Tag**: Set to control how search engines index the pages.

## 🚀 Getting Started

Follow the steps below to set up the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/RifkyA911/rifky-test-frontend.git
cd rifky-test-frontend
```

### 2. Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) installed, then run:

```bash
npm install
OR
yarn install
```

### 3. Running the Application

Make sure you have [Node.js](https://nodejs.org/) installed, then run:

```bash
npm run dev
OR
yarn dev
```

### 4. API Integration

Use the provided API endpoints to fetch:

Game Products and Product Items.

## 🛠️ Technologies Used

-   **Next.js 14.2.15** - A React framework for building server-rendered applications with ease.
-   **Zustand** - A minimalistic state management library that allows for simple and efficient state management.
-   **Radix UI (via shadcn)** - A library for building accessible and customizable UI components.
-   **Next-Intl** - A powerful library for internationalization in React, providing features like language detection, formatting, and more.
-   **React Hook Form** - A performant and flexible library for managing forms in React.
-   **Zod** - A TypeScript-first schema declaration and validation library that works seamlessly with React Hook Form.

## 📱 Responsive Design

The application is designed to be fully responsive, ensuring a seamless user experience across all devices, from mobile phones to tablets and desktops. Media queries and flexible grid layouts are used to achieve this.

## ⚡ Performance

-   **Shimmer Effect**: Implemented a shimmer loading effect to enhance user experience during data fetching.
-   **Optimized State Management**: Zustand is used for efficient state management, ensuring quick updates and smooth interactions within the app.
-   **Handle Loading and No Data Components**: The application includes custom loading and no data components, providing a better user experience when data is not available.

## 💾 Persistent Data

-   The application guarantees that order and payment data persist even after refreshing the page, leveraging Zustand's state management for a consistent user experience.

## 👨‍💻 Developer Notes

-   Ensure to review the **Figma designs** before implementing the UI to stay aligned with the project requirements.
-   Test the application for both **desktop** and **mobile** views to ensure responsiveness and usability.

## 📄 License

This project is intended for technical testing purposes only.

---

Happy Coding! 😎🎮
