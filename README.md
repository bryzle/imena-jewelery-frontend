Imena Jewelry E-Commerce Platform
A modern e-commerce website designed to showcase and sell high-end jewelry. Built using React, Stripe API, and a clean, user-friendly interface, this platform aims to provide an exceptional shopping experience for customers.

Site: https://imenajewelry.brandonlum.com/
Github: https://github.com/bryzle/imena-jewelery-frontend

Features
Product Listing: A visually appealing display of products with descriptions, images, and prices.
Add to Cart: (In Progress) Users can easily add items to their shopping cart for checkout.
Mock Checkout Page: (In Progress) Simulates a checkout process using the Stripe API for inventory display.
Responsive Design: Optimized for seamless use across devices.
Secure Payment Gateway Integration: (Future enhancement) Integration with Stripe to handle payments securely.
Tech Stack
Frontend: React, React Router
API Integration: Stripe API
Styling: CSS
Build Tool: Vite
Version Control: Git and GitHub
Setup Instructions
Prerequisites
Node.js installed on your machine
Git installed on your machine
A GitHub account
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/bryzle/imena-jewelery-frontend.git
Navigate to the project directory:
bash
Copy code
cd imena-jewelery-frontend
Install dependencies:
bash
Copy code
npm install
Create a .env file in the project root and add your Stripe Publishable Key:
makefile
Copy code
VITE_STRIPE_PUBLIC_KEY=your-publishable-key
Run the Project
To start the development server:

bash
Copy code
npm run dev
The application will be available at http://localhost:5173.

Usage
1. Product Display
The homepage features a list of jewelry products fetched dynamically.
Each product includes an image, name, description, and price.
2. Cart and Checkout
Users can add products to their cart and proceed to the checkout page.
The mock checkout page displays the total price and prepares the platform for Stripe integration.
Directory Structure
plaintext
Copy code
src/
├── assets/           # Images and media files
├── components/       # Reusable React components
│   ├── Header/       # Site navigation header
│   ├── Footer/       # Footer with links and contact info
│   ├── Products/     # Product listing component
│   ├── Cart/         # Cart component for managing orders
│   ├── Checkout/     # Checkout page
├── utils/            # Utility files and API interactions
│   ├── api.js        # API integration with Stripe
├── App.jsx           # Main application file
├── index.css         # Global CSS styles
├── main.jsx          # React entry point
To-Do
Complete full checkout integration with Stripe (backend setup required).
Add customer reviews and testimonials.
Optimize product search and filtering options.
Implement authentication for customers.
Contributing
Contributions are welcome! Please fork the repository and create a pull request for review.