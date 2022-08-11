import React from "react";
import { render } from "tests/utils/rtl";
import MainCanvas from "components/components-original/MainCanvas";

describe("MainCanvas", () => {
  it("should render", () => {
    const { asFragment } = render(<MainCanvas>Children</MainCanvas>);
    expect(asFragment()).toMatchSnapshot();
  });
});
