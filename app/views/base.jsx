import {getTitle} from '../utils'

export default vnode => <html lang="js">
<head>
  <title>{ getTitle(vnode) }</title>
</head>
<body>
  { template(vnode) }
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