import React from "react";
import { render } from "tests/utils/rtl";
import Dialog from "./";

describe("components/components-original/Dialog", () => {
  it("should render a dialog", () => {
    const { getByText } = render(
      <Dialog>
        <div>Dialog content</div>
      </Dialog>
    );
    expect(getByText("Dialog content")).toBeTruthy();
  });
});
