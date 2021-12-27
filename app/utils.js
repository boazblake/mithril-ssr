const log = m => v => (console.log(m,v), v)
const getTitle = (vnode) => vnode.state && vnode.state.title ? vnode.state.title() : 'Mithril SSR'
export {
  log, getTitle
}