import {getTitle} from '../utils'
import m from 'mithril'
import Layout from "./layout.js"
export default vnode => <html lang="js">
<head>
  <title>{ getTitle(vnode) }</title>
</head>
  <body>
    <header>HEADER</header>
    {m(vnode)}
    <footer>FOOTER</footer>
  <script src='./assets/javascripts/bundle.js'></script>
  <script>
    requestAnimationFrame(function(){'{'}
      var l = document.createElement('link');
      l.setAttribute('rel', 'stylesheet');
      l.setAttribute('href', '/assets/stylesheets/bundle.css');
      document.head.appendChild(l);
    {'}'});
  </script>
</body>
</html>
