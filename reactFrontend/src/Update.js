import React, { useState } from "react";
import axios from "axios";
import "./Update.css";

const Update = () => {
  const [bookId, setBookId] = useState("");
  const [bookName, setBookName] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookPrice, setBookPrice] = useState("");

  const [message, setMessage] = useState("");

  const handleUpdate = async () => {
    try {
      // Your API endpoint
      const apiUrl = "http://localhost:8080/books";

      // Payload to be sent
      const payload = {
        bookid: bookId,
        bookname: bookName,
        author: bookAuthor,
        price: bookPrice,
      };

      // Making a PUT request using Axios
      const response = await axios.put(apiUrl, payload);

      // Check response status
      if (response.status === 200) {
        // Handle success scenario, e.g., show a success message
        console.log("Data updated successfully!");
        setMessage("Data Updated Successfylly");
      }
    } catch (error) {
      // Handle error scenarios, e.g., show an error message
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className="container">
      <h2>Update Records</h2>
      <div>
        <label>
          Book ID
          <input
            type="text"
            value={bookId}
            onChange={(e) => setBookId(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Book Name
          <input
            type="text"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Author
          <input
            type="text"
            value={bookAuthor}
            onChange={(e) => setBookAuthor(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Price
          <input
            type="text"
            value={bookPrice}
            onChange={(e) => setBookPrice(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleUpdate}>Update Book</button>
      <p>{message}</p>
    </div>
  );
};

export default Update;
