"use strict"
import m from "mithril"

export default {
  oninit: (v) => (v.state.title = "HOME PAGE"),
  view: () =>
    m(m.route.link, { selector: "h1", href: "/child" }, "go to child"),
}
