import React from "react";
import Link from "next/link";

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
    </div>
  );
};

export default Clients;
