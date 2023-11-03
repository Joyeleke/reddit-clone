import styles from "./IndividualPost.module.css";
import LikeCount from "../LikeCount/LikeCount";
import ExtraInfo from "../ExtraInfo/ExtraInfo";

export default function IndividualPost({post}) {
  return (
    // should i pass down
    <section className={`${styles.maindiv} shadow`}>
      <LikeCount postCount={post.ups}/>
      <article>
        <h2>{post.title}</h2>
        {/* <figure className={styles.imgContainer}>
          <img
            src={post.img}
            alt="temp"
            className={styles.contentImg}
          />
        </figure> */}
        {post.selftext}
        <hr />
        <ExtraInfo postOwner={post.author} time={post.created_utc} commentCount={post.num_comments}/>
      </article>
    </section>
  );
}
