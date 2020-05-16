import * as HashRouter from './router';

// Views
import HomeView from './views/homeView';
import PersonView from './views/personView';

const routes = [
  { path: "/", component: HomeView },
  { path: "/user", component: PersonView }
];

HashRouter.Route(routes);
