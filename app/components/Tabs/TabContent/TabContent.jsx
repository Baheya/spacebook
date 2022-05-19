import { Source, sourceLinks } from './Source';
import styles from './TabContent.css';

export function links() {
  return [...sourceLinks(), { rel: 'stylesheet', href: styles }];
}

export function TabContent({ name, content, image }) {
  return (
    <article className="content">
      <div className="content-image-wrapper">
        <img
          className="content-image"
          src={image ? image : content.image.url}
          alt=""
        />
        {image ? (
          <img
            className="content-image-magnified"
            src={content.image.url}
            alt=""
          />
        ) : null}
      </div>
      <div className="content-description">
        <h2>{name}</h2>
        <p>{content.content}</p>
        <Source link={content.source} />
      </div>
    </article>
  );
}
