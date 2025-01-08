# Getting Started with Frontend Part of Evoting.de 

### Install NodeJS 

- Download Nodejs in https://nodejs.org/en/download/package-manager
- verifies the right npm version is in the environment
  `npm -v` # should print `10.9.0`

### Install Dependencies
- `npm install`
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


### Install Cypress 
Install Cypress for running the automated regression 
### Install Dependencies
- `npm i --save-dev cypress`
## Available Scripts
In the project directory, you can run:
### `npx cypress open`
This opens the visual test runner.
### `npx cypress run`
This runs the tests in the terminal. 
### `npm run e2e:chrome`
This runs the tests in e2e folder in chrome, using the headed version. 
