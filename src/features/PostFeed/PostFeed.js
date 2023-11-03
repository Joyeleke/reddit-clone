import IndividualPost from "../../components/IndividualPost/IndividualPost";
import { useSelector, useDispatch } from "react-redux";
import { loadPosts, selectPosts, isLoading } from "./PostFeedSlice";
import { useEffect } from "react";

export default function Post() {
  const loading = useSelector(isLoading);
  const posts = useSelector(selectPosts);

  // consider adding a failure case

  if (loading) {
    return <p>isLoading...</p>;
  }

  return (
    <section>
      {posts.map((post, index) => (
        <IndividualPost key={index} post={post.data} />
      ))}
    </section>
  );
}
