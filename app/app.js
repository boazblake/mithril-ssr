"use strict"
import domready from "domready"
import m from "mithril"
import routes from "./routes"

m.route.prefix("mithril-ssr")

domready(function () {
  m.route(document.body, "/", routes)
})
