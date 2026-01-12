import React, { useState } from "react";
import UserProfile from "./UserProfile";

function App() {
  const [user, setUser] = useState({
  name: "John",
  age: 18   // ✅ Fixed
});
//add default props
UserProfile.defaultProps = {
  name: "Unknown",
  age: "N/A"
};



  return (
    <div>
      <h1>Debugging Demo</h1>
      <UserProfile name={user.name} age={user.age} />

      <button onClick={() => setUser({ ...user, age: 25 })}>
        Update Age
      </button>
    </div>
  );
}

export default App;
