import useAuth from "./useAuth.jsx";

function Home() {
  const logged = useAuth();
  return logged ? <h1>Your Profile</h1> : <h1>Not authenticated</h1>;
}

export default Home;
