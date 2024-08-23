# Currency Crusher

Currency Crusher is a real-time currency conversion tool with a React frontend and an Express backend. It uses the ExchangeRate-API for up-to-date currency rates.

## Features

- Real-time currency conversion
- Rate limiting to prevent abuse
- CORS enabled for frontend-backend communication

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js, Express, Axios
- **API**: ExchangeRate-API

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/currency-crusher.git
   cd currency-crusher

2. **Install Dependencies**

   ```bash
//Install backend dependencies
cd backend

npm init --yes

npm i express axios cors express-rate-limit dotenv

node --watch app

//Navigate to frontend and install dependencies
cd frontend

npm create vite@latest

npm i axios

3. **Configure Environment Variables**

Create a .env file in the root directory with:

 ```bash
PORT=3000
EXCHANGE_RATE_API_KEY=your-exchange-rate-api-key


## Running the Application
Backend
 ```bash

frontend
