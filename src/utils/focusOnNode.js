const focusOnNode = (ref) => {
  if (ref && ref.current) {
    ref.current.focus();
  }
};

export default focusOnNode;
