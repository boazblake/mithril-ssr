"use strict"
import m from "mithril"

export default {
  oninit: (vnode) => (vnode.state.title = "CHILD PAGE"),
  view: (v) => m(m.route.link, { selector: "h1", href: "/" }, "go home"),
}
