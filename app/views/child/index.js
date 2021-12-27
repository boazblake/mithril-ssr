"use strict"
import m from "mithril"

export default {
  oninit: (vnode) => (vnode.state.title = "CHILD PAGE"),
  view: (v) => m("a", { href: "mithril-ssr/#!/" }, "go home"),
}
