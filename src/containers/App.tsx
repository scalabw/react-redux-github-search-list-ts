import React from "react";
import Input from "../components/Input";
import { History, LocationState } from "history";

interface IProps {
  history: History<LocationState>
}

const App = (props: IProps) => {

  const onSearch = (input: string) => props.history.push(`/${input}`)

  return <Input value={""} onSearch={onSearch} />
}

export default App;