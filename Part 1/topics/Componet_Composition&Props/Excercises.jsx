/*

Warmup

    1. Create a new Vite React project

    2. Create a Paragraph.jsx file that has a component
       that returns a <p /> with some text in it

    3. Create a Header.jsx file that has a component
       that returns an <h1 /> with some text in it

    4. Create a Section.jsx file that composes one
       Header component with a Paragraph component
       below it

    5. Replace the <App /> in the main.jsx file with
       the <Section /> component above

    6. Check in your Browser to see if it works as expected
       (You should see your <h1> and <p> show up)
*/

/*

Excercise 1

    1. Create a new Vite React project

    2. Create a Paragraph.jsx file that has a component
       that returns a <p /> with some text in it. However,
       make the text inside come from a prop passed in to
       the component.

    3. Create a Header.jsx file that has a component
       that returns an <h1 /> with some text in it. However,
       make the text inside come from a prop passed in to
       the component.

    4. Create a Section.jsx file that composes one
       Header component with a Paragraph component
       below it while passing in some text to each
       as props

    5. Replace the <App /> in the main.jsx file with
       the <Section /> component above

    6. Check in your Browser to see if it works as expected
       (You should see your <h1> and <p> show up)
*/

/*

Excercise 2

    1. Create a new Vite React project

    2. Create a Button.jsx file that has a component
       that returns a <button /> with some text in it. However,
       make the text inside come from a prop passed in to
       the component. Also, make the onclick event of the
       button refer to a function that is passed in as a prop
       as well.

    3. Create a Header.jsx file that has a component
       that returns an <h1 /> with some text in it. However,
       make the text inside come from a prop passed in to
       the component (name it whatever you like).

    4. Create a Section.jsx file that composes one
       Header component with a Button component
       below it while passing in some text to each
       as props.

    5. Inside Section.jsx, create a function called "handleClick"
       that logs out "Boo!" the console. Pass this in to the 
       Button component to be used for it's click handler prop.

    6. Replace the <App /> in the main.jsx file with
       the <Section /> component above

    7. Check in your Browser to see if it works as expected
       (You should see your <h1> and <button> show up and
        the button should log "Boo" when clicked)

    BONUS: Why can we pass around the "handleClick" function
           as a prop like this?
*/

/*

Excercise 3

    1. Create a new Vite React project

    2. Create a Button.jsx file that has a component
       that returns a <button /> with some text in it as
       well as an onclick event handler. Make
       the text inside as well as the event handler
       come from props passed in to the component.

    3. Create a Card.jsx file that has a component
       that returns an <h2 /> with some text in it
       as well as a Button element below it. Make
       the text inside the <h1> come from a prop 
       passed in to the component.

    4. Create a Profile.jsx file that returns an
       <h1 /> with a <Card /> component below it.
       Have the text inside the <h1> come from props
       as well as all the props needed for the <Card>.
       (Do not hard code anything for the h1 or the
        Card, have them all come from Profile's props)

    5. Replace the <App /> in the main.jsx file with
       the <Profile /> component above. Create a function
       that logs out the text "It worked!". Pass in all the
       props needed to make all the text show up properly in
       Profile, Card as well as Button as well as the function
       needed for the Button click to work.

    6. Check in your Browser to see if it works as expected
       (Make sure all the text shows for each component and
        text to make sure the button logs when clicked)
*/

/*

Bonus

    1. Create a new Vite React project

    2. Create a Paragraph.jsx file that has a component
       that returns a <p> with some text inside it that
       come from props

    3. Inside the main.jsx file add replace the <App />
       component with your Paragraph like this:
       <Paragraph>
         <h1>BONUS</h1>
       </Paragraph>

    5. How can you get the <h1> to show from inside the
       Paragraph component?

    6. Check in your Browser to see if it works
       (You should see both the h1 and the p)

   HINT* What are all the props in Paragraph?
*/
