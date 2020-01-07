import React from "react";
import { Button } from "shards-react";
import { todosPerPage } from "../constants/repositoriesConstants";

interface IProps {
  currentPage: number;
  repositoriesNumber: number;
  handlePageNumberClick: (event) => void;
}

const PageNumbers = (props: IProps) => {
  const { currentPage, repositoriesNumber, handlePageNumberClick } = props;

  // Logic for displaying page numbers
  const pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(repositoriesNumber / todosPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {pageNumbers.length &&
        pageNumbers.map((number: number) => (
          <Button
            className="mr-2 mt-2 PaginationButton"
            key={number}
            id={number.toString()}
            onClick={handlePageNumberClick}
            theme={number === currentPage ? "dark" : "secondary"}
          >
            {number}
          </Button>
        ))}
    </>
  );
};

export default PageNumbers;
