import Link from "next/link";
import styles from "../../styles/PostItem.module.css";
const Post = ({ post }) => {
  return (
    <Link href="/posts/[id]" as={`/posts/${post.id}`}>
      <li className={styles.card}>
        <h3>{post.title}</h3>
      </li>
    </Link>
  );
};

export default Post;
