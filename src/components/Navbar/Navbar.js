import logo from "./reddit-128.png";
import styles from "./Navbar.module.css";
import SearchBar from "../SearchBar/SearchBar";

export default function Header() {
  return (
    <nav className="grid shadow">
      <article className="flex">
        <img src={logo} alt="reddit-logo" className={styles.logo} />
        <h3>
          <span className={styles.redditTextBlue}>Reddit</span>Minimal
        </h3>
      </article>
      <SearchBar />
    </nav>
  );
}
