import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Point {
    id: ID!
    latitude: Float!
    longitude: Float!
    status: String!   # working / broken
    networkType: String! # 2G / 3G / 4G
  }

  type Query {
    points: [Point!]!
  }
`;
