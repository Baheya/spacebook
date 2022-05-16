export function Heading({ styledAs, headingLevel, children }) {
  const levels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

  if (!levels.includes(headingLevel)) {
    throw Error(`The heading level supplied is not valid.`);
  }
  let Tag = headingLevel;

  return <Tag>{children}</Tag>;
}
