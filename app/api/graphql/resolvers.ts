const resolvers = {
  Query: {
    users: async (
      _: any,
      __: any,
      context: { dataSources: { users: { getAllUsers: () => any } } },
    ) => {
      try {
        return await context.dataSources.users.getAllUsers();
      } catch (error) {
        throw new Error('Failed to fetch users');
      }
    },
    games: async (
      _: any,
      __: any,
      context: { dataSources: { games: { getAllGames: () => any } } },
    ) => {
      try {
        return await context.dataSources.games.getAllGames();
      } catch (error) {
        throw new Error('Failed to fetch games');
      }
    },
  },
  Mutation: {
    createUser: async (_: any, { input }: any, context: any) => {
      try {
        const newUser = await context.dataSources.users.createUser({
          input,
        });
        return newUser;
      } catch (error) {
        throw new Error('Failed to create user');
      }
    },
    createGame: async (_: any, { input }: any, context: any) => {
      try {
        const newGame = await context.dataSources.games.createGame({
          input,
        });
        return newGame;
      } catch (error) {
        throw new Error('Failed to create game');
      }
    },
    updateUser: async (_: any, { input }: any, context: any) => {
      try {
        return await context.dataSources.users.updateUser({ input });
      } catch (error) {
        throw new Error('Failed to update user');
      }
    },
    updateGame: async (_: any, { input }: any, context: any) => {
      try {
        return await context.dataSources.games.updateGame({ input });
      } catch (error) {
        throw new Error('Failed to update Game');
      }
    },
    deleteUser: async (_: any, { id }: any, context: any) => {
      try {
        return await context.dataSources.users.deleteUser({ id });
      } catch (error) {
        throw new Error('Failed to delete user');
      }
    },
    deleteGame: async (_: any, { id }: any, context: any) => {
      try {
        return await context.dataSources.games.deleteGame({ id });
      } catch (error) {
        throw new Error('Failed to delete game');
      }
    },
  },
};

export default resolvers;
