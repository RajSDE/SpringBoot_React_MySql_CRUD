import React, { useState } from "react";
import axios from "axios";
import "./Post.css";

const Post = () => {
  const [book, setEmployee] = useState({
    bookid: "",
    bookname: "",
    author: "",
    price: "",
  });

  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployee({ ...book, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/books", book);
      console.log("Data inserted:", response.data);
      setMessage("Data Inserted Successfully");
      // You can add further logic here like displaying a success message
    } catch (error) {
      console.error("Error inserting data:", error);
      // Handle error scenarios here
    }
  };

  return (
    <div className="container">
      <h2>Insert Records</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="e_id">Book ID</label>
          <input
            type="text"
            id="bookid"
            name="bookid"
            value={book.bookid}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="e_name">Book Name</label>
          <input
            type="text"
            id="bookname"
            name="bookname"
            value={book.bookname}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="e_sal">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={book.author}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="e_sal">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            value={book.price}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Insert </button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Post;
