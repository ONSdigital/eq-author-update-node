import { useSubscription } from "@apollo/react-hooks";
import VALIDATIONS_SUBSCRIPTION from "graphql/validationsSubscription.graphql";

const useValidationsSubscription = ({ id }) =>
  useSubscription(VALIDATIONS_SUBSCRIPTION, { variables: { id } });

export default useValidationsSubscription;
