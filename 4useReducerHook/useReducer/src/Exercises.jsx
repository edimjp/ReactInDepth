/*

Warm up
    1. Create a reducer.js file and create a function
       called 'reducer' that has 2 parameters:
       1. state
       2. action

    2. Make this code work:
       const res = [1, 2, 3].reduce(reducer);
       console.log(res); // This should log: 6

    3. Use node in your terminal to run the file to
       test this: node reducer.js
*/

/*

Exercise 1
    1. Create a new Vite React Project

    2. Create a Counter.jsx file with a Counter
       component and export it

    3. Make Counter return an <h1> as well as 3
       <button> elements

    4. Create a reducer function and use useReducer
       to hook up the 3 buttons to make the counter
       go up, go down, and reset to 0. The current
       count should show in the <h1>

    5. Replace the <App /> in main.jsx with your Counter
       component and test that it works in your Browser
*/

/*

Exercise 2
    1. Create a new Vite React Project

    2. Create a Counter.jsx file with a Counter
       component and export it as well as a
       Button.jsx with a Button component and
       export that as well

    3. Make Counter return an <h1> as well as 3
       <Button> elements

    4. Make Button return a <button> element (the
       info for the button will come from props later)

    5. Create a reducer function and use useReducer
       to hook up the 3 buttons to make the counter
       go up, go down, and reset to 0. The current
       count should show in the <h1>

    6. You will need to figure out what props to pass
       into each Button from Counter

    7. Replace the <App /> in main.jsx with your Counter
       component and test that it works in your Browser

    BONUS* Try out various useEffects inside Counter and
           Button to see if you can guess when each will
           re-render (mount, update, and state updates)
*/

/*

Exercise 3
    1. Create a new Vite React Project

    2. Create a ControlledForm.jsx file with a
       ControlledForm component and export it

    3. Make ControlledForm return:
       - text <input> for a 'name'
       - text <input> for an 'email'
       - number <input> for an 'age'
       - submit button
       Wrap all of the above in a <form> element and
       give them each a relevant 'name' attribute

    4. Create a reducer function and as well as an initial
       state variable that is an object like so:
       const initialState = { name: '', email: '', age: '' }

    5. How would you use useReducer and everything above to
       hook up the form's input values to change as you type
       in them and the values of all 3 inputs to be logged
       out to the console when you click submit?

    6. Replace the <App /> in main.jsx with your ControlledForm
       component and test that it works in your Browser

    BONUS* How would you clear the form on submit?
*/
