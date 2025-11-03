import React from 'react';
import { renderToString } from 'react-dom/server';
import { writeFileSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Import the Server Component
const ServerComponent = (await import('./src/ServerComponent.jsx')).default;

console.log('🏗️  Building static site with React Server Components...');

// Render the async Server Component
// This is the key: the Server Component runs at build time!
const element = await ServerComponent();

// Convert to static HTML
const html = '<!DOCTYPE html>\n' + renderToString(element);

// Write to dist/
mkdirSync(join(__dirname, 'dist'), { recursive: true });
writeFileSync(join(__dirname, 'dist/index.html'), html);

console.log('✅ Built dist/index.html');
console.log('');
console.log('📘 What happened:');
console.log('  1. ServerComponent (async) executed at build time');
console.log('  2. It fetched data and returned JSX');
console.log('  3. React rendered it to static HTML');
console.log('  4. No server needed - just open dist/index.html!');
console.log('');
console.log('To view: open dist/index.html in your browser');
