# Project "Drive Rent Hub"
## This project was implemented using Vite + React and includes the following libraries:
- Axios
- Prop-types
- Styled-components
- @reduxjs/toolkit
- React-redux
- Redux Persist
- React Router DOM
- React-loader-spinner
- Mockapi
- React Icons
- React-scroll-up
- React-spinners

## Project Description:
"Drive Rent Hub" is a web application for a company providing car rental services in Ukraine.
## Pages:
### **1. Home Page:**
- Contains a general description of the company's services.
- Includes contact information.
- Styling and design are done according to personal discretion.
### **2. Car Catalog:**
- Displays a catalog of cars with various specifications.
- Filter by brand.
- Renders 12 advertisements on the first page, with additional ones loaded upon clicking "Load more".
### **3. Favorite Advertisements:**
- View advertisements that the user has added to favorites.
- Ability to remove advertisements from the favorites list.
## Technical Task:
- Implemented an advertisement card with a "favorite" button and the ability to view details.
- Pagination is handled on the backend and displays 12 advertisements per page.
- Redux is used for efficient state management of the application.
- Axios library is utilized for handling requests.
- Added filtering by car brands using an external file makes.json.
- Created routing using React Router with pages: "/", "/catalog", "/favorites".
- On the catalog and favorites pages, results are preserved upon page refresh.
## Backend:
- A personal backend on MockApi is used to manage advertisements.
- Created an adverts resource with necessary fields and an advertisement object.
- Added adverts.json for populating the collection.
