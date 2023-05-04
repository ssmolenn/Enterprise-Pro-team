import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders sidebar", () => {
  render(<App />);
  const sidebarElement = screen.getByRole("navigation");
  expect(sidebarElement).toBeInTheDocument();
});

test("renders topbar", () => {
  render(<App />);
  const topbarElement = screen.getByRole("banner");
  expect(topbarElement).toBeInTheDocument();
});

test("renders home page by default", () => {
  render(<App />);
  const homeElement = screen.getByText(/Welcome to the Home page/i);
  expect(homeElement).toBeInTheDocument();
});

test("renders login page when navigating to /login", () => {
  render(<App />);
  const loginLink = screen.getByRole("link", { name: /login/i });
  userEvent.click(loginLink);
  const loginElement = screen.getByText(/please enter your credentials/i);
  expect(loginElement).toBeInTheDocument();
});
