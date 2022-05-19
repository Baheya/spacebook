import { Source, sourceLinks } from '../Source';
import styles from './Content.css';

export function links() {
  return [...sourceLinks(), { rel: 'stylesheet', href: styles }];
}

export function Content({ name, content }) {
  return (
    <article className="content">
      <img src={content.image.url} alt="" />
      <div className="content-description">
        <h2>{name}</h2>
        <p>{content.content}</p>
        <Source link={content.source} />
      </div>
    </article>
  );
}
