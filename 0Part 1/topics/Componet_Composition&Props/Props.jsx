import { Profile } from "./Profile.jsx";

function Props({ firstN, lastN }) {
  return (
    <>
      <h1>
        {firstN} {lastN}
      </h1>
      <Profile fname={firstN} lname={lastN} />
    </>
  );
}

export { Props };
