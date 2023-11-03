import styles from "./SingleSubreddit.module.css";
import { imagesURL } from "./SubredditImagesUrlData";

export default function SingleSubreddit({ name, onClick }) {
  return (
    <button
      onClick={() => onClick(name)}
      className={`${styles.container} flex`}
    >
      <img src={imagesURL[name]} alt={`${name}-logo`} className={styles.icon} />
      <h4>r/{name}</h4>
    </button>
  );
}
