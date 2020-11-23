import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import '../src/index.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <>
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    </>
  ),
];
