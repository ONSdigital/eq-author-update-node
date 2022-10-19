import React from "react";
import { render } from "tests/utils/rtl";

import FadeTransition from "./";

describe("components/components-original/FadeTransition", () => {
  it("should render", () => {
    expect(
      render(
        <FadeTransition>
          <div>Content</div>
        </FadeTransition>
      ).asFragment()
    ).toMatchSnapshot();
  });
});
