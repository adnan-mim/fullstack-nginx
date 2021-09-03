import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { USERIP } from "../resolvers/query";

const UserIp = () => {
  const { loading, error, data } = useQuery(USERIP);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  console.log({ data });

  return (
    <div className="ip">
      <h1>User Ip is: {data.userIp.ip}</h1>
    </div>
  );
};

export default UserIp;
