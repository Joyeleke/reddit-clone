import ProfilePic from "./reddit-128.png";
import CommentBoxIcon from "./chat-box.png";
import styles from "./ExtraInfo.module.css"

export default function ExtraInfo() {
  return (
    <section className={`${styles.container} flex`}>
      <article className="flex">
        <img src={ProfilePic} alt="user profile pic" className={styles.profilepic}/>
        <p>r/moncking</p>
      </article>
      <p>6 hours ago</p>
      <article className="flex">
        <img src={CommentBoxIcon} alt="comment-box-icon" className={styles.icon}/>
        <p>227</p>
      </article>
    </section>
  );
}
