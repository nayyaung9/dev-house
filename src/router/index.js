/*
  ~ This is Our JavaScript Custom Router
  ~ Feel free to use
*/
import ErrorPage from '../views/ErrorPage';

export function Route(routes) {
  const parseLocation = hash => hash.slice(1).toLowerCase() || "/";

  const findComponentByPath = path =>
    routes.find(r => r.path.match(new RegExp(`^\\${path}$`, "gm"))) || false;
  
  const router = () => {
    const path = parseLocation(document.location.hash);
    const { component = ErrorPage } =
      findComponentByPath(path, routes) || {};
    document.getElementById("root").innerHTML = component.render();
  };
  
  window.addEventListener("hashchange", router);
  window.addEventListener("load", router) || router();
}

