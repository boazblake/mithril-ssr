"use strict"
import layout from "../layout"
import m from "mithril"

export default {
  oninit: (vnode) => (vnode.state.title = "CHILD PAGE"),
  view: (v) => m("a", { href: "/" }, "go home"),
}
