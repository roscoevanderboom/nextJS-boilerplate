import styles from "../../styles/Home.module.css";

const PublicLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default PublicLayout;
