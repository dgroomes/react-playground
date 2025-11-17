// JSX factory function for creating markdown-aware element trees
import type { Root, Content, PhrasingContent, Heading, Paragraph, List, ListItem, Strong, Text } from 'mdast';
import { toMarkdown } from 'mdast-util-to-markdown';

// Fragment symbol for JSX fragments
export const Fragment = Symbol('Fragment');

// Helper function to convert JSX children to mdast nodes
function processChildren(children: any[]): Content[] {
  const flatChildren = children.flat(Infinity).filter(child => child !== null && child !== undefined);

  return flatChildren.map(child => {
    if (typeof child === 'string' || typeof child === 'number' || typeof child === 'boolean') {
      return { type: 'text', value: String(child) } as Text;
    }
    return child;
  });
}

// Helper function to convert JSX children to phrasing content (inline elements)
function processPhrasingChildren(children: any[]): PhrasingContent[] {
  const flatChildren = children.flat(Infinity).filter(child => child !== null && child !== undefined);

  return flatChildren.map(child => {
    if (typeof child === 'string' || typeof child === 'number' || typeof child === 'boolean') {
      return { type: 'text', value: String(child) } as Text;
    }
    return child as PhrasingContent;
  });
}

export function md(type: string | symbol, props: any, ...children: any[]) {
  // Handle fragment symbol
  if (type === Fragment || type === 'fragment') {
    return processChildren(children);
  }

  switch (type) {
    case 'document': {
      const processedChildren = processChildren(children);
      // Add the title as an H1 if provided
      const root: Root = {
        type: 'root',
        children: props?.title
          ? [{ type: 'heading', depth: 1, children: [{ type: 'text', value: props.title }] } as Heading, ...processedChildren]
          : processedChildren
      };
      return root;
    }

    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6': {
      const depth = parseInt(type.charAt(1)) as 1 | 2 | 3 | 4 | 5 | 6;
      const heading: Heading = {
        type: 'heading',
        depth,
        children: processPhrasingChildren(children)
      };
      return heading;
    }

    case 'p': {
      const paragraph: Paragraph = {
        type: 'paragraph',
        children: processPhrasingChildren(children)
      };
      return paragraph;
    }

    case 'ul': {
      const list: List = {
        type: 'list',
        ordered: false,
        children: processChildren(children) as ListItem[]
      };
      return list;
    }

    case 'ol': {
      const list: List = {
        type: 'list',
        ordered: true,
        children: processChildren(children) as ListItem[]
      };
      return list;
    }

    case 'li': {
      const listItem: ListItem = {
        type: 'listItem',
        children: processChildren(children)
      };
      return listItem;
    }

    case 'strong': {
      const strong: Strong = {
        type: 'strong',
        children: processPhrasingChildren(children)
      };
      return strong;
    }

    case 'hr': {
      return { type: 'thematicBreak' };
    }

    case 'fragment': {
      return processChildren(children);
    }

    default:
      return processChildren(children);
  }
}

export function renderToMarkdown(element: any): string {
  if (element === null || element === undefined) {
    return '';
  }

  // If it's already a Root node, serialize it directly
  if (typeof element === 'object' && element.type === 'root') {
    return toMarkdown(element as Root);
  }

  // If it's another mdast node type, wrap it in a Root node
  if (typeof element === 'object' && element.type) {
    const root: Root = {
      type: 'root',
      children: [element as Content]
    };
    return toMarkdown(root);
  }

  // Handle primitives
  if (typeof element === 'string' || typeof element === 'number' || typeof element === 'boolean') {
    return String(element);
  }

  // Handle arrays - wrap in Root node
  if (Array.isArray(element)) {
    const root: Root = {
      type: 'root',
      children: element.filter(e => e && typeof e === 'object' && e.type) as Content[]
    };
    return toMarkdown(root);
  }

  return '';
}
