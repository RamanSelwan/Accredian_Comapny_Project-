# Accredian

## Description
This project consists of a frontend and a backend, which work together to provide full-stack functionality. Follow the steps below to set up and run the project on your local machine.

## Installation and Setup

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Clone the Repository
```sh
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### Install Dependencies
#### Frontend
```sh
cd frontend
npm install
```
#### Backend
```sh
cd backend
npm install
```

### Configure Environment Variables
Create a `.env` file inside the `backend` directory and add the required environment variables.
```sh
# Example .env file
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

## Running the Project

### Start the Backend Server
```sh
cd backend
npm start
```

### Start the Frontend Server
```sh
cd frontend
npm start
```

## Folder Structure
```
project-root/
│── backend/    # Backend code (Node.js, Express, MongoDB)
│── frontend/   # Frontend code (React.js, Tailwind CSS)
│── README.md   # Project documentation
```

## Contributing
If you want to contribute, feel free to create a pull request or open an issue.

## License
This project is licensed under the MIT License.
