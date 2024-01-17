# Music Track API Documentation

This API provides endpoints to manage music tracks.

## Server Live Link

The API is hosted on [ Live Server ](https://playstation-server.onrender.com).

## Getting Data

### GET /tracks

Retrieve a list of music tracks.

#### Request

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
