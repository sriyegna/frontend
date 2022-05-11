import { useContext } from "react";
import ReactPaginate from "react-paginate";
import { HeroesContext } from "../../../../context/heroes";
import "./Paginator.css";

const Paginator = (props) => {
  const {
    state: { numOfPages },
    setCurrentPage,
  } = useContext(HeroesContext);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  return (
    <>
      {props.children}
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        marginPagesDisplayed={0}
        pageCount={numOfPages}
        previousLabel="<"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="paginatorEllipsisItem"
        breakLinkClassName="page-link"
        containerClassName="paginatorContainer"
        activeClassName="active"
      />
    </>
  );
};

export default Paginator;
