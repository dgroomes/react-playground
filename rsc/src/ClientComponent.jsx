import React from 'react';

// In a full RSC setup, this would have 'use client' and be hydrated
// For this minimal SSG example, it just renders statically
export default function ClientComponent({ initialValue }) {
  return (
    <div className="client">
      <h2>⚡ Client Component</h2>
      <p><strong>Initial value from server: {initialValue}</strong></p>
      <p style={{ fontSize: '14px', color: '#666' }}>
        ℹ️ In a full RSC setup, this would be marked with 'use client'
        and hydrated in the browser with useState/onClick handlers.
        For this minimal SSG example, it's rendered statically.
      </p>
      <p style={{ fontSize: '14px', color: '#666' }}>
        The key RSC feature this demo shows: async Server Components
        that run at build time!
      </p>
    </div>
  );
}
