import React from "react";
import Input from "../components/Input";

const App = () => {
  const onSearch = (input: string) => {
    console.log(input)
  }

  return <><Input value={""} onSearch={onSearch} /></>
}
export default App;