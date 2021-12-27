"use strict"
import browserMock from "mithril/test-utils/browserMock"
import xhr from "w3c-xmlhttprequest"

global.document = global.window = {
  FormData: (a) => a,
  XMLHttpRequest: xhr,
}
global.requestAnimationFrame = undefined

const init = () => {
  browserMock(global)
  global.window.XMLHttpRequest = xhr
}

export { init }
