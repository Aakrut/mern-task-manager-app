import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const TaskList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/tasks`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const completeTask = (id) => {
    axios.patch(`http://localhost:5000/api/v1/tasks/${id}`, {
      completed: true,
    });
  };

  const deleteTask = (id) => {
    axios.delete(`http://localhost:5000/api/v1/tasks/${id}`);
  };

  return (
    <>
      {data.map((item) => {
        return (
          <>
            <Container>
              <Content
                key={item._id}
                className={item.completed ? "task-row complete" : "task-row"}
              >
                <Link to={`/tasks/${item._id}`}>{item.task_title}</Link>
                <Icons>
                  <RiCloseCircleLine
                    className="delete-icon"
                    onClick={() => deleteTask(item._id)}
                  />
                  <TiEdit
                    className="edit-icon"
                    onClick={() => completeTask(item._id)}
                  />
                </Icons>
              </Content>
            </Container>
          </>
        );
      })}
    </>
  );
};

export default TaskList;

const Container = styled.div`
  font-family: "poppins", sans-serif;
  .task-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4px auto;
    color: #fff;
    background: linear-gradient(
      90deg,
      rgba(255, 118, 20, 1) 0%,
      rgba(255, 84, 17, 1) 100%
    );

    padding: 16px;
    border-radius: 5px;
    width: 90%;
  }

  .task-row:nth-child(4n + 1) {
    background: linear-gradient(
      90deg,
      rgba(93, 12, 255, 1) 0%,
      rgba(155, 0, 250, 1) 100%
    );
  }

  .task-row:nth-child(4n + 2) {
    background: linear-gradient(
      90deg,
      rgba(255, 12, 241, 1) 0%,
      rgba(250, 0, 135, 1) 100%
    );
  }

  .task-row:nth-child(4n + 3) {
    background: linear-gradient(
      90deg,
      rgba(20, 159, 255, 1) 0%,
      rgba(17, 122, 255, 1) 100%
    );
  }

  .complete {
    text-decoration: line-through;
    opacity: 0.4;
  }
`;

const Content = styled.div`
  a {
    color: #fff;
    text-decoration: none;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  cursor: pointer;

  .delete-icon {
    margin-right: 5px;
    color: #fff;
  }

  .edit-icon {
    color: #fff;
  }
`;
