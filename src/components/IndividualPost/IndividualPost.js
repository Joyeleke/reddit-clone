import styles from "./IndividualPost.module.css";
import PostLikeCount from "../PostLikeCount/PostLikeCount";
import ExtraInfo from "../ExtraInfo/ExtraInfo";
import PostTitleBar from "../PostTitleBar/PostTitleBar";
import PostContent from "../PostContent/PostContent";

export default function IndividualPost({ post }) {
  return (
    // should i pass down
    <section className={`${styles.maindiv} shadow`}>
      <PostLikeCount postCount={post.ups} />
      <div>
      <PostTitleBar title={post.title}/>
      <PostContent content={post.selftext}/>
      <ExtraInfo
          postOwner={post.author}
          time={post.created_utc}
          commentCount={post.num_comments}
        />
      </div>
    </section>
  );
}
