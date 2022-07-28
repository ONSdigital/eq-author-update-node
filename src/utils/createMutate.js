const createMutate = (client, mutation) => (options) =>
  client.mutate({
    mutation,
    ...options,
  });

export default createMutate;
