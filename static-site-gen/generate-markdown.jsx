import { readFileSync, writeFileSync } from 'fs';
import { PortfolioMarkdown } from './PortfolioMarkdown.jsx';
import { renderToMarkdown } from './markdown-renderer.jsx';

// Read portfolio data
const portfolioData = JSON.parse(
  readFileSync('./portfolio-data.json', 'utf-8')
);

// Create the portfolio component tree
const portfolioTree = PortfolioMarkdown({ data: portfolioData });

// Render to markdown
const markdown = renderToMarkdown(portfolioTree);

// Write to file
writeFileSync('./portfolio.md', markdown);

console.log('✓ Generated portfolio.md');
