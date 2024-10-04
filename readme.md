
# Country Information Application

This application allows users to view detailed information about countries, including their borders.

## Getting Started

These instructions will help you set up and run the application on your local machine for development and testing purposes.

### Prerequisites

- Node.js (for front end)
- npm (Node Package Manager)
- Express (for back end)
- PostgreSQL (for database)

### Front End Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the front end:**
   ```bash
   npm start
   ```

   This will start the development server on `http://localhost:3000`.

### Back End Setup

1. **Navigate to the server directory:**
   ```bash
   cd <server-directory>
   ```

2. **Install server dependencies:**
   ```bash
   npm install
   ```

3. **Configure the environment variables:**
   - Create a `.env` file in the root of the server directory with the following contents:
     ```bash
     DB_PATH=./db/database.sqlite
     SESSION_SECRET=your_secret_key
     ```

4. **Start the back end server:**
   ```bash
   npm start
   ```

   The server will run on `http://localhost:5000`.

### Usage

- Navigate to `http://localhost:3000` to access the application.
- Click on a country name to view detailed information about that country, including its flag and border countries.

### License

This project is licensed under the MIT License.