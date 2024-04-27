import React, { useState } from "react";
import axios from "axios";
import "./Delete.css";

const Delete = () => {
  const [bookId, setBookId] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    setBookId(event.target.value);
  };
  const handleDelete = () => {
    axios
      .delete("http://localhost:8080/book/" + bookId)
      .then((response) => {
        setMessage("Data deleted successfully");
        // Handle any other logic after successful deletion if needed
      })
      .catch((error) => {
        setMessage("Failed to delete record");
        // Handle error cases or show an error message to the user
      });
  };

  return (
    <div className="delete-container">
      <h2>Delete Record</h2>
      <label>
        Book ID:
        <input type="text" value={bookId} onChange={handleInputChange} />
      </label>
      <button onClick={handleDelete}>Delete</button>
      <p>{message}</p>
    </div>
  );
};

export default Delete;
