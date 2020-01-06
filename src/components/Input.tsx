import React, { useState } from "react";
import { FormInput, Button } from "shards-react";

interface IInputProps {
  value: string;
  onSearch: (input: string) => void;
}

const Input = ({ value, onSearch }: IInputProps) => {
  const [searchValue, setSearchValue] = useState(value);

  const handleSearch = () => {
    onSearch(searchValue);
  };

  return (
    <div className="CenterItem">
      <h2>Type a Username</h2>

      <FormInput
        className="Inline w-25 pt-0 mr-2"
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        onKeyPress={e => (e.key === "Enter" ? handleSearch() : null)}
      />
      <Button
        onClick={() => handleSearch()}
        theme="secondary"
        className="Inline "
      >
        Search
      </Button>
    </div>
  );
};

export default Input;
