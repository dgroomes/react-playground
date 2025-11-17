import { readFileSync, writeFileSync } from 'fs';
import { Portfolio } from './Portfolio.jsx';
import { renderToMarkdown } from './jsx-to-markdown.jsx';

const portfolioData = JSON.parse(
  readFileSync('./portfolio-data.json', 'utf-8')
);

const portfolioTree = Portfolio({ data: portfolioData });

const markdown = renderToMarkdown(portfolioTree);

writeFileSync('./portfolio.md', markdown);

console.log('Generated portfolio.md');
