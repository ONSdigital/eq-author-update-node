import { find } from "lodash";
const findById = (collection, id) => find(collection, { id });

export default findById;
