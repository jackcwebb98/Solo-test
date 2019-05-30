import React, { useState } from "react";
import Select from "react-select";
import List from './Components/List'
import PersonDetails from './Components/PersonDetails'

const stateOptions = [
  { value: "AL", label: "AL" },
  { value: "AK", label: "AK" },
  { value: "AZ", label: "AZ" },
  { value: "AR", label: "AR" },
  { value: "CA", label: "CA" },
  { value: "CO", label: "CO" },
  { value: "CT", label: "CT" },
  { value: "DE", label: "DE" },
  { value: "FL", label: "FL" },
  { value: "GA", label: "GA" },
  { value: "HI", label: "HI" },
  { value: "ID", label: "ID" },
  { value: "IL", label: "IL" },
  { value: "IN", label: "IN" },
  { value: "IA", label: "IA" },
  { value: "KS", label: "KS" },
  { value: "KY", label: "KY" },
  { value: "LA", label: "LA" },
  { value: "ME", label: "ME" },
  { value: "MD", label: "MD" },
  { value: "MA", label: "MA" },
  { value: "MI", label: "MI" },
  { value: "MN", label: "MN" },
  { value: "MS", label: "MS" },
  { value: "MO", label: "MO" },
  { value: "MT", label: "MT" },
  { value: "NE", label: "NE" },
  { value: "NV", label: "NV" },
  { value: "NH", label: "NH" },
  { value: "NJ", label: "NJ" },
  { value: "NM", label: "NM" },
  { value: "NY", label: "NY" },
  { value: "NC", label: "NC" },
  { value: "ND", label: "ND" },
  { value: "OH", label: "OH" },
  { value: "OK", label: "OK" },
  { value: "OR", label: "OR" },
  { value: "PA", label: "PA" },
  { value: "RI", label: "RI" },
  { value: "SC", label: "SC" },
  { value: "SD", label: "SD" },
  { value: "TN", label: "TN" },
  { value: "TX", label: "TX" },
  { value: "UT", label: "UT" },
  { value: "VA", label: "VA" },
  { value: "WA", label: "WA" },
  { value: "WV", label: "WV" },
  { value: "WI", label: "WI" },
  { value: "WY", label: "AL" }
];
const repOptions = [
  { value: "Representative", label: "Representative" },
  { value: "Senator", label: "Senator" }
];

function App() {
  const [stateSelect, setStateSelect] = useState("");
  const [repSen, setRepSen] = useState("none");
  const [selectedPerson, setSelectedPerson] = useState('')

  const handleStateInput = val => {
    setStateSelect(val.value);
  };
  const handleToggleInput = val => {
    setRepSen(val.value);
  };

  return (
    <>
      <h1>Who's My Representative</h1>
      <div>Select State</div>
      <Select options={stateOptions} onChange={handleStateInput} />
      <div>Select Representative/Senator</div>
      <Select options={repOptions} onChange={handleToggleInput} />
      <List state={stateSelect} repSen={repSen} setSelectedPerson={setSelectedPerson}/>
      <PersonDetails selectedPerson={selectedPerson}/>
    </>
  );
}

export default App;
