// import React from "react";
// import { mount } from "enzyme";
// import Input from "./";

// const defaultValue = "I am some text";

// const handleChange = jest.fn();

// describe("components/components-original/Forms/Input", () => {
//   describe("Text", () => {
//     let wrapper;

//     beforeEach(() => {
//       wrapper = mount(
//         <Input id="text" onChange={handleChange} defaultValue={defaultValue} />
//       );
//     });

//     it("should render correctly", () => {
//       expect(wrapper).toMatchSnapshot();
//     });

//     it("should render a text input by default", () => {
//       expect(wrapper.find("input").getElement().props.type).toEqual("text");
//     });

//     it("should pass `defaultValue` prop to component when type=text", () => {
//       expect(wrapper.find("input").getElement().props.defaultValue).toEqual(
//         defaultValue
//       );
//     });

//     it("should call onChange with appropriate args", () => {
//       wrapper.simulate("change", { target: { value: "hello" } });
//       expect(handleChange).toHaveBeenCalledWith({
//         name: "text",
//         value: "hello",
//       });
//     });
//   });

//   describe("Checkbox", () => {
//     let wrapper;

//     beforeEach(() => {
//       wrapper = mount(
//         <Input
//           id="my-checkbox"
//           type="checkbox"
//           onChange={handleChange}
//           defaultChecked={false}
//         />
//       );
//     });

//     it("should render a checkbox", () => {
//       expect(wrapper.find("input").getElement().props.type).toEqual("checkbox");
//     });

//     it("should pass `defaultChecked` prop to component", () => {
//       wrapper = mount(<Input type="checkbox" defaultChecked />);
//       expect(wrapper.find("input").getElement().props.defaultChecked).toEqual(
//         true
//       );
//       wrapper = mount(<Input type="checkbox" defaultChecked={false} />);
//       expect(wrapper.find("input").getElement().props.defaultChecked).toEqual(
//         false
//       );
//     });

//     it("should call onChange with appropriate args", () => {
//       wrapper.simulate("change", {
//         target: { type: "checkbox", checked: true },
//       });
//       expect(handleChange).toHaveBeenCalledWith(
//         expect.objectContaining({
//           name: "my-checkbox",
//           value: true,
//         })
//       );
//     });
//   });

//   describe("Radio", () => {
//     let wrapper;
//     let inputElement;

//     beforeEach(() => {
//       wrapper = mount(
//         <Input
//           id="my-radio-button"
//           variant="radioBox"
//           type="radio"
//           onChange={handleChange}
//           defaultChecked={false}
//         />
//       );
//     });

//     it("should render a radio button", () => {
//       inputElement = wrapper.find("input").getElement();
//       expect(inputElement.props.type).toEqual("radio");
//     });

//     it("should pass 'defaultChecked' prop to component", () => {
//       wrapper = mount(<Input type="radio" defaultChecked />);
//       inputElement = wrapper.find("input").getElement();
//       expect(inputElement.props.defaultChecked).toEqual(true);

//       wrapper = mount(<Input type="radio" defaultChecked={false} />);
//       inputElement = wrapper.find("input").getElement();
//       expect(inputElement.props.defaultChecked).toEqual(false);
//     });

//     it("should call onChange with appropriate args", () => {
//       wrapper.simulate("change", {
//         target: { type: "radio", value: true },
//       });
//       expect(handleChange).toHaveBeenCalledWith(
//         expect.objectContaining({
//           name: "my-radio-button",
//           value: true,
//         })
//       );
//     });
//   });
// });
