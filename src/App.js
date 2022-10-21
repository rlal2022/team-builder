import React, { useState } from "react";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [team, setTeam] = useState([]);
  const [values, setValues] = useState({ name: "", email: "", role: "" });

  const onSubmit = () => {
    setTeam([values, ...team]);
    setValues({ name: "", email: "", role: "" });
  };

  const onChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };
  return (
    <div className="App">
      <h1>Team Builder</h1>
      <Form values={values} change={onChange} submit={onSubmit} />
      {team.map((team, id) => {
        return (
          <div key={id}>
            {team.name}, {team.email}, {team.role}
          </div>
        );
      })}
    </div>
  );
}

export default App;
