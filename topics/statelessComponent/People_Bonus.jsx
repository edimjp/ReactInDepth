/*
    1. Create a new React project using Vite

    2. Make a new jsx file called People.jsx

    3. Make a People function inside this that has a regular
       Javascript Array, each with an Object, where each
       Object has 2 keys: name and age

    4. Create at least 3 of these "People" Objects in the
       Array to use

    5. How would you make the jsx to return an <h1> with the name
       of the person, with a <p> tag below for the age of each
       person for each person in the Array you created?

    6. Export this function and import it in to main.jsx
       to replace the <App /> being rendered.

    7. Make sure this works in your browser
*/

function People() {
  const profiles = [
    { name: "edim", age: 26 },
    { name: "paul", age: 100 },
    { name: "john", age: 333 },
  ];

  const profileCard = profiles.map((profile) => {
    return (
      <>
        <h1>{profile.name}</h1>
        <p>{profile.age}</p>
      </>
    );
  });

  console.log(profileCard);

  return <>{profileCard}</>;
}

export default People;
