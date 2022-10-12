import React from "react";
import { shallow } from "enzyme";

import RouteButton from "components/components-original/buttons/Button/RouteButton";

describe("components/components-original/Button/RouteButton", () => {
  it("should render", () => {
    expect(
      shallow(
        <RouteButton to="destination">
          <div>Content</div>
        </RouteButton>
      )
    ).toMatchSnapshot();
  });
});
