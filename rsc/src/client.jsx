import React from 'react';
import { createRoot } from 'react-dom/client';
import { createFromFetch } from 'react-server-dom-webpack/client';

// This is the client-side entry point
// It fetches the RSC payload from the server and hydrates the page

const root = createRoot(document.getElementById('root'));

// Fetch the React Server Component payload from the server
createFromFetch(
  fetch('/rsc')
).then((component) => {
  // Render the server component tree
  root.render(component);
});
