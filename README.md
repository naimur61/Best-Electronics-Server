# Music Track API Documentation

This API provides endpoints to manage music tracks.

## Server Live Link

The API is hosted on [ Live Server ](https://playstation-server.onrender.com).

## Getting Data

### GET /tracks

Retrieve a list of music tracks.

#### Request

# MusicTrack Backend

## Overview

This Node.js backend serves as the server-side component for the MusicTrack application. It handles the creation and retrieval of music tracks.

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

```bash

<!--

     <!--  for Development -->

    "start": "ts-node-dev --respawn --transpile-only src/server.ts",


    <!-- for Production -->
    "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
    "start": "node dist/server.js",
    "build": "tsc",

    -->
```
