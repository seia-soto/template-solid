import { lazy } from 'solid-js';
import type { RouteDefinition } from '@solidjs/router';

import { IndexPage } from './pages/index';

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: IndexPage,
  },
  {
    path: '**',
    component: lazy(() =>
      import('./errors/404').then((module) => ({ default: module.NotFoundPage })),
    ),
  },
];
