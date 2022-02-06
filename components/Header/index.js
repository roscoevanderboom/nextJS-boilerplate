import styles from "../../styles/Header.module.css";

const Header = ({ text }) => {
  return (
    <div>
      <h1 className={styles.title}>{text}</h1>
    </div>
  );
};

export default Header;
