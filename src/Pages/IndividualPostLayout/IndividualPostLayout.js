import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectPosts } from "../../features/PostFeed/PostFeedSlice";
import IndividualPost from "../../components/IndividualPost/IndividualPost";

export default function IndividualPostLayout() {
  const { id } = useParams();
  const posts = useSelector(selectPosts);
  
  const post = posts[id];

  return (
    <>
      <IndividualPost post={post.data}/>
      <Link to="/">
        <p>Main Page: </p>
      </Link>
    </>
  );
}
