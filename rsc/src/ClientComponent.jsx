import React from 'react';

export default function ClientComponent({ initialValue }) {
  return (
    <div className="client">
      <h2>Client Component</h2>
      <p>Initial value from server: {initialValue}</p>
      <p style={{ fontSize: '14px', color: '#666' }}>
        In a full RSC setup, this would be hydrated with interactivity. This example focuses on
        the core RSC feature: async components at build time.
      </p>
    </div>
  );
}
