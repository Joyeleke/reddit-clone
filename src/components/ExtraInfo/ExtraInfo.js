import CommentBoxIcon from "./chat-box.png";
import styles from "./ExtraInfo.module.css"
import { timeAgo } from "./formatTime";

export default function ExtraInfo({postOwner, time, commentCount, postOwnerAvatar}) {
  return (
    <section className={`${styles.container} flex`}>
      <article className="flex">
        <p>{postOwner}</p>
      </article>
      <p>{timeAgo(time)}</p>
      <article className="flex">
        <img src={CommentBoxIcon} alt="comment-box-icon" className={styles.icon}/>
        <p>{commentCount}</p>
      </article>
    </section>
  );
}
