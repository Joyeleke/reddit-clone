import styles from './PostTitleBar.module.css';
import { Link } from 'react-router-dom';

export default function PostTitleBar({title}) {
  return (
    <article className={`${styles.container} flex`}>
      <h2>{title}</h2>
      <h2><Link to="/here">View full post</Link></h2>
    </article>
  );
}

// {post.title}