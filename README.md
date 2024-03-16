# Project Name

## Description

This project is a web application designed to showcase products, featuring a special section for highlighting top products. It utilizes modern web technologies and follows responsive design principles to ensure a seamless user experience across various devices.

## Key Features

- Product Display: Display products from a Shopify Shop with images, titles, price and descriptions.
- Top Products Highlight: Showcase top products based on specific criteria.
- Responsive Design: Application adapts to different screen sizes.

## Technologies Used

- React
- Sass (SCSS)
- React Router
- Shopify API connection

## Setup and Installation

1. Clone the repository.
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Open `http://localhost:3000` in your browser.

## Component Structure

- `<About />`: Displays company information.
- `<Card />`: Represents a product card with a flip effect.
- `<Product />`: Detailed view of a product.
- `<TopProducts />`: Section for displaying top products.

## Styling

The project uses Sass for styling. Key styling files include:

- `src/index.scss`
- `src/components/Card/Card.scss`
- `src/components/Product/Product.scss`
- `src/utils/css-variables.scss`

## Responsive Design

The application is designed to be responsive with specific styles for mobile, tablet, and desktop devices.

## Known Issues

- Card in Mobile: Investigating issue with `.card` flip on mobile devices.
