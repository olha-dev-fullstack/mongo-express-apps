# MongoDB and Express Projects

This repository contains three projects that demonstrate the usage of MongoDB with Mongoose, Express, and Mocha for testing. Below is a detailed description of each project and instructions on how to run them.

---

## 1. Mocha Tests App

### Description

This project contains mongoDB schemas of users, posts, blogPotsts and comments and mainly focuses on testing entities management and relations using Mocha.

### Features

- Tests backend endpoints.
- Uses Mocha for writing and running tests.

### File Structure

- `src/`: Contains MongoDB schemas
- `test/`: Contains test cases written in Mocha.

### How to Run

1. Navigate to the project directory:
   ```bash
   cd mocha-tests-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the tests:
   ```bash
   npm run test
   ```

---

## 2. Uber Prototype Express

### Description

This project is a prototype of an Uber-like service built with Express.js and MongoDB using Mongoose for database operations.

### Features

- Defines models for managing ride and user data.
- Implements basic routes for creating and retrieving data.

### File Structure

- `app.js`: Entry point of the application.
- `controllers/`: Handles the business logic for routes.
- `models/`: Contains the Mongoose models.
- `routes/`: Defines the API endpoints.
- `test/`: Includes Mocha tests for the API.

### How to Run

1. Navigate to the project directory:
   ```bash
   cd uber-prototype-express
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   node app.js
   ```
4. Run the tests:
   ```bash
   npm run test
   ```

---

## 3. Up Star Music App

### Description

This project is a music application where you can manage artists and their albums. It uses MongoDB for storing data and demonstrates CRUD operations.

### Features

- Manages artist data (CRUD operations).
- Uses a simple frontend with a bundled JavaScript file.

### File Structure

- `index.js`: Entry point of the application.
- `database/`: Contains scripts for interacting with the database.
- `style/`: CSS files for the frontend.
- `tasks/`: Includes build tasks (e.g., Webpack configurations).
- `webpack.config.js`: Configuration for bundling JavaScript files.

### How to Run

1. Navigate to the project directory:
   ```bash
   cd up-star-music-app
   ```
2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```
3. Start the application:
   ```bash
   node index.js
   ```
4. The application will open on your PC using Electron for frontend

---

## Prerequisites

- Node.js (v16 or later recommended)
- MongoDB (running locally or configured connection URI)
- Mocha (for running tests)

## Common Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/olha-dev-fullstack/mongo-express-apps.git
   ```
2. Navigate to the desired project folder.
3. Follow the specific setup and run instructions for each project.
