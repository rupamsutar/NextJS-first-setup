import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const clients = [
  {
    id: "Rupam",
    name: "Rupam Sutar",
  },
  {
    id: "Pranali",
    name: "Pranali Newaskar",
  },
];

const Clients = () => {
  const router = useRouter();
  const loadHandler = () => {
    router.push("clients/RupamsProject/NextJS-will-be-in-tech-stack");
  };

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[clientsID]",
                query: { clientsID: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={loadHandler}>Load a project</button>
    </div>
  );
};

export default Clients;
