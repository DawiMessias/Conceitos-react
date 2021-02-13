import React, { useState } from 'react';

import Header from './Components/Header'

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
        <ul>
         {projects.map(project=> <li key={project}>{project}</li>)}
        </ul>
        <button type="button" onClick={handleAddProject}>Adiciona Projeto</button>
      </Header>
    </>
  )
}

export default App;