import styles from "./IndividualPost.module.css";
import LikeCount from "../LikeCount/LikeCount";
import ExtraInfo from "../ExtraInfo/ExtraInfo";

export default function IndividualPost() {
  return (
    <>
      <div className = {`${styles.maindiv} shadow`}>
        <LikeCount />
        <div>
          <p>Title - Painters on the Brooklyn Bridge Cables</p>
          <img src="https://placekitten.com/200/200" alt="temp"/>
          <hr/>
          <ExtraInfo/>
        </div>
      </div>
    </>
  );
}
