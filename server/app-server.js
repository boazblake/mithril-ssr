"use strict"
import express from "express"
import fs from "fs"
import path from "path"
import m from "mithril"
import toHtml from "mithril-node-render"
import juice from "juice"
import routes from "../app/routes"
import { init } from "./initializer.js"
init()

var appServer = express()
var appCSS = fs
  .readFileSync(
    path.resolve(__dirname, "..", "docs", "assets", "stylesheets", "bundle.css")
  )
  .toString()

Object.keys(routes).map(function (route) {
  const module = routes[route]

  const onmatch = (module && module.onmatch) || (() => module)
  const render = (module && module.render) || ((d) => d)
  appServer.get(route, function (req, res, next) {
    res.type("html")
    Promise.resolve(onmatch(req.params, req.url) || "div", {
      "data-server-params": req.params,
    })

      .then(render)
      .then(toHtml)
      .then((html) => juice(html, { extraCss: appCSS }))
      .then(res.send.bind(res))
      .catch(next)
  })
})

export default appServer
