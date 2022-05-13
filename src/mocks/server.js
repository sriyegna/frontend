import { setupServer } from "msw/node";
import { handlers } from "./handlers";

// Setup mock react testing-library server to intercept REST requests with handlers
export const server = setupServer(...handlers);
