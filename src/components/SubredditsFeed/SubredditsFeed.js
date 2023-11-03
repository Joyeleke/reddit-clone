import SingleSubreddit from "../SingleSubreddit/SingleSubreddit";
import styles from "./SubredditsFeed.module.css";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { loadPosts } from "../../features/PostFeed/PostFeedSlice";

export default function SubredditsFeed() {
  const dispatch = useDispatch();
  const [currentSubreddit, setCurrentSubreddit] = useState("csMajors");

  function handleClick(subredditName) {
    setCurrentSubreddit(subredditName);
  }

  useEffect(() => {
    dispatch(loadPosts(currentSubreddit));
  }, [dispatch, currentSubreddit]);

  return (
    <section className={`${styles.container} shadow`}>
      <h1>Subreddits</h1>
      <SingleSubreddit name="csMajors" onClick={handleClick} />
      <SingleSubreddit name="nba" onClick={handleClick} />
      <SingleSubreddit name="nfl" onClick={handleClick} />
      <SingleSubreddit name="uindy" onClick={handleClick} />
      <SingleSubreddit name="programming" onClick={handleClick} />
      <SingleSubreddit name="PersonalFinance" onClick={handleClick} />
      <SingleSubreddit name="python" onClick={handleClick} />
      <SingleSubreddit name="reactnative" onClick={handleClick} />
    </section>
  );
}
