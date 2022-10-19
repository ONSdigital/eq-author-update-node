import React from "react";
import TextButton from "./";
import { render } from "tests/utils/rtl";

describe("components/components-original/TextButton", () => {
  it("renders", () => {
    expect(
      render(<TextButton>TextButton</TextButton>).asFragment()
    ).toMatchSnapshot();
  });
});
