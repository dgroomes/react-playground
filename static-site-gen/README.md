# React Static Site Generation with Bun

This project demonstrates minimal static site generation using **only React and Bun** - no frameworks, no build tools, just clean JSX templating.

## Overview

This example showcases two approaches to static site generation:

1. **HTML Generation** - Traditional React SSR to static HTML
2. **Markdown Generation** - Novel JSX-to-Markdown rendering (proper JSX templating, not string replacement!)

## Dependencies

- **React 19** - For JSX templating and component rendering
- **Bun** - Runtime with native JSX/TypeScript support

That's it! No webpack, no Babel, no frameworks.

## Project Structure

```
static-site-gen/
├── portfolio-data.json           # Sample portfolio data
├── Portfolio.jsx                  # HTML portfolio component
├── PortfolioMarkdownJSX.jsx      # Markdown portfolio component (JSX syntax)
├── generate-html.jsx              # HTML generator script
├── generate-markdown-jsx.jsx      # Markdown generator script
├── jsx-to-markdown.jsx            # Custom JSX-to-Markdown renderer
└── README.md
```

## Usage

### Install Dependencies

```bash
bun install
```

### Generate Static HTML

```bash
bun generate-html.jsx
```

This creates `portfolio.html` using React's `renderToStaticMarkup()`. The component is a standard React component using regular HTML elements.

### Generate Markdown

```bash
bun generate-markdown-jsx.jsx
```

This creates `portfolio-jsx.md` using a custom JSX-to-Markdown renderer. The component uses JSX syntax with custom elements that map to markdown constructs.

## How It Works

### HTML Generation

The HTML approach uses React's built-in server rendering:

```jsx
import { renderToStaticMarkup } from 'react-dom/server';

const html = renderToStaticMarkup(<Portfolio data={portfolioData} />);
```

**Portfolio.jsx** uses standard HTML elements:

```jsx
export function Portfolio({ data }) {
  return (
    <html lang="en">
      <body>
        <h1>{data.name}</h1>
        <p>{data.bio}</p>
        {/* ... */}
      </body>
    </html>
  );
}
```

### Markdown Generation

The markdown approach uses a custom renderer that interprets JSX elements as markdown constructs:

```jsx
import { renderToMarkdown } from './jsx-to-markdown.jsx';

const markdown = renderToMarkdown(<PortfolioMarkdownJSX data={portfolioData} />);
```

**PortfolioMarkdownJSX.jsx** uses custom markdown-aware elements:

```jsx
export function PortfolioMarkdownJSX({ data }) {
  return (
    <document title={data.name}>
      <h2>{data.title}</h2>
      <p>{data.bio}</p>
      <section title="Projects">
        {data.projects.map(project => (
          <article>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </article>
        ))}
      </section>
    </document>
  );
}
```

The custom renderer (`jsx-to-markdown.jsx`) maps these elements to markdown syntax:
- `<h1>` → `# Heading`
- `<p>` → Paragraph with double newline
- `<ul><li>` → Bullet lists
- `<strong>` → `**bold**`
- And more...

## Key Features

### Zero Config with Bun

Bun runs JSX/TypeScript natively - no transpilation config needed. Just write JSX and run it.

### Pure JSX Templating

The markdown generator uses **proper JSX templating**, not string concatenation or replacement. You write JSX, it outputs markdown.

### Minimal Dependencies

Only React itself. No:
- Build tools (webpack, Vite, etc.)
- Frameworks (Next.js, Gatsby, etc.)
- Markdown libraries (for the markdown version)
- TypeScript compiler (Bun handles it)

### Data-Driven

Both approaches read from `portfolio-data.json`, demonstrating how you can use native Node.js file APIs alongside React components - a key capability of React Server Components-style thinking.

## Use Cases

### HTML Generation
- Static landing pages
- Email templates
- Pre-rendered web apps
- Documentation sites

### Markdown Generation
- README files
- Technical documentation
- Blog posts in markdown
- GitHub-flavored markdown content

## Extending

### Add New Markdown Elements

Edit `jsx-to-markdown.jsx` to add new element types:

```jsx
case 'blockquote':
  return childrenMd.split('\n').map(line => `> ${line}`).join('\n') + '\n\n';
```

### Customize Styling

For HTML, just add `<style>` tags in the `<head>`:

```jsx
<head>
  <style>{`
    body { font-family: sans-serif; }
  `}</style>
</head>
```

### Add More Data Sources

Read from multiple JSON files, APIs, or use Bun's file system APIs:

```jsx
import { readFileSync } from 'fs';

const projects = JSON.parse(readFileSync('./projects.json', 'utf-8'));
const skills = JSON.parse(readFileSync('./skills.json', 'utf-8'));
```

## Why This Approach?

Modern React (with RSC thinking) lets you:
- Use regular Node.js APIs in your components
- Skip the client-side hydration for truly static content
- Keep dependencies minimal
- Use familiar JSX syntax for templating

This example proves you can do meaningful static site generation with just React and a runtime - no framework required.

## Notes

- The JSX pragma `/** @jsx md */` is ignored by Bun (it uses React's JSX transform), so the renderer handles both React-style and custom JSX structures
- `renderToStaticMarkup` doesn't include the `<!DOCTYPE html>` declaration, so we add it manually
- For production use, consider adding HTML minification, CSS processing, or other optimizations

## Output

- **portfolio.html** - Complete static HTML file
- **portfolio-jsx.md** - Well-formatted markdown file

Both files are generated from the same data source using JSX templating!
