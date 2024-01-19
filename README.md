# Music Track API Documentation

This API provides endpoints to manage music tracks.

## Server Live Link

The API is hosted on [ Live Server ](https://playstation-server.onrender.com).

## Overview

This Node.js backend serves as the server-side component for the MusicTrack application. It handles the creation and retrieval of music tracks.

## Install dependencies:

- **Method:** `yarn add / npm install`
  yarn add / npm install

## Configuration

Create a .env file in the project root and set the following environment variables:

- **Method:** `  
PORT=5000
MONGODB_URI=your_mongodb_connection_string`

Replace your_mongodb_connection_string with the actual connection string for your MongoDB instance.

Running the Server

- **Method:** `yarn start / npm start`
  The server will start on http://localhost:5000.

## API Endpoints

### Create Music Track

- **Endpoint:** `http://localhost:5000/api/v1/music/create-musicTrack`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
  	"title": "Frelanch",
  	"artist": "Anis",
  	"category": "video",
  	"musicUrl": "Audio/Video File link"
  }
  ```

### GET Music Track

Retrieve a list of music tracks.

- **Endpoint:** `http://localhost:5000/api/v1/music`
- **Method:** `GET`
- **Request Query:**

  ```
  searchTerm : string(Title, artist, category)
  ```

Page & Limit will be Number.

```

- **GET Example:** `: http://localhost:5000/api/v1/music/?searchTerm=text&page=1&limit=10`
```
