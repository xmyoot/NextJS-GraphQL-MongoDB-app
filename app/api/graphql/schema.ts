const typeDefs = `#graphql
  type User {
    id: ID!
    first_name: String!
    last_name: String!
    email: String!
    age: Int!
    active: Boolean
  }
  type Game {
    id: ID!
    gameTitle: String!
    description: String
    price: Float
    discountCodes: [String]
    regions: [String]
    editions: [String]
    ratings: Float
    tags: [String]
    reviews: [String]
  }
  
  input NewUserInput {
    first_name: String!
    last_name: String!
    email: String!
    age: Int!
  }
  input NewGameInput {
    gameTitle: String!
    description: String
    price: Float
    discountCodes: [String]
    regions: [String]
    editions: [String]
    ratings: Float
    tags: [String]
    reviews: [String]
  }

  input UpdateUserInput {
    id: ID!
    first_name: String
    last_name: String
    email: String
    age: Int
    active: Boolean
  }

  input UpdateGameInput {
    id: ID!
    gameTitle: String
    description: String
    price: Float
    discountCodes: [String]
    regions: [String]
    editions: [String]
    ratings: Float
    tags: [String]
    reviews: [String]
  }

  type Query {
    users: [User]
    games: [Game]
  }

  type Mutation {
    createUser(input: NewUserInput!): User
    updateUser(input: UpdateUserInput!): User
    deleteUser(id: ID!): String
    createGame(input: NewGameInput!): Game
    updateGame(input: UpdateGameInput!): Game
    deleteGame(id: ID!): String
  }
`;
export default typeDefs;
