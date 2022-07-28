import { useSubscription } from "@apollo/react-hooks";
import LOCK_SUBSCRIPTION from "graphql/lockStatusSubscription.graphql";

const useLockStatusSubscription = ({ id = null } = {}) =>
  useSubscription(LOCK_SUBSCRIPTION, { variables: { id } });

export default useLockStatusSubscription;
