// Custom JSX renderer for markdown output

export function renderToMarkdown(element) {
  if (element === null || element === undefined) {
    return '';
  }

  if (typeof element === 'string' || typeof element === 'number' || typeof element === 'boolean') {
    return String(element);
  }

  if (Array.isArray(element)) {
    return element.map(renderToMarkdown).join('');
  }

  if (typeof element === 'object' && (element.type || element.$$typeof)) {
    const type = element.type;
    const props = element.props || {};

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

      case 'p':
        return `${childrenMd}\n\n`;

      case 'ul':
        return `${childrenMd}\n`;

      case 'li':
        return `- ${childrenMd}\n`;

      case 'section':
        if (props.title) {
          return `## ${props.title}\n\n${childrenMd}`;
        }
        return childrenMd;

      case 'article':
        return `${childrenMd}\n`;

      case 'strong':
        return `**${childrenMd}**`;

      case 'hr':
        return `---\n\n`;

      default:
        return childrenMd;
    }
  }

  return '';
}
