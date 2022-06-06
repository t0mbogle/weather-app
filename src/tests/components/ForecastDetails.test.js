import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 1111111,
    humidity: 80,
    temperature: {
      min: 8,
      max: 13,
    },
    wind: {
      speed: 60,
      direction: "ne",
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText } = render(<ForecastDetails forecast={validProps} />);

    expect(getByText("Thu Jan 01 1970")).toHaveClass("forecast-details_date");
    expect(getByText(/80/)).toHaveClass("forecast-details_humidity");
    expect(getByText("13˚C")).toHaveClass("forecast-details_temp");
    expect(getByText(/60/)).toHaveClass("forecast-details_wind");
  });
});
