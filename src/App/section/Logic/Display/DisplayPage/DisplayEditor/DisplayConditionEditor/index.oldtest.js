// import React from "react";
// import { shallow } from "enzyme";

// import { RADIO } from "constants/answer-types";

// import BinaryExpressionEditor from "App/page/Logic/BinaryExpressionEditor";

// import DisplayConditionEditor from ".";

// jest.mock("@apollo/react-hooks", () => ({
//   useMutation: jest.fn(() => [jest.fn()]),
// }));

// describe("DisplayConditionEditor", () => {
//   let defaultProps;

//   beforeEach(() => {
//     defaultProps = {
//       sectionId: "1",
//       pageId: "1",
//       expressionGroup: { id: "expGrpId", operator: "AND", expressions: [] },
//       expressionGroupIndex: 0,
//       deleteSkipCondition: jest.fn(),
//       deleteSkipConditions: jest.fn(),
//     };
//   });

//   it("should render", () => {
//     const wrapper = shallow(<DisplayConditionEditor {...defaultProps} />);
//     expect(wrapper).toMatchSnapshot();
//   });

//   it("should pass down the correct prop when a second 'And' condition is invalid", () => {
//     defaultProps.expressionGroup.expressions = [
//       {
//         id: "2",
//         left: {
//           id: "binaryExpressionId",
//           type: RADIO,
//         },
//       },
//       {
//         id: "3",
//         left: {
//           id: "binaryExpressionId",
//           type: RADIO,
//         },
//       },
//     ];

//     const wrapper = shallow(<DisplayConditionEditor {...defaultProps} />);

//     expect(
//       wrapper.find(BinaryExpressionEditor).first().prop("canAddCondition")
//     ).toBe(true);

//     expect(
//       wrapper.find(BinaryExpressionEditor).last().prop("canAddCondition")
//     ).toBe(false);
//   });
// });
