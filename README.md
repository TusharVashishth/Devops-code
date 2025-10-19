# AWS DevOps Series Code Kit

A simple Express.js TypeScript API that serves random inspirational quotes. This project is part of the AWS DevOps series, demonstrating best practices for building and deploying Node.js applications.

## Features

- Random quote generator API
- Health check endpoint
- TypeScript support
- CORS enabled
- Environment variable configuration

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/TusharVashishth/Devops-code.git
   cd devops-code
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Edit the `.env` file if you need to change the default port (8000).

## Running the Application

### Development Mode

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm start
```

The server will start on `http://localhost:8000` (or the port specified in your `.env` file).

## API Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check (returns JSON with status and timestamp)
- `GET /quote` - Get a random inspirational quote

## Project Structure

```
src/
├── index.ts          # Main application file
└── config/
    └── quotes.ts     # Array of inspirational quotes
```

## Technologies Used

- Express.js
- TypeScript
- CORS
- dotenv for environment variables
