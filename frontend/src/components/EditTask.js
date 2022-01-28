import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditTask = () => {
  const [data, setData] = useState({ task_title: "" });

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/tasks/${id}`)
      .then((res) => {
        console.log(res.data.data);
        setData({
          task_title: res.data.data.task_title,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleInput = (e) => {
    e.preventDefault();

    if (!data.task_title) {
      alert("PLease Enter Task Title");
    } else {
      axios
        .patch(`http://localhost:5000/api/v1/tasks/${id}`, {
          task_title: data.task_title,
        })
        .then((res) => {
          console.log(`Updated Successfully`);
        })
        .catch((error) => {
          console.log(error);
        });
      setData({ task_title: "" });
      navigate("/");
    }
  };

  const onChangeTask = (e) => {
    setData({ task_title: e.target.value });
  };

  console.log(id);

  return (
    <>
      <Form>
        {
          <Input
            type="text"
            placeholder="Add Task"
            value={data.task_title}
            name="task-
          title"
            onChange={onChangeTask}
          />
        }

        <Button onClick={handleInput}>Edit Task</Button>
      </Form>
    </>
  );
};

export default EditTask;

const Form = styled.form`
  margin-top: 32px;
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
  font-family: "poppins", sans-serif;
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
  font-family: "poppins", sans-serif;
  text-transform: capitalize;
`;
