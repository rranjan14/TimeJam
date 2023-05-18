# Time Jam

React Native app built using Expo(SDK 48), React Navigation and Redux Toolkit

## Anatomy of the app

### `./src/screens`

- Contains two screen inside a tab navigator. One of which shows all the booked shifts and the other one contains all the shifts available.
- Each folder contains 2 files, `indes.tsx` where the screen UI is declared and `styles.ts` where styles for that particular screen is defined. I have followed the same convention with all the screens and UI components.

### `./src/components`

- Contains all the reusable components being used in the app.

### `./src/hooks`

- Contains a custom hook `useShifts` where most of the business logic like grouping shifts by status, booking and cancelling a shift and filtering shift based on area is added.

### `./src/lib`

- Contains api calls, colors, necessary constants, types and utility functions.

### `./src/navigation`

- Contains the navigation system of the app.

### `./src/store`

- Contains redux store definition and shifts reducer to manage the state of the application.

## Running the app

- Clone the repository and run `npm install`.
- Clone the api repository and run `npm install`.
- To start the server, you need to change a few things:
  - In file `./api/shifts-mock-api/mockShifts.js` change the uuid import from `import uuid from 'uuid/v4'` to `import {v4 as uuidv4} from 'uuid';`
  - Comment out all the `configs` objects defined for the routes which contains validation.
  - After these changes, the server will start running but only the GET routes will work.
- Run `npm start` from the root of the api repository.
- Run `npm start -c` from the app respository and follow the instructions which come up in the console to start run the app.
