import React from "react";
import { render } from "tests/utils/rtl";
import Field from "components/components-original/Forms/Field";
import { Label, Input } from "components/components-original/Forms";

describe("components/components-original/Forms/Field", () => {
  it("should render correctly", () => {
    const { getByText } = render(
      <Field>
        <Label htmlFor="name">Name</Label>
        <Input id="name" />
      </Field>
    );
    expect(getByText("Name")).toBeTruthy();
  });
});
