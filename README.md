# react-learning-app

Explore React in deep with demo examples.

Two types of Export and Import

- Default Export/Import
  export default ComponentName;
  Import ComponentName from "path";

- Named Export/Import
  export const ComponentName;
  Import { ComponentName } from "path";

# React Hooks

(Normal JS Utility functions)

- useState() - Superpowerful react variables
- useEffect()

# Two types of routing in Web Apps

- Client Side Routing
- Server Side Routing

# Parent Child's Component Call and How React Life Cycle Work with this

- Parent Constructor
- Parent Render

  - First Child Constructor
  - First Child Render

  - Second Child Constructor
  - Second Child Render

  <DOM UPDATED - IN SINGLE BATCH>

  - First ComponentDidMount Call
  - Second ComponentDidMount Call

- Parent ComponentDidMount Call

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app.
- Create a Cart Slice
- dispatch(action)
- Selector

# Types of testing(developer)

- Unit Testing - Test your react component in isolation or testing small specific unit of react application.

- Integration Testing - Testing the integration of the many react components.

- End to End Testing - e2e Testing
  - Testing a react application as soon as user lands on the website to the user leaves the website, will test all the different types of test.
  - It will test how the user will flow accross the application.

# Setting up Testing

- Install React Testing Liabrary
- Install Jest
- Install Babel Dependencies
- Configure Babel
- Configure Parcel Config file to disable default bable transpilation.
- Jest Configuration - npx jest --init
- Install Jest Environment JSDOM/ jsdom liabrary
- Install @babel/preset-react to make JSX work in test cases.
- Include @babel/preset-react inside my babel config.
- Install @testing-library/jest-dom liabrary
