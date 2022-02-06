import Navbar from "../Navbar";
import styles from "../../styles/PublicLayout.module.css";

const PublicLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default PublicLayout;
