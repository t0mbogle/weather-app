import { render } from "@testing-library/react";
import React from "react";
import App from "../components/App";

describe("App", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });
});

// Make sure to update this test file whenever '<App />' gets updated
