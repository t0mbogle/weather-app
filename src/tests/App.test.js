import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders learn react link", () => {
  // eslint-disable-next-line react/react-in-jsx-scope
  render(<App />);
  const linkElement = screen.getByText(/Weather App/i);
  expect(linkElement).toBeInTheDocument();
});
