import React from 'react';

const Root: React.FC = ({ element }: { element: React.ReactChild }) => (
  <React.StrictMode>{element}</React.StrictMode>
);

export default Root;
