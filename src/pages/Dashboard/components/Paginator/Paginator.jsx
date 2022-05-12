import { useMemo } from "react";
import {
  PaginationButton,
  ActivePaginationButton,
  PaginationNavigationButton,
  PaginationNavigationButtonImage,
} from "./index.styled";
import ChevronLeft from "../../../../assets/svg/chevron-left.svg";
import ChevronRight from "../../../../assets/svg/chevron-right.svg";
import { getPageRange } from "./utils";

// Note: numOfPages starts from 0. So if numOfPages = 5, there are 6 pages

const Paginator = ({ currentPage, numOfPages, handlePageChange }) => {
  const values = useMemo(() => {
    return getPageRange(currentPage, numOfPages);
  }, [currentPage, numOfPages]);

  return (
    <>
      <PaginationNavigationButton
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 0}
      >
        <PaginationNavigationButtonImage
          src={ChevronLeft}
          alt="Previous Page"
        />
      </PaginationNavigationButton>
      {values.map((value, index) => {
        if (value !== currentPage)
          return (
            <PaginationButton
              onClick={() => handlePageChange(value)}
              key={index}
            >
              {value + 1}
            </PaginationButton>
          );
        else
          return (
            <ActivePaginationButton
              onClick={() => handlePageChange(value)}
              key={index}
            >
              {value + 1}
            </ActivePaginationButton>
          );
      })}
      <PaginationNavigationButton
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === numOfPages}
      >
        <PaginationNavigationButtonImage src={ChevronRight} alt="Next Page" />
      </PaginationNavigationButton>
    </>
  );
};

export default Paginator;
