const publicRoutes = {
  LOGIN: '/register-page',
};

const privateRoutes = {
  HOME: '/components',
  LOGOUT: '/components',
  LANDING: '/register-page'
};

const Routes = {
  ...publicRoutes,
  ...privateRoutes
};
export default Routes;
