# React Debugging Checkpoint

## Project Description
This project demonstrates the debugging of a simple React application using React Developer Tools. The application is composed of multiple components and uses React state and props. The main goal of this project is to identify, analyze, and fix issues related to incorrect state values and component behavior.

## Application Structure
The project is structured as follows:
- App.js: Parent component responsible for managing state
- UserProfile.js: Child component that receives and displays props
- React Hooks (useState) for state management

## Tools Used
- React
- React Developer Tools (Browser Extension)
- Chrome DevTools

## Debugging Process

### Step 1: Application Setup
The React application was created using create-react-app and started using npm start. The application ran successfully in the browser.

### Step 2: Installing React Developer Tools
React Developer Tools was installed as a browser extension and accessed through the Components tab in the browser DevTools.

### Step 3: Inspecting the Component Tree
Using the Components tab in React Developer Tools, the component hierarchy was inspected and confirmed to be:
App → UserProfile. This verified that components were rendering correctly.

### Step 4: Inspecting State
The App component was selected in React Developer Tools and its state was inspected. The user state object contained the following values: name set to "John" and age set to 0. The age value was identified as incorrect.

### Step 5: Inspecting Props
The UserProfile component was selected and its props were inspected. The props received matched the state values from the App component, confirming that the incorrect value originated from the parent component.

### Step 6: Live State Editing
The age value was edited directly in React Developer Tools from 0 to 25. The user interface updated immediately, confirming that the issue was caused by incorrect state initialization.

### Step 7: Fixing the Issue
The initial state in the App component was corrected by setting a valid age value. This fixed the issue permanently in the source code.

### Step 8: Preventing Future Errors
Default props were added to the UserProfile component to ensure the application would not break if props were missing or undefined.

### Step 9: Verification
After applying the fixes, the application was tested again. The state updated correctly, props were passed properly, the UI displayed the correct information, and no console errors were present.

## Conclusion
React Developer Tools was successfully used to debug and fix issues related to state and props in a React application. The application now functions correctly, and best practices were applied to prevent similar issues in the future.

## Author
This project was completed as part of a React debugging checkpoint assignment.
