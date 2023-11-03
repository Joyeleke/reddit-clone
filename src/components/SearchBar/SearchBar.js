import styles from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { loadSearchedPosts } from "../../features/PostFeed/PostFeedSlice";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (searchValue.length > 0) {
      dispatch(loadSearchedPosts(searchValue));
    }

    setSearchValue("");
  }

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        placeholder="Search Reddit"
        className={styles.input}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button className={styles.searchIcon} >
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </button>
    </form>
  );
}
