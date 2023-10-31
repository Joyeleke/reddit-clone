import redditsubpic from "./reddit-128.png"
import styles from "./SingleSubreddit.module.css"

export default function SingleSubreddit(){
    return <article className="flex">
        <img src={redditsubpic} alt="temporaray" className={styles.icon}/>
        <p>Home</p>
    </article>
}