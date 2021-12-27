'use strict';
import Layout from './views/layout'
import Home from './views/home'
import Child from './views/child';

const routes = {
  '/':    Layout(Home),
  '/child': Layout(Child)
}

export default routes;

