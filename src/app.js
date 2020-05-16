import * as HashRouter from './router';

// Views
import { Index } from './views/homeView';

const routes = [
  { path: "/", component: Index }
];

HashRouter.Route(routes);
