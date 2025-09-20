CITY SEVA: Local Service Finder
CITY SEVA is a full-stack web application designed to connect users with local service providers in their area. It allows customers to easily search and filter for services like plumbing, electrical work, and painting.

This project is a demonstration of a modern web development stack, using a local MongoDB database and a Node.js backend.

✨ Features
Service Listings: View a variety of local services fetched dynamically from a backend API.

Search & Filter: Find specific services quickly by searching for keywords or filtering by category.

Add Services: Service providers can add their details to the platform using a simple form.

Contact Providers: Users can directly call service providers with a single click.

🛠️ Technology Stack
Frontend: HTML, CSS, JavaScript (client-side rendering)

Backend: Node.js, Express.js

Database: MongoDB

Tools: Mongoose (for database interactions), dotenv (for environment variables), Cors (for API security)

🚀 How to Run the Project Locally
Follow these steps to set up and run the project on your machine.

Prerequisites
Node.js: Install Node.js

MongoDB Community Server: Install MongoDB

Backend Setup
Navigate to the Backend folder in your terminal.

Bash

cd Backend
Install the necessary npm packages.

Bash

npm install
Create a .env file in the Backend folder with your local MongoDB URI.

MONGODB_URI=mongodb://127.0.0.1:27017/citysevaDB
Start the backend server.

Bash

node server.js
The terminal should show messages confirming the server is running and connected to MongoDB.

Frontend Setup
Open the index.html file in your web browser. There's no need for a separate server, as the frontend will communicate with your running backend.

Project Structure
city-seva-finder/
├── Backend/
│   ├── models/
│   │   └── service.js
│   ├── routes/
│   │   └── services.js
│   ├── .env
│   ├── package.json
│   ├── server.js
│   └── ... (node_modules)
└── index.html
