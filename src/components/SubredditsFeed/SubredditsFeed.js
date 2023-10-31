import SingleSubreddit from "../SingleSubreddit/SingleSubreddit";
import styles from "./SubredditsFeed.module.css"

export default function SubredditsFeed() {
  return (
    <section className = {`${styles.container} shadow`}>
      <h1>Subreddits</h1>
      <SingleSubreddit />
      <SingleSubreddit />
      <SingleSubreddit />
      <SingleSubreddit />
      <SingleSubreddit />
      <SingleSubreddit />
    </section>
  );
}
