import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Fetch.css'

const Fetch = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/book');
        setEmployees(response.data); // Assuming the response data is an array of employee objects
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="employee-table-container">
      <h2>All Book Records</h2>
      <table>
        <thead>
          <tr>
            <th>BookID</th>
            <th>Book Name</th>
            <th>Author</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.bookid}</td>
              <td>{employee.bookname}</td>
              <td>{employee.author}</td>
              <td>{employee.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Fetch;
