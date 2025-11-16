import { readFileSync, writeFileSync } from 'fs';
import { PortfolioMarkdownJSX } from './PortfolioMarkdownJSX.jsx';
import { renderToMarkdown } from './jsx-to-markdown.jsx';

// Read portfolio data
const portfolioData = JSON.parse(
  readFileSync('./portfolio-data.json', 'utf-8')
);

// Create the portfolio JSX tree
const portfolioTree = PortfolioMarkdownJSX({ data: portfolioData });

// Render to markdown
const markdown = renderToMarkdown(portfolioTree);

// Write to file
writeFileSync('./portfolio-jsx.md', markdown);

console.log('✓ Generated portfolio-jsx.md using true JSX syntax');
