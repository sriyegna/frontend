/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-unresolved */
import { render, waitFor, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import Paginator from "./Paginator";

// Note: numOfPages starts from 0. So if numOfPages = 5, there are 6 pages

/**
 * Start at index 0 (which is really page #1)
 * Click the next button to go to index 1 (page #2)
 * Verify that paginator set the updated page
 */
test("Go forward a page", async () => {
  let currentPage = 0;
  let numOfPages = 5;
  const setCurrentPage = (page) => {
    currentPage = page;
  };

  render(
    <Paginator
      currentPage={currentPage}
      numOfPages={numOfPages}
      handlePageChange={setCurrentPage}
    />
  );

  await waitFor(() => screen.getByAltText("Next Page"));
  act(() => {
    screen.getByAltText("Next Page").click();
  });

  expect(currentPage).toBe(1);
});

/**
 * Start at index 2 (which is really page #3)
 * Click the previous button to go to index 1 (page #2)
 * Verify that paginator set the updated page
 */
test("Go back a page", async () => {
  let currentPage = 2;
  let numOfPages = 5;
  const setCurrentPage = (page) => {
    currentPage = page;
  };

  render(
    <Paginator
      currentPage={currentPage}
      numOfPages={numOfPages}
      handlePageChange={setCurrentPage}
    />
  );

  act(() => {
    screen.getByAltText("Previous Page").click();
  });

  expect(currentPage).toBe(1);
});

// Load index 0 (page 1), so the visible page options should be numbers 1, 2, 3, 4, 5
test("Load page options 1-5 if current page is 0 and numOfPages is 10", async () => {
  let currentPage = 0;
  let numOfPages = 10;
  const setCurrentPage = (page) => {
    currentPage = page;
  };

  render(
    <Paginator
      currentPage={currentPage}
      numOfPages={numOfPages}
      handlePageChange={setCurrentPage}
    />
  );

  for (let i = 1; i <= 4; i++) {
    screen.getByText(i);
  }
});

// Load index 2 (page 3), so the visible page options should be numbers 1, 2, 3, 4, 5
test("Load page options 1-5 if current page is 2 and numOfPages is 10", async () => {
  let currentPage = 2;
  let numOfPages = 10;
  const setCurrentPage = (page) => {
    currentPage = page;
  };

  render(
    <Paginator
      currentPage={currentPage}
      numOfPages={numOfPages}
      handlePageChange={setCurrentPage}
    />
  );

  for (let i = 1; i <= 5; i++) {
    screen.getByText(i);
  }
});

// Load index 3 (page 4), so the visible page options should be numbers 2, 3, 4, 5, 6
test("Load page options 2-6 if current page is 3 and numOfPages is 10", async () => {
  let currentPage = 3;
  let numOfPages = 10;
  const setCurrentPage = (page) => {
    currentPage = page;
  };

  render(
    <Paginator
      currentPage={currentPage}
      numOfPages={numOfPages}
      handlePageChange={setCurrentPage}
    />
  );

  for (let i = 2; i <= 6; i++) {
    screen.getByText(i);
  }
});

// Load index 9 (page 10), so the visible page options should be numbers 6, 7, 8, 9, 10
test("Load page options 6-10 if current page is 9 and numOfPages is 10", async () => {
  let currentPage = 9;
  let numOfPages = 10;
  const setCurrentPage = (page) => {
    currentPage = page;
  };

  render(
    <Paginator
      currentPage={currentPage}
      numOfPages={numOfPages}
      handlePageChange={setCurrentPage}
    />
  );

  for (let i = 7; i <= 11; i++) {
    screen.getByText(i);
  }
});
