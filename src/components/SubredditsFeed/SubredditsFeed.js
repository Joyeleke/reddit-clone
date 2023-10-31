import SingleSubreddit from "../SingleSubreddit/SingleSubreddit";
import styles from "./SubredditsFeed.module.css"

export default function SubredditsFeed() {
  return (
    <section className = {styles.container}>
      <h1>Subreddits</h1>
      <SingleSubreddit />
    </section>
  );
}
