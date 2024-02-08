# Drive Rent Hub

## Overview

"Drive Rent Hub" is a cutting-edge web application developed to facilitate car rental services in Ukraine. Leveraging the power of Vite and React, this project integrates a suite of modern libraries to deliver a seamless and responsive user experience. Below is a list of the key libraries and technologies utilized:

- **Axios:** For making HTTP requests.
- **Prop-types:** To document the intended types of properties passed to components.
- **Styled-components:** For styling the application with enhanced CSS capabilities.
- **@reduxjs/toolkit & React-redux:** For efficient global state management.
- **Redux Persist:** To persist and rehydrate a redux store.
- **React Router DOM:** For declarative routing within the application.
- **React-loader-spinner & React-spinners:** To provide visual feedback during loading states.
- **Mockapi:** To simulate a backend with a custom API for development purposes.
- **React Icons:** To enhance the app with scalable icons.
- **React-scroll-up:** For a better navigation experience by adding a scroll-up button.
- **React-spinners:** To display loading indicators aesthetically.

## Project Description

"Drive Rent Hub" offers a streamlined platform for users to browse and rent vehicles, enhancing the car rental process with intuitive design and user-friendly features. The application comprises several key pages, each tailored to meet the specific needs of users:

### Pages

#### 1. Home Page
- Provides an overview of the company and its car rental services.
- Includes contact information for user inquiries.
- Features custom styling and design for a unique user experience.

#### 2. Car Catalog
- Displays a detailed catalog of available cars, complete with specifications.
- Offers a filter functionality by brand for user convenience.
- Implements pagination, showing 12 advertisements per initial load with an option to "Load more".

#### 3. Favorite Advertisements
- Allows users to view and manage their favorite car advertisements.
- Offers functionality to remove cars from the favorites list.

## Technical Implementation

The application showcases the following technical features and functionalities:

- **Advertisement Card:** Each card includes a "favorite" button and options to view more details.
- **Pagination:** Handled on the backend, displaying 12 advertisements per page for optimal performance.
- **State Management:** Utilizes Redux for global state management across the application.
- **HTTP Requests:** Axios is employed to handle all outgoing and incoming HTTP requests.
- **Filtering:** Incorporates car brand filtering using an external file, `makes.json`.
- **Routing:** Leverages React Router for navigation, with routes configured for the Home page, Car Catalog, and Favorites.
- **Persistence:** Ensures that the catalog and favorites pages retain their state even after a page refresh for a consistent user experience.

## Backend Integration

To support the dynamic features of the application, a custom backend is simulated using MockApi, allowing for real-time data management and interaction:

- **Advertisements Resource:** A dedicated resource for managing car advertisements, including all necessary fields and configurations.
- **Data Population:** An `adverts.json` file is utilized to populate the MockApi collection with initial data, ensuring a robust starting point for application testing and usage.

## Conclusion

"Drive Rent Hub" represents a significant advancement in online car rental services, providing users with a powerful, easy-to-navigate platform. Through its thoughtful integration of modern web technologies and design practices, it sets a new standard for convenience and efficiency in the car rental industry.
