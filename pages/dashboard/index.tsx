import type { NextPage } from "next";
import Link from "next/link";
import AdminLayout from "../../Layouts/AdminLayout";

const Dashboard: NextPage = () => {
  return (
    <AdminLayout>
      <main>
        <h1 className="title">Dashboard page with admin layout</h1>
        <Link passHref href="/">
          <a>Go home</a>
        </Link>
      </main>
    </AdminLayout>
  );
};

export default Dashboard;
