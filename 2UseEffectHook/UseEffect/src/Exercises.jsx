/*

WarmUp
    1. Create a new Vite React project

    2. Create a Counter.jsx with a Counter component
       inside that you can export.

    3. Add state for a counter which is a number as well
       as an <h1> and a <button>. Have the <h1> display
       the current counter, starting at 0. When you click
       the button, increase the counter by 1.

    4. How would you use useEffect to log:
       1. "Component Mounted" only when the component mounts
       2. "Counter state changed" only when counter changes

    5. Import Counter in to main.jsx and replace the <App />
       with it to test that it works in your Browser.
*/

/*

Exercise 1
    1. Create a new Vite React project

    2. Create a Counter.jsx with a Counter component
       inside that you can export.

    3. Add state for a counter which is a number as well
       as an <h1> and a <button>. Have the <h1> display
       the current counter, starting at 0. When you click
       the button, increase the counter by 1.

    4. How would you use useEffect to log:
       1. "Component Mounted" only when the component mounts
       2. "Counter state changed" only when counter changes

    5. Import Counter in to main.jsx and replace the <App />
       with it to test that it works in your Browser.
*/

/*

Exercise1

    1. Create a new Vite React project

    2. Create an Interval.jsx with a Interval component
       inside that you can export.

    3. Add state for a counter which is a number as well
       as an <h1> and a <button>. Have the <h1> display
       the current counter, starting at 0. When you click
       the button, increase the counter by 1.

    4. How would you setup a "setInterval" with a 1 second
       repeat to log out "Interval says hello!" ONLY ONE
       time for this component? (Changing state/re-renders
       should NOT create more or new intervals)

    5. Import Interval in to main.jsx and replace the <App />
       with it to test that it works in your Browser.
*/

/*

Exercise 2

    1. Create a new Vite React project

    2. Create 2 files each with their own component
       exported of the same name:
       - Home.jsx
       - Section.jsx

    3. Add state to Home.jsx where there is an <h1> that
       says "Visits: " in it as well as a <button>. Put any
       text inside the button like a '+'. When we click the 
       button, we should increase the number of visits in 
       the <h1>, just like a counter. 
       Eg: Visits: 1, Visits: 2 ... etc

    4. Add state to the Section.jsx component such that it
       returns an <h2> with a timer in it for how long the
       user has been on that page for in seconds.
       Eg: Time on page: 1 second(s), Time on page: 2 second(s)

    5. Add a single Section component to the Home component right
       below the h1 and button.

    6. Put a useEffect that runs on every single re-render inside
       both Home and Section that says that that component has
       re-rendered: "Home has re-rendered", "Section has re-rendered"

    7. Try to predict how/when the log/useEffect in the Home and Section
       components will be triggered (based on state and mounting)

    8. Import Counter in to main.jsx and replace the <App />
       with it to test if you're right in your Browser.

    HINT* Be careful with cleanup functions!
*/

/*

Exercise 3

    1. Create a new Vite React project

    2. Create a Pokemon.jsx file that returns and exports
       a Pokemon component.

    3. In the Pokemon component, return an <h1> tag with
       the text 'Mankey' inside, as well as an empty <img>
       tag below it.

    4. How/where would you make a fetch request to the API
       at: https://pokeapi.co/api/v2/pokemon/mankey
       in order to get the image to show up in the <img>
       tag? (Go for the 'original artwork, front default
       image if you can or any of the other sprites')

    5. Import Pokemon in to main.jsx and replace the <App />
       with it to test that it works in your Browser.

    HINT* You will need both useState and useEffect for this
    BONUS* Could you fill in other data based on the response?
*/
