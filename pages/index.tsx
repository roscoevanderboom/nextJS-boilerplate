import type { NextPage } from "next";
import Link from "next/link";
import PublicLayout from "../Layouts/PublicLayout";

const Home: NextPage = () => {
  return (
    <PublicLayout>
      <main>
      <h1 className="title">Landing page with public layout</h1>
        <Link passHref href="/dashboard">
          <a>Go to Dashboard</a>
        </Link>
      </main>
    </PublicLayout>
  );
};

export default Home;
