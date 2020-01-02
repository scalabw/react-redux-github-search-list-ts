import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Button, ButtonGroup } from "shards-react"
import Loader from 'react-loader-spinner'

import { IRepositorie } from '../constants/userConstants';

interface IProps {
  repositories: IRepositorie[],
  loading: boolean
}

const todosPerPage = 5

const UserRepositories = (props: IProps) => {
  const { repositories, loading } = props;
  const [currentPage, setCurrentPage] = useState(1)

  // Logic for displaying todos
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentRepositories = Object.keys(repositories).length > 0 ? repositories.slice(indexOfFirstTodo, indexOfLastTodo) : [];

  // Logic for displaying page numbers
  const pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(repositories.length / todosPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id))
  }

  const renderRepositories = currentRepositories.map((respository: IRepositorie, index: number) =>
    <Card key={respository.id} className="mt-2">
      <CardHeader>
        <h2>{respository.name}</h2>
      </CardHeader>
      <CardBody>
        {respository.description && <h5> Description </h5>}
        <p>{respository.description}</p>
      </CardBody>
    </Card>)

  const renderPageNumbers = pageNumbers.map(number => {
    return (
      <Button className="mr-2 PaginationButton"
        key={number}
        id={number.toString()}
        onClick={handleClick}
        theme="secondary"
      >
        {number}
      </Button>
    );
  });

  console.log(repositories)
  return <>
    {loading ?
      <Loader type="MutatingDots" color="#000000"
        height={100}
        width={100} /> : Object.keys(repositories).length === 0 || repositories.length === 0 ?
        <Card> <CardHeader>
          No Public Repositories Found
          </CardHeader></Card > :
        <Card>
          <CardBody>
            {renderRepositories}
            <div className="CenterItem mt-2">
              {renderPageNumbers}
            </div>
          </CardBody>
        </Card>
    }
  </>
}
export default UserRepositories;