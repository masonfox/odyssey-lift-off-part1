const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Get the tracks array for the homepage grid"
    tracksForHome: [Track!]!
  }

  "A track is a group Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "The name of the track"
    title: String!
    "The author of the track"
    author: Author!
    "A URL to a thumbnail image for the track"
    thumbnail: String
    "The length of time in seconds that the track is"
    length: Int
    "The number of total modules within a track"
    modulesCount: Int
  }

  "Author of a complete Track or Module"
  type Author {
    id: ID!
    "The first and last name of the author"
    name: String!
    "A URL to a profile picture of the author"
    photo: String
  }
`;

module.exports = typeDefs;
