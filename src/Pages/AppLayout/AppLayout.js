import styles from "./AppLayout.module.css";
import Navbar from "../../components/Navbar/Navbar";
import PostFeed from "../../features/PostFeed/PostFeed";
import SubredditsFeed from "../../components/SubredditsFeed/SubredditsFeed";

function AppLayout() {
  return (
    <>
      <Navbar />
      <main className={`${styles.mainContent} grid`}>
        <PostFeed />
        <SubredditsFeed/>
      </main>
    </>
  );
}

export default AppLayout;