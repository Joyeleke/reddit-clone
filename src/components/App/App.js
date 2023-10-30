import styles from "./App.module.css";
import Navbar from "../Navbar/Navbar";
import PostFeed from "../PostFeed/PostFeed";
import SubredditsFeed from "../SubredditsFeed/SubredditsFeed";

function App() {
  return (
    <>
      <Navbar />
      <section className={`${styles.mainContent} grid`}>
        <PostFeed />
        <SubredditsFeed />
      </section>
    </>
  );
}

export default App;
