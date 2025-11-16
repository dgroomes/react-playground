// Custom JSX factory for creating markdown-aware elements
// Use this with /** @jsx md */ pragma

export function md(type, props, ...children) {
  // Flatten children array
  const flatChildren = children.flat(Infinity).filter(child => child !== null && child !== undefined);

  return {
    type,
    props: props || {},
    children: flatChildren
  };
}

// Renderer that converts JSX tree to markdown
export function renderToMarkdown(element) {
  if (element === null || element === undefined) {
    return '';
  }

  // Handle primitive values
  if (typeof element === 'string' || typeof element === 'number' || typeof element === 'boolean') {
    return String(element);
  }

  // Handle arrays
  if (Array.isArray(element)) {
    return element.map(renderToMarkdown).join('');
  }

  // Handle JSX elements (both custom and React-style)
  if (typeof element === 'object' && (element.type || element.$$typeof)) {
    const type = element.type;
    const props = element.props || {};

    // Handle React-style children (in props.children) or custom children
    const children = element.children || props.children;
    const childrenArray = Array.isArray(children) ? children : (children ? [children] : []);
    const childrenMd = childrenArray.map(renderToMarkdown).join('');

    switch (type) {
      case 'document':
        return `# ${props.title || ''}\n\n${childrenMd}`;

      case 'h1':
        return `# ${childrenMd}\n\n`;

      case 'h2':
        return `## ${childrenMd}\n\n`;

      case 'h3':
        return `### ${childrenMd}\n\n`;

      case 'h4':
        return `#### ${childrenMd}\n\n`;

      case 'h5':
        return `##### ${childrenMd}\n\n`;

      case 'h6':
        return `###### ${childrenMd}\n\n`;

      case 'p':
        return `${childrenMd}\n\n`;

      case 'ul':
        return `${childrenMd}\n`;

      case 'li':
        return `- ${childrenMd}\n`;

      case 'ol':
        // For ordered lists, we'll use simple numbering
        return childrenArray.map((child, i) =>
          `${i + 1}. ${renderToMarkdown(child).replace(/^- /, '')}`
        ).join('');

      case 'section':
        if (props.title) {
          return `## ${props.title}\n\n${childrenMd}`;
        }
        return childrenMd;

      case 'article':
        return `${childrenMd}\n`;

      case 'strong':
        return `**${childrenMd}**`;

      case 'em':
        return `*${childrenMd}*`;

      case 'code':
        return `\`${childrenMd}\``;

      case 'pre':
        const lang = props.lang || '';
        return `\`\`\`${lang}\n${childrenMd}\n\`\`\`\n\n`;

      case 'a':
        return `[${childrenMd}](${props.href || ''})`;

      case 'img':
        return `![${props.alt || ''}](${props.src || ''})\n\n`;

      case 'blockquote':
        return childrenMd.split('\n').map(line => `> ${line}`).join('\n') + '\n\n';

      case 'hr':
        return `---\n\n`;

      case 'br':
        return '\n';

      default:
        // For unknown types, just return children
        return childrenMd;
    }
  }

  return '';
}
