// Custom React components that output markdown instead of HTML
// These components return objects with metadata to help the renderer

export const Document = ({ children, title }) => ({
  type: 'document',
  title,
  children
});

export const H1 = ({ children }) => ({
  type: 'h1',
  children
});

export const H2 = ({ children }) => ({
  type: 'h2',
  children
});

export const H3 = ({ children }) => ({
  type: 'h3',
  children
});

export const H4 = ({ children }) => ({
  type: 'h4',
  children
});

export const P = ({ children }) => ({
  type: 'p',
  children
});

export const UL = ({ children }) => ({
  type: 'ul',
  children
});

export const LI = ({ children }) => ({
  type: 'li',
  children
});

export const Section = ({ children, title }) => ({
  type: 'section',
  title,
  children
});

export const Article = ({ children }) => ({
  type: 'article',
  children
});

export const Strong = ({ children }) => ({
  type: 'strong',
  children
});

export const Em = ({ children }) => ({
  type: 'em',
  children
});

export const Link = ({ href, children }) => ({
  type: 'link',
  href,
  children
});

export const CodeBlock = ({ lang, children }) => ({
  type: 'codeblock',
  lang,
  children
});
