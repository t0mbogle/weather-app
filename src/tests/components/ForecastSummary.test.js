import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
  const validProps = {
    date: 1111111,
    description: "Stub description",
    icon: "stubIcon",
    temperature: {
      min: 12,
      max: 22,
    },
  };

  it("renders correctly", () => {
    // asFagment returns a fragment of a rendered component,
    // stub props then get passed in
    const { asFragment } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
      />
    );
    // toMatchSnapshot ensures that a value matches the most recent snapshot.
    // Takes a snapshot of the UI and compares it to the test.
    expect(asFragment()).toMatchSnapshot();
  });
});
