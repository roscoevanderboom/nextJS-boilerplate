import Post from "../Posts";

const PostsList = ({ posts }) => {
  return (
    <>
      <ul className="posts-list">
        {posts.map((post) => (
          <Post key={post.id.toString()} post={post} />
        ))}
      </ul>
      <style jsx>
        {`
          .posts-list {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center
          }
        `}
      </style>
    </>
  );
};

export default PostsList;
