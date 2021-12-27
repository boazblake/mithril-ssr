"use strict"
import m from "mithril"

export default {
  oninit: (v) => (v.state.title = "HOME PAGE"),
  view: () => m("a", { href: "mithril-ssr/#!/child" }, "go to child"),
}
