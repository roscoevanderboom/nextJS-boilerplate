import { JSON_PLACEHOLDER } from "../constants/fetchURL";
import { useStore } from "../context";
import Head from "next/head";
import Header from "../components/Header";
import PostsList from "../components/PostsList";

export default function Index({ posts }) {
  const {state} = useStore();

  console.log(state);
  return (
    <>
      <Head>
        <meta name="keywords" content="Boilerplate" />
        <title>JSON Placeholder posts</title>
      </Head>
      <Header text="JSON Placeholder posts" />
      <PostsList posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(JSON_PLACEHOLDER);
  const posts = await res.json();

  return {
    props: { posts },
  };
}
