import { render, waitFor, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import Paginator from "./Paginator";
import { getPageRange } from "./utils";

// Note: numOfPages starts from 0. So if numOfPages = 5, there are 6 pages

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

  await waitFor(() => screen.getByAltText(`Next Page`));
  act(() => {
    screen.getByAltText("Next Page").click();
  });

  expect(currentPage).toBe(1);
});

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

  console.log(currentPage);
  expect(currentPage).toBe(1);
});

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

  console.log(getPageRange(currentPage, numOfPages));

  for (let i = 7; i <= 11; i++) {
    screen.getByText(i);
  }
});
