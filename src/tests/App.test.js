import { render, screen } from "@testing-library/react";
import App from "../components/App";
import forecast from "../data/forcast.json";

describe("App", () => {
  it("renders App component correctly", () => {
    render(<App location={forecast.location} />);
    const h1Element = screen.getByText(/Manchester, UK/i);

    expect(h1Element).toBeInTheDocument();
  });
});

// Make sure to update this test file whenever '<App />' gets updated
