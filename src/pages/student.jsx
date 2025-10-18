import React, { useState } from "react";
import { Button } from "../resources/Boiler";

function Student() {
  // Store classes and input value in state
  const [className, setClassName] = useState("");
  const [classList, setClassList] = useState([]);

  // Add a class to the list
  const addClass = () => {
    if (className.trim() === "") return;
    setClassList([...classList, className]);
    setClassName("");
  };

  // Optional: remove a class
  const removeClass = (index) => {
    setClassList(classList.filter((_, i) => i !== index));
  };

  return (
    <div className="student-page py-4 fade-in-up">
      <h1>Student Dashboard</h1>
      <div className="add-class">
        <input
          class="searchinput search"
          type="text"
          placeholder="Enter class name"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        />
        <Button text="Add Class" classes="button-1 btn btn-primary btn-lg" onClick={addClass} />
      </div>

      <h2>Your Classes</h2>
      {classList.length === 0 ? (
        <p>No classes added yet.</p>
      ) : (
        <ul>
          {classList.map((cls, index) => (
            <li key={index}>
              {cls}{" "}
              <button onClick={() => removeClass(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Student;
