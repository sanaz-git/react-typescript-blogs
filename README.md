# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.  
See more about [running tests](https://facebook.github.io/create-react-app/docs/running-tests).

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**  
Copies all the configuration files and dependencies into your project, giving you full control over them.

## Using MongoDB for the Backend

This project uses MongoDB for the backend. Follow the steps below to install and run MongoDB on Windows.

### Installing MongoDB on Windows

1. **Download MongoDB**:  
   Get the installer from the [MongoDB Download Center](https://www.mongodb.com/try/download/community).

2. **Run the Installer**:  
   Follow the installation wizard to install MongoDB.

3. **Start MongoDB**:  
   If installed as a service, it starts automatically. If not, run the following command in Command Prompt:

   ```sh
   "C:\Program Files\MongoDB\Server\5.0\bin\mongod.exe"

   ```

4. **Verify Installation:**:  
   Open a new Command Prompt window and run:

   ```sh
   "C:\Program Files\MongoDB\Server\5.0\bin\mongo.exe"
   ```

### Sample JSON for Blogs

Example of the JSON data structure for blogs:

```sh
[
 {
   "_id": {
     "$oid": "664ba0b724d9930a9eda4aad"
   },
   "title": "Exploring the Universe",
   "image": "https://example.com/universe.jpg",
   "text": "This article delves into the mysteries of the cosmos...",
   "author": "Jane Smith"
 },
 {
   "_id": {
     "$oid": "664ba0b724d9930a9eda4aae"
   },
   "title": "The Art of Cooking",
   "image": "https://example.com/cooking.jpg",
   "text": "Cooking is both an art and a science. This article covers the basics...",
   "author": "Chef Gordon"
 }
]



