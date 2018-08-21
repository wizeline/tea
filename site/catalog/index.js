import React from 'react';
import ReactDOM from 'react-dom';
import { Catalog, pageLoader } from 'catalog';
import { defineCustomElements } from '@wizeline/tea/dist/esm/es5/wizeline-tea.define';

const pages = [
  {
    path: '/',
    title: 'Welcome',
    content: pageLoader(() => import('./WELCOME.md')),
  },
  {
    path: '/colors',
    title: 'Colors',
    content: pageLoader(() => import('../pages/colors.md')),
  },
  {
    path: '/button',
    title: 'Button',
    content: pageLoader(() => import('../pages/button.md')),
  },
  {
    path: '/link',
    title: 'Link',
    content: pageLoader(() => import('../pages/link.md')),
  },
];

ReactDOM.render(
  <Catalog title="Catalog" pages={pages} />,
  document.getElementById('catalog'),
);

defineCustomElements(window);
