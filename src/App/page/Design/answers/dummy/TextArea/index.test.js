import React from "react";
import { render } from "tests/utils/rtl";
import TextArea from "./";

describe("components/components-original/Answers/Dummy/TextArea", () => {
  it("shoulder render", function () {
    expect(render(<TextArea />).asFragment()).toMatchSnapshot();
  });
});
