import styles from "./IndividualPost.module.css";
import LikeCount from "../LikeCount/LikeCount";
import ExtraInfo from "../ExtraInfo/ExtraInfo";

export default function IndividualPost() {
  return (
    <section className={`${styles.maindiv} shadow`}>
      <LikeCount />
      <article>
        <h2>This is my beautiful commute to work!</h2>
        <figure className={styles.imgContainer}>
          <img
            src="https://placekitten.com/200/200"
            alt="temp"
            className={styles.contentImg}
          />
        </figure>
        <hr />
        <ExtraInfo />
      </article>
    </section>
  );
}
