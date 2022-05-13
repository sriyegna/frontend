const DEFAULT_PAGE_RANGE_SIZE = 5;

// Helper util to help show a valid page range given a range limit of DEFAULT_PAGE_RANGE_SIZE
export const getPageRange = (currentPage, numOfPages) => {
  const size =
    numOfPages < DEFAULT_PAGE_RANGE_SIZE ? numOfPages : DEFAULT_PAGE_RANGE_SIZE;
  const result = [];
  if (currentPage < 3) {
    // We load the left side, so the active page will be to the left of the center
    for (let i = 0; i < size; i++) {
      result.push(i);
    }
  } else if (currentPage >= 3 && currentPage < numOfPages - 2) {
    // We load the middle, so the active page will be centered
    for (let i = currentPage; i < currentPage + size; i++) {
      result.push(i - 2);
    }
  } else if (currentPage >= numOfPages - 2) {
    // We load the right side, so the active page will be to the right of the center
    for (let i = numOfPages - size + 1; i <= numOfPages; i++) {
      result.push(i);
    }
  }
  return result;
};
