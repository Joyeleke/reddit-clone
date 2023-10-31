import styles from "./App.module.css";
import Navbar from "../Navbar/Navbar";
import PostFeed from "../PostFeed/PostFeed";
import SubredditsFeed from "../SubredditsFeed/SubredditsFeed";

function App() {
  return (
    <>
      <Navbar />
      {/* should i make SubredditsFeed an aside */}
      <main className={`${styles.mainContent} grid`}>
        <PostFeed />
        <SubredditsFeed/>
      </main>
    </>
  );
}

export default App;
