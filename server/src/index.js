const { ApolloServer, MockList } = require("apollo-server");
const typeDefs = require("./schema");

const mocks = {
  Query: () => ({
    tracksForHome: () => new MockList([6, 9]),
  }),
  Track: () => ({
    id: () => "track_" + Math.random(),
    title: () => "Astro Kitty, Space Explorer",
    author: () => {
      return {
        name: "Grumpy Cat",
        photo:
          "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
      };
    },
    thumbnail: () =>
      "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
    length: () => 1210,
    modulesCount: () => 6,
  }),
};

const server = new ApolloServer({ typeDefs, mocks });

// start apollo server
server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `);
});
