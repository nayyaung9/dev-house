// views
import * as base from './views/base'
import * as homeView from './views/homeView';

/*
  / We call UI Render function right here after Web page is loaded
*/
window.addEventListener('load', () => {
  homeView.renderHome();
});
