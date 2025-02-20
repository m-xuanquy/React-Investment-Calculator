import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Table from "./components/Table";

const initialValues = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 7,
  duration: 10,
};

function deriveDisplay(array) {
  return array.length === 0 ? false : true;
}

function App() {
  const [values, setValues] = useState(initialValues);
  const isDisplay = deriveDisplay(values);
  console.log(values);

  function handleReset() {
    setValues([]);
  }

  function handleCalculate() {
    setValues(initialValues);
  }

  function handleValueChange(name, value) {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }

  return (
    <>
      <Header />
      <UserInput
        onReset={handleReset}
        onCalculate={handleCalculate}
        values={values}
        onValueChange={handleValueChange}
      />
      <Table display={isDisplay} values={values} />
    </>
  );
}

export default App;