import logo from "./reddit-128.png";
import styles from "./Navbar.module.css";
import SearchBar from "../SearchBar/SearchBar";

export default function Header() {
  return (
    <>
      <nav className="grid">
        <section className="flex">
          <img src={logo} alt="reddit-logo" className={styles.logo} />
          <h1><span style={{color: "blue"}}>Reddit</span>Minimal</h1>
        </section>
        <SearchBar />
      </nav>
    </>
  );
}
