// import React from "react";
// import { shallow } from "enzyme";
// import MoveModal from "components/components-original/MoveModal";

// const createWrapper = (props = {}, render = shallow, children = undefined) => {
//   return render(<MoveModal {...props}>{children}</MoveModal>);
// };

// describe("components/components-original/MoveModal", () => {
//   let props;
//   let wrapper;
//   let children;

//   beforeEach(() => {
//     props = {
//       isOpen: true,
//       onClose: jest.fn(),
//       title: "Modal title",
//     };

//     children = <p>Modal content</p>;

//     wrapper = createWrapper(props, shallow, children);
//   });

//   it("should render", () => {
//     expect(wrapper).toMatchSnapshot();
//   });
// });
