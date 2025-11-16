// Custom renderer that converts JSX component tree to markdown

export function renderToMarkdown(element) {
  if (element === null || element === undefined) {
    return '';
  }

  // Handle primitive values
  if (typeof element === 'string' || typeof element === 'number') {
    return String(element);
  }

  // Handle arrays of elements
  if (Array.isArray(element)) {
    return element.map(renderToMarkdown).join('');
  }

  // Handle React elements (objects with type property)
  if (typeof element === 'object') {
    const { type, children, title, href, lang } = element;

    // Convert children to markdown
    const childrenMd = Array.isArray(children)
      ? children.map(renderToMarkdown).join('')
      : renderToMarkdown(children);

    switch (type) {
      case 'document':
        return `# ${title}\n\n${childrenMd}`;

      case 'h1':
        return `# ${childrenMd}\n\n`;

      case 'h2':
        return `## ${childrenMd}\n\n`;

      case 'h3':
        return `### ${childrenMd}\n\n`;

      case 'h4':
        return `#### ${childrenMd}\n\n`;

      case 'p':
        return `${childrenMd}\n\n`;

      case 'ul':
        return `${childrenMd}\n`;

      case 'li':
        return `- ${childrenMd}\n`;

      case 'section':
        if (title) {
          return `## ${title}\n\n${childrenMd}`;
        }
        return childrenMd;

      case 'article':
        return `${childrenMd}\n`;

      case 'strong':
        return `**${childrenMd}**`;

      case 'em':
        return `*${childrenMd}*`;

      case 'link':
        return `[${childrenMd}](${href})`;

      case 'codeblock':
        return `\`\`\`${lang || ''}\n${childrenMd}\n\`\`\`\n\n`;

      default:
        // For unknown types, just return children
        return childrenMd;
    }
  }

  return '';
}
