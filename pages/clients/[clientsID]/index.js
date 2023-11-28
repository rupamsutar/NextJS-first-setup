import React from "react";
import { UseRouter, useRouter } from "next/router";

const Clients = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>The clients ID Page</h1>
    </div>
  );
};

export default Clients;
