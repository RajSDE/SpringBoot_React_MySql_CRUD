import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="landing-page-container">
      <h1>Welcome to the Book Management System</h1>
      <p>
        This system allows you to manage book information efficiently. You can
        perform various actions such as inserting new books, updating existing
        information, deleting books, and viewing book data.
      </p>
      <p>
        Please use the navigation menu above to access different
        functionalities.
      </p>
    </div>
  );
};

export default Home;
