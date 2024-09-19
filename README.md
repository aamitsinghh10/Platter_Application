# Platter_Application

# Platter Restaurant Application

## Overview

The Platter Restaurant Application is a web application designed for managing multiple restaurants. It allows users to view menus, place orders, and manage their cart with a responsive and user-friendly interface. The application utilizes modern web technologies to ensure a seamless experience.

## Features

- **Restaurant Management:** Manage and display multiple restaurants.
- **Menu Accessibility:** Easy access to restaurant menus.
- **User Authentication:** Secure login and registration for users.
- **Responsive UI:** Built with React.js to work smoothly on various devices.

## Technologies

- **Frontend:** HTML, CSS, JavaScript, TypeScript, React.js
- **Backend:** (Future updates planned with Java Spring Boot)
- **Database:** MySQL

## Getting Started

To get started with the Platter Restaurant Application, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

### Installation

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/aamitsinghh10/Platter_Application.git
    ```

2. **Navigate to the Project Directory:**
    ```bash
    cd Platter_Application
    ```

3. **Install Dependencies:**
    ```bash
    npm install
    ```

4. **Set Up the MySQL Database:**
    - Create a new database named `platter_db`.
    - Update your MySQL credentials in the project configuration file as needed (e.g., `config/database.js`).

5. **Start the Application:**
    ```bash
    npm start
    ```

   The application will be running on `http://localhost:3000`.

## REST API

The application features a RESTful API to handle backend interactions. Below are some of the key endpoints:

### Authentication

- **POST /api/auth/register**
  - Registers a new user.
  - **Request Body:**
    ```json
    {
      "username": "string",
      "password": "string"
    }
    ```

- **POST /api/auth/login**
  - Authenticates a user.
  - **Request Body:**
    ```json
    {
      "username": "string",
      "password": "string"
    }
    ```

### Restaurants

- **GET /api/restaurants**
  - Retrieves a list of all restaurants.

- **GET /api/restaurants/{id}**
  - Retrieves details of a specific restaurant.
  - **Path Parameter:** `id` - ID of the restaurant.

### Menu

- **GET /api/restaurants/{id}/menu**
  - Retrieves the menu of a specific restaurant.
  - **Path Parameter:** `id` - ID of the restaurant.

### Orders

- **POST /api/orders**
  - Places a new order.
  - **Request Body:**
    ```json
    {
      "restaurantId": "string",
      "items": [
        {
          "menuItemId": "string",
          "quantity": "number"
        }
      ]
    }
    ```

- **GET /api/orders/{id}**
  - Retrieves details of a specific order.
  - **Path Parameter:** `id` - ID of the order.

## Postman Collection

To test the API endpoints, you can use the provided Postman collection. Import the collection from the `Postman` folder into Postman to test and interact with the API.


