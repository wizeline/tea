import React from 'react';
import ReactDOM from 'react-dom';
import { Catalog, pageLoader } from 'catalog';
import { defineCustomElements } from '@wizeline/tea';
import '@wizeline/tea/dist/wizeline-tea.css';
import theme from './theme';

const pages = [
  {
    path: '/',
    title: 'Wizeline Tea',
    content: pageLoader(() => import('./WELCOME.md')),
  },
  {
    path: '/quickstart',
    title: 'QuickStart',
    pages: [
      {
        path: '/installation',
        title: 'Installation',
        content: pageLoader(() => import('./installation.md')),
      },
      {
        path: '/react',
        title: 'React',
        content: pageLoader(() => import('./configuration.react.md')),
      },
      {
        path: '/vue',
        title: 'Vue',
        content: pageLoader(() => import('./configuration.vue.md')),
      },
    ],
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
  {
    path: '/icons',
    title: 'Icons',
    content: pageLoader(() => import('../pages/icons.md')),
  },
  {
    path: '/heading',
    title: 'Heading',
    content: pageLoader(() => import('../pages/heading.md')),
  },
  {
    path: '/text',
    title: 'Text',
    content: pageLoader(() => import('../pages/text.md')),
  },
  {
    path: '/tag',
    title: 'Tag',
    content: pageLoader(() => import('../pages/tag.md')),
  },
  {
    path: '/forms',
    title: 'Forms',
    pages: [
      {
        path: '/input',
        title: 'Input',
        content: pageLoader(() => import('../pages/input.md')),
      },
      {
        path: '/input-file',
        title: 'Input File',
        content: pageLoader(() => import('../pages/input-file.md')),
      },
      {
        path: '/textarea',
        title: 'TextArea',
        content: pageLoader(() => import('../pages/textarea.md')),
      },
    ],
  },
];

ReactDOM.render(
  <Catalog title="Wizeline Tea" pages={pages} theme={theme} />,
  document.getElementById('catalog'),
);

defineCustomElements(window);
