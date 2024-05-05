# Bike Management System

## Project Overview

Welcome to the Bike Management System, a comprehensive solution designed to efficiently manage bike inventory, track sales, and analyze sales history. This system incorporates essential features such as authentication, CRUD operations, state management, real-time UI updates, and advanced bike filtering.

## Table of Contents

- [Live Demo](#live-link)
- [Features](#features)
- [Authentication](#authentication)
- [Bike Management](#bike-management)
  - [CRUD Operations](#crud-operations)
  - [Filtering System](#filtering-system)
- [Maintenance and Servicing](#maintenance-and-servicing)
- [Sales Management](#sales-management)
  - [Selling Products](#selling-products)
  - [Sales History](#sales-history)
- [Bike Filtering](#bike-filtering)
- [User Interface Features](#user-interface-features)
- [State Management](#state-management)
- [Invoice Printing](#invoice-printing)
- [Bulk Delete Product Options](#bulk-delete-product-options)
- [Duplicate & Edit Feature](#duplicate--edit-feature)
- [Technical Requirements](#technical-requirements)
- [Getting Started](#getting-started)
- [Contribution Guidelines](#contribution-guidelines)

## Deployment

Live Link : [Bike Management System](https://bike-management-client-alpha.vercel.app)

## Login Credentials

- **Seller Login Credentials**

  - Email: mobassherpautex@gmail.com
  - Password: Mobassher123

- **Buyer Login Credentials**
  - Email: raiyan@gmail.com
  - Password: Raiyan123

## Features

### Authentication

Users can register and log in to access the dashboard securely using JSON Web Tokens (JWT). The system has two user roles:

- **Buyer:** Can search for products, view available inventory, and make maintenance and servicing requests.
- **Seller:** Has additional permissions related to managing inventory and sales, including adding new products, updating existing product details, managing sales, and accepting maintenance requests.

### Bike Management

#### CRUD Operations

- Add new bikes to the inventory.
- Delete existing bikes from the inventory.
- Update bike details.
- View the list of bikes in the inventory.

#### Filtering System

- Robust filtering system for effective bike selection.
- Filtering options include price range, release date, brand, model, type, size, color, and additional relevant parameters.

### Maintenance and Servicing

- Dedicated section for maintaining detailed records of each bike's maintenance history.
- Record date of the last servicing, next scheduled servicing date, service details (e.g., oil change, brake check, tire replacement), and any additional notes.
- Apply discounts for bike servicing based on previous servicing records.

### Sales Management

#### Selling Products

- Users can search for a product to sell.
- Upon finding the product, users can click the "Sell" button.
- Sale form includes quantity, buyer name, and sale date.
- If the quantity reaches zero, the product is automatically removed from the inventory.

#### Sales History

- View sales history categorized by weekly, daily, monthly, and yearly periods.

### Bike Filtering

Implement a comprehensive bike filter system to optimize inventory management. The filter options cater specifically to bikes and cycling:

- Filter by Price: Allow users to set a price range for bikes.
- Filter by Release Date: Provide options for filtering bikes based on their release or production date.
- Filter by Brand: Implement real-time search functionality for bike brands.
- Filter by Model: Enable searching by bike model for unique identification.
- Filter by Type: Categorize bikes into types (e.g., road, mountain, hybrid).
- Filter by Size: Include a filter for bike sizes.
- Filter by Color: Allow filtering bikes based on their color.
- Additional Relevant Filter Parameters: Introduce other relevant filter parameters such as frame material, suspension type, or any custom attributes associated with the bikes.

### User Interface Features

- Gracefully update the UI in real-time when changes occur (e.g., product updates, sales, etc.).
- Utilize RTK Query for efficient CRUD operations.
- Implement Re-fetching functionality to ensure data accuracy and consistency.
- Mobile-responsive design for a seamless user experience on various devices.

### State Management

- Utilize Redux for maintaining a consistent application state.

### Invoice Printing

- Integrate a feature allowing users to generate and print invoices for sales transactions.
- The invoice should include details such as bike name, quantity, price, date of the sale, total amount, and any additional relevant information.

### Bulk Delete Product Options

- Enable users to efficiently manage their inventory by implementing a bulk delete feature.
- Provide a user-friendly interface to select and delete multiple products simultaneously.

### Duplicate & Edit Feature

- Implement a "Duplicate & Edit" feature allowing users to create variants by duplicating and editing existing products.

## Technical Requirements

- Uses RTK Query for efficient CRUD operations.
- Implements Redux for state management.
- Real-time UI updates with graceful handling.
- Re-fetching functionality for data accuracy.
- Mobile-responsive design.
- Over 10 commits in the GitHub repository.
- Manual code writing without AI tools or libraries.
- Modular pattern recommended for enhanced code organization.

## Getting Started

1. Clone the repository.
2. Install dependencies.
3. Set up the backend (if applicable).
4. Run the application.

## Contribution Guidelines

1. Fork the repository.
2. Create a new branch.
3. Make changes and commit.
4. Push changes to the branch.
5. Create a pull request.

Feel free to explore the Bike Management System and contribute to its development!

---

## More Projects and Information

Explore additional projects and find out more about my work on my portfolio website: [Portfolio Mobassher](https://dev-mobassher.web.app).
