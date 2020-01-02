import React, { useState } from "react";
import { FormInput, Container, Row, Col, Button } from "shards-react";

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
    <div className="CenterItem">
      <h2 >Type a Username</h2>
      <Container >
        <Row >
          <Col >
            <FormInput
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              onKeyPress={(e) =>
                e.key === "Enter" ? handleSearch() : null
              }

            />
          </Col>
          <Col><Button onClick={() => handleSearch()} theme="secondary"> Search</Button></Col>
        </Row>
      </Container>

    </div>
  )
}

export default Input;