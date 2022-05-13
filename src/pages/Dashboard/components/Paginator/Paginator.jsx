/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-unresolved */
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

/**
 * @param {Object} props - Component properties
 * @param {Number} props.currentPage - Current active page
 * @param {Number} props.numOfPages - Maximum number of pages
 * Note: numOfPages starts from 0. So if numOfPages = 5, there are 6 pages
 * @param {Function} props.handlePageChange - Handler to set new currentPage number
 * @returns {ReactElement} Paginator React Component
 */
const Paginator = ({ currentPage, numOfPages, handlePageChange }) => {
  // Helper util to the pageRange to show based on currentPage and numOfPages
  const pageRange = useMemo(() => {
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
      {pageRange.map((page, index) => {
        if (page !== currentPage)
          return (
            <PaginationButton
              onClick={() => handlePageChange(page)}
              key={index}
            >
              {page + 1}
            </PaginationButton>
          );
        else
          return (
            <ActivePaginationButton
              onClick={() => handlePageChange(page)}
              key={index}
            >
              {page + 1}
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
