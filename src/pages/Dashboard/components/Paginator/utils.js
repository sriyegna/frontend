const DEFAULT_PAGE_RANGE_SIZE = 5;

export const getPageRange = (currentPage, numOfPages) => {
  const size =
    numOfPages < DEFAULT_PAGE_RANGE_SIZE ? numOfPages : DEFAULT_PAGE_RANGE_SIZE;
  const result = [];
  if (currentPage < 3) {
    for (let i = 0; i < size; i++) {
      result.push(i);
    }
  } else if (currentPage >= 3 && currentPage < numOfPages - 2) {
    for (let i = currentPage; i < currentPage + size; i++) {
      result.push(i - 2);
    }
  } else if (currentPage >= numOfPages - 2) {
    for (let i = numOfPages - size + 1; i <= numOfPages; i++) {
      result.push(i);
    }
  }
  return result;
};
