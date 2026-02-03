import { useState } from 'react';
import EmployeeCard from './components/EmployeeCard';
import './App.css';

const sampleEmployee = {
  name: {
    first: "Charlie",
    last: "Thompson",
  },
  email: "charlie.thompson@example.com",
  picture: {
    medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
  },
};

function App() {
  const [employee, setEmployee] = useState(sampleEmployee);

  const getEmployee = () => {
    // Envoi de la requête à l'API
    fetch("http://localhost:3310/api/employees")
      .then((response) => response.json())
      .then((data) => {
        // On récupère le premier employé du tableau results
        console.log(data.results[0]);
        setEmployee(data.results[0]);
      })
      .catch((err) => console.error("Erreur lors de la récupération :", err));
  };

  return (
    <div className="App">
      <EmployeeCard employee={employee} />
      <button type="button" onClick={getEmployee}>Get employee</button>
    </div>
  );
}

export default App;