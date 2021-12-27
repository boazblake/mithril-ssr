"use strict"
import Layout from "./views/layout.js"
import Home from "./views/home/index.js"
import Child from "./views/child/index.js"

const routes = {
  "/": {
    render: () => Layout(Home),
  },
  "/child": {
    render: () => Layout(Child),
  },
}

export default routes
