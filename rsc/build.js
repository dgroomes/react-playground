import React from 'react';
import { renderToString } from 'react-dom/server';
import { writeFileSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Import the Server Component
const ServerComponent = (await import('./dist-build/ServerComponent.js')).default;

console.log('Building static site with React Server Components...');

// Render the async Server Component
const element = await ServerComponent();

// Convert to static HTML
const html = '<!DOCTYPE html>\n' + renderToString(element);

// Write to dist/
mkdirSync(join(__dirname, 'dist'), { recursive: true });
writeFileSync(join(__dirname, 'dist/index.html'), html);

console.log('Built dist/index.html');
