"use strict"
import m from "mithril"

export default {
  oninit: (v) => (v.state.title = "HOME PAGE"),
  view: () =>
    m(m.route.Link, { selector: "h1", href: "/child" }, "go to child"),
}
