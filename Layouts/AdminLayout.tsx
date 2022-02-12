import type { NextPage } from "next";
import { useStore } from "../context";
import { AdminNav } from "../components/Nav/Topnav";
import layoutStyles from "../styles/jss/layoutStyles";
import { useEffect } from "react";

// // This gets called on every request
// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://.../data`);
//   const data = await res.json();

//   // Pass data to the page via props
//   return { props: { data } };
// }

const AdminLayout: NextPage = ({ children }) => {
  const { user, router } = useStore();
  const classes = layoutStyles();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);

  return (
    user && (
      <>
        <AdminNav />
        <main className={classes.main}>{children}</main>
      </>
    )
  );
};

export default AdminLayout;
