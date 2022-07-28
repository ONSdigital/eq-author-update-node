import MUTATION from "graphql/updateTheme.graphql";
import { useMutation } from "@apollo/react-hooks";

// TODO: This needs to be refactored to be defined as a function
// TODO (continued): Refactoring this causes an error with useMutation being used outside of a functional component
// TODO (continued): This code may need to be defined in the files it is used in
export default () => {
  const [updateTheme] = useMutation(MUTATION);
  return (input) => updateTheme({ variables: { input } });
};
