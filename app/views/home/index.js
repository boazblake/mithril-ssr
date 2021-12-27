"use strict"
import layout from "../layout"
import m from "mithril"

export default {
  oninit: (v) => (v.state.title = "HOME PAGE"),
  view: () => m("a", { href: "/child" }, "go to child"),
}
