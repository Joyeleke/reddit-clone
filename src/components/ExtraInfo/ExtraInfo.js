import CommentBoxIcon from "./chat-box.png";
import styles from "./ExtraInfo.module.css"

export default function ExtraInfo({postOwner, time, commentCount, postOwnerAvatar}) {
  return (
    <section className={`${styles.container} flex`}>
      <article className="flex">
        <img src={postOwnerAvatar} alt="user profile pic" className={styles.profilepic}/>
        <p>{postOwner}</p>
      </article>
      <p>{time}</p>
      <article className="flex">
        <img src={CommentBoxIcon} alt="comment-box-icon" className={styles.icon}/>
        <p>{commentCount}</p>
      </article>
    </section>
  );
}
