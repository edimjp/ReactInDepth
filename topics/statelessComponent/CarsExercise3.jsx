/*
    1. Create a new React project using Vite

    2. Make a new jsx file called Cars.jsx

    3. Make a Cars function inside this that has a regular
       Javascript Array of 5 different car brands (Strings)

    4. How would you make the jsx to return a paragraph tag
       with the car brand as text inside each one (5 tags)?

    5. Export this function and import it in to main.jsx
       to replace the <App /> being rendered.

    6. Make sure this works in your browser
*/

function Cars() {
    const carList = ["toyota", "mercedese benz", "camry", "tesla", "bugatti"]
    const carsPTags = carList.map((car, index) => <p>{index + 1} {car}</p>)
    return (
        <>
            {carsPTags}
        </>
    )
}

export default Cars