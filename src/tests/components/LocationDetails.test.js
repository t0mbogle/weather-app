import React from "react";
import { render } from "@testing-library/react";
import LocationDetails from "../../components/LocationDetails";

describe("LocationDetails", () => {
  it("renders the correct city and location props", () => {
    // This renders the component so it can be tested on, using the 'getByText' jest query.
    const { getByText } = render(
      <LocationDetails city="Manchester" country="UK" />
    );
    // This tests the prop is rendered and is a h1 tag.
    expect(getByText("Manchester, UK")).toBeInstanceOf(HTMLHeadingElement);
  });
});
