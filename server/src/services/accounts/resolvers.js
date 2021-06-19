const accounts = [
  {
    id: "1",
    email: "devchirp@mandiwise.com",
  },
];

const resolvers = {
  Account: {
    __resolveReference(ref, ctx, info) {
      return accounts.find((account) => account.id === ref.id);
    },
  },
  Query: {
    hello: () => {
      return "hello world";
    },
    viewer: () => {
      return accounts[0];
    },
  },
};

export default resolvers;
