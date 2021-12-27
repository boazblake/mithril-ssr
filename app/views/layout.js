"use strict"
import m from "mithril"
import { getTitle } from "../utils"
import base from "./base.jsx"

export default (vnode) => {
  console.log(process)
  if (process.browser) {
    return {
      oncreate: (vnode) => (document.title = getTitle(vnode)),
      view: () => m("", m("header", "HEADER"), m(vnode), m("footer", "FOOTER")),
    }
  } else {
    return base(vnode)
  }
}
