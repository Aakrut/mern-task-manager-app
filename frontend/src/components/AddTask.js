import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const AddTask = () => {
  const [input, setInput] = useState("");

  const handldeInput = (e) => {
    e.preventDefault();

    if (!input) {
      alert("Please Enter the Task!");
    } else {
      axios
        .post("http://localhost:5000/api/v1/tasks", {
          task_title: input,
        })
        .then((res) => {})
        .catch((error) => {
          console.log(error);
        });
      setInput("");
    }
  };

  return (
    <>
      <Form>
        <Input
          type="text"
          placeholder="Add Task"
          value={input}
          name="task-
          title"
          onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={handldeInput}>Add Task</Button>
      </Form>
    </>
  );
};

export default AddTask;

const Form = styled.form`

  margin-bottom: 32px;
`;

const Input = styled.input`
  padding: 14px 32px 14px 16px;
  border-radius: 4px 0 0 4px;
  border: 2px solid white;
  outline: none;
  max-width: 320px;
  background: transparent;
  color: #fff;
  font-family: 'poppins',sans-serif;

`;

const Button = styled.button`
  padding: 16px;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  outline: none;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 220, 240, 5) 100%
  );
  color: black;
  font-weight: bold;
  font-family: 'poppins',sans-serif;
  text-transform: capitalize;
`;
