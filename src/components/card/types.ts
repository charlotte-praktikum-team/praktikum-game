import React from 'react';

type Width = 's' | 'm';

export type CardProps = {
  children: React.ReactNode;
  width?: Width;
  classes?: string;
};
