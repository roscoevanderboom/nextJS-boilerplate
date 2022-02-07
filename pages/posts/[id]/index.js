// import { useRouter } from "next/router";
import { JSON_PLACEHOLDER } from "../../../constants/fetchURL";
import Header from "../../../components/Header";
import Link from "next/link";
import styles from "../../../styles/PostPage.module.css";

const PostPage = ({ post }) => {
  //   const router = useRouter();
  //   const { id } = router.query;
  return (
    <div className={styles.wrapper}>
      <article className={styles.content}>
        <Header text={post.title} />
        <hr className={styles.hr} />
        <p>{post.body}</p>
        <hr className={styles.hr} />
        <Link href="/">
          <a className={styles.link}>Go Back</a>
        </Link>
      </article>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(`${JSON_PLACEHOLDER}/${context.params.id}`);
  const post = await res.json();
  return { props: { post } };
};

export default PostPage;
