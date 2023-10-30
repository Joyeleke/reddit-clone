import styles from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <>
      <section className="flex">
        <input placeholder="Search" className="input" />
        {/* consider changing logo? */}
        <button className={styles.searchIcon}>&#x1F50E;&#xFE0E;</button>
      </section>
    </>
  );
}
