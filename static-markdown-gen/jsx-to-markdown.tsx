// JSX-to-Markdown renderer using mdast AST library
// This provides a custom JSX factory that creates mdast nodes instead of React elements

import type { Root, Content, PhrasingContent } from 'mdast';
import { toMarkdown } from 'mdast-util-to-markdown';

// Fragment symbol - allows grouping JSX elements without a wrapper: <>...</>
export const Fragment = Symbol('Fragment');

// Convert primitives (strings, numbers, booleans) to mdast text nodes
// Pass through any existing mdast nodes unchanged
function toText(child: any) {
  return typeof child === 'string' || typeof child === 'number' || typeof child === 'boolean'
    ? { type: 'text', value: String(child) }
    : child;
}

// Flatten nested arrays, filter out null/undefined, and convert primitives to text nodes
function processChildren(children: any[]): any[] {
  return children.flat(Infinity).filter(c => c != null).map(toText);
}

// JSX factory function - called by TypeScript for every JSX element
// Transforms <element>children</element> into md('element', props, ...children)
export function md(type: string | symbol, props: any, ...children: any[]) {
  // Fragments just return their children without a wrapper
  if (type === Fragment || type === 'fragment') return processChildren(children);

  const kids = processChildren(children);

  // <document title="..."> creates a mdast Root node with optional title as H1
  if (type === 'document') {
    return {
      type: 'root',
      children: props?.title
        ? [{ type: 'heading', depth: 1, children: [{ type: 'text', value: props.title }] }, ...kids]
        : kids
    };
  }

  // <h1> through <h6> become mdast heading nodes with depth 1-6
  if (type.match(/^h[1-6]$/)) {
    return { type: 'heading', depth: parseInt(type[1]), children: kids };
  }

  // Map JSX elements to their mdast equivalents
  if (type === 'p') return { type: 'paragraph', children: kids };
  if (type === 'ul') return { type: 'list', ordered: false, children: kids };
  if (type === 'ol') return { type: 'list', ordered: true, children: kids };
  if (type === 'li') return { type: 'listItem', children: kids };
  if (type === 'strong') return { type: 'strong', children: kids };
  if (type === 'hr') return { type: 'thematicBreak' };

  // Unknown elements just return their children
  return kids;
}

// Serialize mdast AST to markdown string using mdast-util-to-markdown
// This library handles all the complexity of proper markdown formatting and escaping
export function renderToMarkdown(element: any): string {
  // Root nodes can be serialized directly
  if (element?.type === 'root') return toMarkdown(element as Root);

  // Other mdast nodes need to be wrapped in a Root first
  if (element?.type) return toMarkdown({ type: 'root', children: [element] } as Root);

  // Arrays of nodes also get wrapped in a Root
  if (Array.isArray(element)) return toMarkdown({ type: 'root', children: element.filter(e => e?.type) } as Root);

  // Fallback for primitives
  return String(element || '');
}
