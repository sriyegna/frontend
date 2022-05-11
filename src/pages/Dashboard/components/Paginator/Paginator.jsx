import { useEffect, useMemo } from 'react'
import { PaginationButton, ActivePaginationButton, PaginationNavigationButton, PaginationNavigationButtonImage } from  "./index.styled";
import ChevronLeft from '../../../../assets/svg/chevron-left.svg'
import ChevronRight from '../../../../assets/svg/chevron-right.svg'

const Paginator = ({currentPage, numOfPages, handlePageChange}) => {

  useEffect(() => {
    
    console.log(currentPage)
  }, [currentPage])

  const values = useMemo(() => {
    const result = []
    if (currentPage < 3) {
      for (let i = 0; i < 5; i++) {
        result.push(i)
      }
    }
    else if (currentPage >= 3 && currentPage < numOfPages - 2) {
      for (let i = currentPage; i < currentPage + 5; i++) {
        result.push(i - 2)
      }
    }
    else if (currentPage >= numOfPages - 2) {
      for (let i = numOfPages - 5 + 1; i <= numOfPages; i++) {
        result.push(i)
      }
    }
    return result;
  }, [currentPage, numOfPages])

  return (
    <>
        <PaginationNavigationButton onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 0}><PaginationNavigationButtonImage src={ChevronLeft} alt="Previous Page" /></PaginationNavigationButton>
        {values.map((value) => {
          if (value !== currentPage) return (<PaginationButton onClick={() => handlePageChange(value)}>{value + 1}</PaginationButton>)
          else return (<ActivePaginationButton onClick={() => handlePageChange(value)}>{value + 1}</ActivePaginationButton>)
        })}
        <PaginationNavigationButton onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === numOfPages}><PaginationNavigationButtonImage src={ChevronRight} alt="Next Page" /></PaginationNavigationButton>

    </>
  );
};

export default Paginator;
