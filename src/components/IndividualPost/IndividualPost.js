import styles from "./IndividualPost.module.css";
import LikeCount from "../LikeCount/LikeCount";
import ExtraInfo from "../ExtraInfo/ExtraInfo";

export default function IndividualPost() {
  return (
    <>
      <div className={styles.maindiv}>
        <LikeCount />
        <div>
          <p>Title - Painters on the Brooklyn Bridge Cables</p>
          <img src="https://placekitten.com/200/200"/>
          <hr/>
          <ExtraInfo/>
        </div>
      </div>
    </>
  );
}
