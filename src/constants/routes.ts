export const ROUTES_DATA = [
  {
    title: 'Home',
    path: '/',
    component: () => import('../pages/home'),
  },
  {
    title: 'About',
    path: '/about',
    component: () => import('../pages/about'),
  },
  {
    title: '404',
    path: '/404',
    component: () => import('../pages/404'),
  },
];
