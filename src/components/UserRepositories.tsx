import React, { useState } from "react";
import { Card, CardHeader, CardBody } from "shards-react";
import Loader from "react-loader-spinner";
import ForkLogo from "../images/fork-icon.png";
import { IRepository } from "../constants/userConstants";
import PageNumbers from "./PageNumbers";
import { todosPerPage } from "../constants/repositoriesConstants";

interface IProps {
  repositories: IRepository[];
  loading: boolean;
}

const UserRepositories = (props: IProps) => {
  const { repositories, loading } = props;
  const [currentPage, setCurrentPage] = useState(1);

  // Logic for displaying todos
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentRepositories =
    Object.keys(repositories).length > 0
      ? repositories.slice(indexOfFirstTodo, indexOfLastTodo)
      : [];

  const renderRepositories = currentRepositories.map(
    (respository: IRepository) => (
      <Card key={respository.id} className="mt-2">
        <CardHeader>
          <h2>{respository.name}</h2>
        </CardHeader>
        <CardBody>
          {respository.description && <h5> Description </h5>}
          <p>{respository.description}</p>
          {respository.language && <h5> Language </h5>}
          <p>{respository.language}</p>
          {
            <span className="Inline" role="img" aria-label="github-stars">
              ⭐: &nbsp;
            </span>
          }
          <p className="Inline mr-2">{respository.stargazers_count}</p>
          {<img className="Inline ForkLogo" src={ForkLogo} alt="forkIcon" />}
          <p className="Inline mr-2">&nbsp;:&nbsp;{respository.forks}</p>
        </CardBody>
      </Card>
    )
  );

  return (
    <>
      {loading ? (
        <Loader type="MutatingDots" color="#000000" height={100} width={100} />
      ) : Object.keys(repositories).length === 0 ||
        repositories.length === 0 ? (
        <Card>
          <CardHeader>No Public Repositories Found</CardHeader>
        </Card>
      ) : (
        <Card>
          <CardBody>
            {renderRepositories}
            <div className="CenterItem mt-2">
              <PageNumbers
                currentPage={currentPage}
                repositoriesNumber={repositories.length}
                handlePageNumberClick={event =>
                  setCurrentPage(Number(event.target.id))
                }
              />
            </div>
          </CardBody>
        </Card>
      )}
    </>
  );
};
export default UserRepositories;
