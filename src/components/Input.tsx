import React, { useState } from "react";

interface IInputProps {
  value: string,
  onSearch: (input: string) => void
}

const Input = ({ value, onSearch }: IInputProps) => {
  const [searchValue, setSearchValue] = useState(value);

  const handleSearch = () => {
    onSearch(searchValue)
  }
  return (
    <>
      <h2>Type a Username or a repository</h2>
      <input
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        onKeyPress={(e) =>
          e.key === "Enter" ? handleSearch() : null
        }
      />
      <button onClick={() => handleSearch()}> Search</button>
    </>
  )
}

export default Input;