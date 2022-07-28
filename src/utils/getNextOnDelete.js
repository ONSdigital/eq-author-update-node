import { findIndex } from "lodash";

const getNextOnDelete = (items, id) => {
  const index = findIndex(items, { id });
  let nextIndex;

  if (index === 0) {
    nextIndex = items.length > 1 ? 1 : 0;
  } else {
    nextIndex = index - 1;
  }

  return items[nextIndex];
};

export default getNextOnDelete;
