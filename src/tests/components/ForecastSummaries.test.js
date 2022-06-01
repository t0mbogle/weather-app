import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("ForecastSummaries", () => {
  const validProps = [
    {
      date: 1111111,
      description: "Stub description 1",
      icon: "stubIcon1",
      temperature: {
        max: 22,
        min: 12,
      },
    },
    {
      date: 2222222,
      description: "Stub description 2",
      icon: "stubIcon2",
      temperature: {
        max: 27,
        min: 9,
      },
    },
  ];
  // The array above is passed into the ForecastSummaries component, and
  // compared using toMatchSnapshot().
  it("renders correctly", () => {
    const { asFragment } = render(<ForecastSummaries forecasts={validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });
  // Outer div has testid of "forecast-summary", as two objects were passed into the
  // ForecastSummaries component this is what is being tested.
  it("renders the correct number of ForecastSummary instances", () => {
    const { getAllByTestId } = render(
      <ForecastSummaries forecasts={validProps} />
    );

    expect(getAllByTestId("forecast-summary")).toHaveLength(2);
  });
});
