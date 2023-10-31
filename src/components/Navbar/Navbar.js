import logo from "./reddit-128.png";
import styles from "./Navbar.module.css";
import SearchBar from "../SearchBar/SearchBar";

const colorBlue = {
  color: "blue"
}

export default function Header() {
  return (
      <nav className="grid shadow">
        <article className="flex">
          <img src={logo} alt="reddit-logo" className={styles.logo} />
          <h1><span style={colorBlue}>Reddit</span>Minimal</h1>
        </article>
        <SearchBar />
      </nav>
  );
}
