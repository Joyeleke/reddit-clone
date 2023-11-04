import IndividualPost from "../../components/IndividualPost/IndividualPost";
import { useSelector } from "react-redux";
import { selectPosts, isLoading } from "./PostFeedSlice";

export default function Post() {
  const loading = useSelector(isLoading);
  const posts = useSelector(selectPosts);

  if (loading) {
    return <p>isLoading...</p>;
  }

  return (
    <section>
      {posts.map((post, index) => (
        <IndividualPost key={index} post={post.data} id={index}/>
      ))}
    </section>
  );
}

 // consider adding a failure case