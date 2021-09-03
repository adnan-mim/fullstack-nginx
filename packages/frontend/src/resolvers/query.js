import gql from "graphql-tag";

export const USERIP = gql`
  query USERIP {
    userIp {
      ip
    }
  }
`;
