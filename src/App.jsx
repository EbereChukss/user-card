import React from "react";
import UserCard from "./Components/UserCard";
import GreetingForm from "./Components/GreetingForm";
import "./index.css";

const App = () => {
  return (
    <div className="app-container">
      <h1 style={styles.header}>User Profile & Greeting App</h1>
      <UserCard
        name="Chukwunenye Chidiebere Abiding"
        email="chukwunenyeabiding@gmail.com"
      />
      <GreetingForm />
    </div>
  );
};

const styles = {
  header: {
    fontSize: "2em",
    color: "#373737",
    marginBottom: "20px",
  },
};

export default App;
