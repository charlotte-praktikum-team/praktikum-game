import React from 'react';

export type ErrorBoundaryProps = {
  children: React.ReactNode;
};

export type ErrorBoundaryState = {
  error: Error | null;
};
