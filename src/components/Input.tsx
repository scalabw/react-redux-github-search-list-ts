import React from "react";

interface IInputProps {
  value: string,
  onChange: () => {}
}

const Input = (props: IInputProps) => {
  const { value, onChange } = props;
  return (
    <input value={value} onChange={onChange}></input>
  )
}