import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <div className="">
        <h1>Home Page</h1>
      </div>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </>
  );
};

export default HomePage;
