/*
WarmUp Ex
    1. Create a new Vite React Project

    2. Create a Counter.jsx file to create a Counter
       Component that you export within it

    3. Inside Counter, create an <h1> with two <button>
       elements. One button should have the text '-' inside
       while the other has a '+' inside.

    4. Make it so that the <h1> displays a counter starting at
       0 and when you click the buttons, they act appropriately.
       (The counter in the h1 should go up and down by 1)

    5. Import the Counter component in to main.jsx and replace the
       <App /> with it and test that it works in the Browser
*/

/*
Exercise 1
    1. Create a new Vite React Project

    2. Create a TextBox.jsx file to create a TextBox
       Component that you export within it

    3. Inside Textbox, create an <h1> with an <input> element
       below it.

    4. Make it so that when you type in to the <input>, the <h1>
       updates to match the text that has been entered

    5. Import the TextBox component in to main.jsx and replace the
       <App /> with it and test that it works in the Browser
*/

/*

Excercise 2
    1. Create a new Vite React Project

    2. Create a Form.jsx file to create a Form
       Component that you export within it

    3. Inside Form, create an 3 <input> text fields, one
       for first name, last name, and email. Create a 'submit'
       <button> below the inputs. Wrap the inputs and button inside
       a <form> element. Then, add an <h1> element below the
       <form> element (empty text to start)

    4. Make it so that when you type in to the 3 <input> elements
       and then click 'submit', the data for the 3 inputs gets
       displayed inside the <h1> element as text. You can format
       this text however you want, but make sure the page does not
       reload when you click 'submit'

    5. Import the Form component in to main.jsx and replace the
       <App /> with it and test that it works in the Browser

    BONUS* Can you think of a few ways you could do this?
*/

/*

Exercise 3

    1. Create a new Vite React Project

    2. Create a Profile.jsx file to create a Profile
       Component that you export within it

    3. Inside Profile, create some state that stores a string
       initialized to 'Logged In'. Create an <p> element that
       displays this state text inside it

    4. Create a Button.jsx file to create a Button
       Component that you export within it

    5. Inside Button, create a <button> element with the text
       'Toggle Login' inside. There should be no state in this
       component. Then, add this Button component at the bottom
       of the Profile component (under the p tag)

    6. How would you prop drill the ability for Button to change
       the login text inside Profile? (It should be able to toggle
       the text from 'Logged in' to 'Logged out' and back again)

    7. Import the Profile component in to main.jsx and replace the
       <App /> with it and test that it works in the Browser
*/

/*

Bonus Ex

    1. Create a new Vite React Project

    2. Create a Counter2.jsx file to create a Counter2
       Component that you export within it

    3. Inside Counter2, create an <h1> with a <button>
       element with the '+' text inside it.

    4. Make it so that the <h1> displays a counter starting at
       0 and when you click the button, it goes up by 2. However,
       you can only use ONE event handler function to do this and 
       must use TWO calls to the setState function where each 
       makes the count go up by 1. (You can't just use one setState
       to make it go up by 2 immediately)

    5. Import the Counter component in to main.jsx and replace the
       <App /> with it and test that it works in the Browser

   HINT* There is an alternative signature for the setState functions

   BONUS* WHY does it work this way?
   BONUS2* Can you use this to refactor exercise 3 slightly? (passing
           only the setState function, not the state itself)
*/
