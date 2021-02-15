import React, { useState } from 'react';

import Header from './Components/Header'
import './App.css'
import backgroundImage from "./Assets/backGround.jpg"

function App() {
  const[ projects, setProjects ] = useState(['Desenvolver-me', 'Front-Endew']);

  function handleAddProject() {
    setProjects([... projects, `Novo projeto ${Date.now()}`]);
    console.log(setProjects)
  }


  return (
    <>
      <Header title="HomePage"/>
      <Header title="Projects">
        <img widht={800} src={backgroundImage} alt="Corujinha foto de fundo"/>
        <ul>
         {projects.map(project=> <li key={project}>{project}</li>)}
        </ul>
        <button type="button" onClick={handleAddProject}>Adiciona Projeto</button>
      </Header>
    </>
  )
}

export default App;