import { useState, useEffect } from 'react';
import Banner from './components/Banner/index.tsx';
import Form from './components/Form/index.tsx';
import Team from './components/Team/index.tsx';
import styled from 'styled-components';
import Rodape from './components/Rodape/index.tsx';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const savedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(savedEmployees);
  }, []);

  const times = [
    { nome: 'FullStack', corPrimaria: '#00FF94', corSecundaria: 'rgba(0, 255, 148, 0.4)' },
    { nome: 'DevOps', corPrimaria: '#2A3B59', corSecundaria: 'rgba(42, 59, 89, 0.4)' },
    { nome: 'FrontEnd', corPrimaria: '#E54E39', corSecundaria: 'rgba(229, 78, 57, 0.4)' },
    { nome: 'BackEnd', corPrimaria: '#FBB453', corSecundaria: 'rgba(251, 180, 83, 0.4)' },
    { nome: 'Mobile', corPrimaria: '#9BBA3B', corSecundaria: 'rgba(155, 186, 59, 0.4)' },
    { nome: 'Security', corPrimaria: '#01BABD', corSecundaria: 'rgba(1, 186, 189, 0.4)' },
    { nome: 'Design', corPrimaria: '#48006A', corSecundaria: 'rgba(72, 0, 106, 0.4)' }
  ];

  const addNewEmployee = (colaborador) => {
    const updatedEmployees = [...employees, colaborador];
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  const removeEmployee = (nome) => {
    const updatedEmployees = employees.filter(employee => employee.nome !== nome);
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  return (
    <div className="App">
      <Banner />
      <Form times={times.map(time => time.nome)} registerEmployee={addNewEmployee} />
      {times.map(time => (
        <Team 
          key={time.nome} 
          nome={time.nome} 
          corPrimaria={time.corPrimaria} 
          corSecundaria={time.corSecundaria}
          colaboradores={employees.filter(colaborador => colaborador.time === time.nome)}
          onDelete={removeEmployee}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
