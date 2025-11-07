import reactImage from '../../src/assets/reactPracticeImage.jpg'
/*
    1. Create a new React project using Vite

    2. Download an image (png or jpg) off the internet
       and put it in to the src/assets folder of the project

    3. Make the App.jsx Component return an image tag that
       displays the image you downloaded.

    4. Add an <h1> tag as a title above the image

    5. Make sure this works in your Browser and test it
*/

function Exercise1 (){
   
   return(
      <>
      <h1>This is the React Image</h1>
      <img src={reactImage} alt="react image" />
      </>
   )
}

export default Exercise1