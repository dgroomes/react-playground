import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync, writeFileSync } from 'fs';
import { Portfolio } from './Portfolio.jsx';

// Read portfolio data
const portfolioData = JSON.parse(
  readFileSync('./portfolio-data.json', 'utf-8')
);

// Render the React component to static HTML
const html = renderToStaticMarkup(<Portfolio data={portfolioData} />);

// Add DOCTYPE (renderToStaticMarkup doesn't include it)
const fullHtml = `<!DOCTYPE html>\n${html}`;

// Write to file
writeFileSync('./portfolio.html', fullHtml);

console.log('✓ Generated portfolio.html');
