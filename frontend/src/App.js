import React from 'react';
import styled from 'styled-components';
import AddTask from './components/AddTask';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditTask from './components/EditTask';
import TaskList from './components/TaskList';
import { GlobalStyle } from './GlobalStyle';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <AppContainer>
        <Heading>What's Your Task Today? </Heading>
        <AddTask />
        <Routes>
          <Route path="/tasks/:id" element={<EditTask />}></Route>
        </Routes>
        <TaskList />
      </AppContainer>
    </Router>
  );
};

export default App;


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  max-width: 520px;
  min-height: 600px;
  background: #161a2b;
  text-align: center;
  margin: 128px auto;
  border-radius: 10px;
  font-family: 'poppins',sans-serif;
  padding-bottom: 32px;

  
  @media screen and (max-width: 375px) {
    max-width: 375px;
    margin: auto;
    padding: 20px 0 ;
  }

`;

const Heading = styled.p`
color: white;
font-family: 'poppins',sans-serif;
font-size: 2rem;
font-weight: bold;

@media screen and (max-width:375px){
  font-size: 0.6rem;
}

`
