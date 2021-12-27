!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/assets/javascripts/",t(t.s=5)}([function(e,t,n){(function(t,n){!function(){"use strict";function r(e,t,n,r,o,i){return{tag:e,key:t,attrs:n,children:r,text:o,dom:i,domSize:void 0,state:void 0,_state:void 0,events:void 0,instance:void 0,skip:!1}}function o(e){for(var t in e)if(f.call(e,t))return!1;return!0}function i(e){for(var t,n="div",r=[],o={};t=c.exec(e);){var i=t[1],l=t[2];if(""===i&&""!==l)n=l;else if("#"===i)o.id=l;else if("."===i)r.push(l);else if("["===t[3][0]){var a=t[6];a&&(a=a.replace(/\\(["'])/g,"$1").replace(/\\\\/g,"\\")),"class"===t[4]?r.push(a):o[t[4]]=""===a?a:a||!0}}return r.length>0&&(o.className=r.join(" ")),s[e]={tag:n,attrs:o}}function l(e,t,n){var i,l,a=!1,u=t.className||t.class;if(!o(e.attrs)&&!o(t)){var c={};for(var s in t)f.call(t,s)&&(c[s]=t[s]);t=c}for(var s in e.attrs)f.call(e.attrs,s)&&(t[s]=e.attrs[s]);void 0!==u&&(void 0!==t.class&&(t.class=void 0,t.className=u),null!=e.attrs.className&&(t.className=e.attrs.className+" "+u));for(var s in t)if(f.call(t,s)&&"key"!==s){a=!0;break}return Array.isArray(n)&&1===n.length&&null!=n[0]&&"#"===n[0].tag?l=n[0].children:i=n,r(e.tag,t.key,a?t:void 0,i,l)}function a(e){var t,n=arguments[1],o=2;if(null==e||"string"!=typeof e&&"function"!=typeof e&&"function"!=typeof e.view)throw Error("The selector must be either a string or a component.");if("string"==typeof e)var a=s[e]||i(e);if(null==n?n={}:("object"!=typeof n||null!=n.tag||Array.isArray(n))&&(n={},o=1),arguments.length===o+1)t=arguments[o],Array.isArray(t)||(t=[t]);else for(t=[];o<arguments.length;)t.push(arguments[o++]);var u=r.normalizeChildren(t);return"string"==typeof e?l(a,n,u):r(e,n.key,n,u)}function u(e){var t=0,n=null,r="function"==typeof requestAnimationFrame?requestAnimationFrame:setTimeout;return function(){var o=Date.now();0===t||o-t>=16?(t=o,e()):null===n&&(n=r(function(){n=null,e(),t=Date.now()},16-(o-t)))}}r.normalize=function(e){return Array.isArray(e)?r("[",void 0,void 0,r.normalizeChildren(e),void 0,void 0):null!=e&&"object"!=typeof e?r("#",void 0,void 0,!1===e?"":e,void 0,void 0):e},r.normalizeChildren=function(e){for(var t=0;t<e.length;t++)e[t]=r.normalize(e[t]);return e};var c=/(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,s={},f={}.hasOwnProperty;a.trust=function(e){return null==e&&(e=""),r("<",void 0,void 0,e,void 0,void 0)},a.fragment=function(e,t){return r("[",e.key,e,r.normalizeChildren(t),void 0,void 0)};var d=a,v=function(e){function n(e,t){return function n(a){var f;try{if(!t||null==a||"object"!=typeof a&&"function"!=typeof a||"function"!=typeof(f=a.then))s(function(){t||0!==e.length||console.error("Possible unhandled promise rejection:",a);for(var r=0;r<e.length;r++)e[r](a);i.length=0,l.length=0,c.state=t,c.retry=function(){n(a)}});else{if(a===o)throw new TypeError("Promise can't be resolved w/ itself");r(f.bind(a))}}catch(e){u(e)}}}function r(e){function t(e){return function(t){n++>0||e(t)}}var n=0,r=t(u);try{e(t(a),r)}catch(e){r(e)}}if(!(this instanceof v))throw new Error("Promise must be called with `new`");if("function"!=typeof e)throw new TypeError("executor must be a function");var o=this,i=[],l=[],a=n(i,!0),u=n(l,!1),c=o._instance={resolvers:i,rejectors:l},s="function"==typeof t?t:setTimeout;r(e)};if(v.prototype.then=function(e,t){function n(e,t,n,i){t.push(function(t){if("function"!=typeof e)n(t);else try{r(e(t))}catch(e){o&&o(e)}}),"function"==typeof l.retry&&i===l.state&&l.retry()}var r,o,i=this,l=i._instance,a=new v(function(e,t){r=e,o=t});return n(e,l.resolvers,r,!0),n(t,l.rejectors,o,!1),a},v.prototype.catch=function(e){return this.then(null,e)},v.resolve=function(e){return e instanceof v?e:new v(function(t){t(e)})},v.reject=function(e){return new v(function(t,n){n(e)})},v.all=function(e){return new v(function(t,n){var r=e.length,o=0,i=[];if(0===e.length)t([]);else for(var l=0;l<e.length;l++)!function(l){function a(e){o++,i[l]=e,o===r&&t(i)}null==e[l]||"object"!=typeof e[l]&&"function"!=typeof e[l]||"function"!=typeof e[l].then?a(e[l]):e[l].then(a,n)}(l)})},v.race=function(e){return new v(function(t,n){for(var r=0;r<e.length;r++)e[r].then(t,n)})},"undefined"!=typeof window){void 0===window.Promise&&(window.Promise=v);var v=window.Promise}else if(void 0!==n){void 0===n.Promise&&(n.Promise=v);var v=n.Promise}var h=function(e){function t(e,r){if(Array.isArray(r))for(var o=0;o<r.length;o++)t(e+"["+o+"]",r[o]);else if("[object Object]"===Object.prototype.toString.call(r))for(var o in r)t(e+"["+o+"]",r[o]);else n.push(encodeURIComponent(e)+(null!=r&&""!==r?"="+encodeURIComponent(r):""))}if("[object Object]"!==Object.prototype.toString.call(e))return"";var n=[];for(var r in e)t(r,e[r]);return n.join("&")},p=new RegExp("^file://","i"),m=function(e,t){function n(e){d=e}function r(){function e(){0==--t&&"function"==typeof d&&d()}var t=0;return function n(r){var o=r.then;return r.then=function(){t++;var i=o.apply(r,arguments);return i.then(e,function(n){if(e(),0===t)throw n}),n(i)},r}}function o(e,t){if("string"==typeof e){var n=e;e=t||{},null==e.url&&(e.url=n)}return e}function i(n,i){var l=r();n=o(n,i);var d=new t(function(t,r){null==n.method&&(n.method="GET"),n.method=n.method.toUpperCase();var o="GET"!==n.method&&"TRACE"!==n.method&&("boolean"!=typeof n.useBody||n.useBody);"function"!=typeof n.serialize&&(n.serialize="undefined"!=typeof FormData&&n.data instanceof FormData?function(e){return e}:JSON.stringify),"function"!=typeof n.deserialize&&(n.deserialize=c),"function"!=typeof n.extract&&(n.extract=s),n.url=a(n.url,n.data),o?n.data=n.serialize(n.data):n.url=u(n.url,n.data);var i=new e.XMLHttpRequest,l=!1,d=i.abort;i.abort=function(){l=!0,d.call(i)},i.open(n.method,n.url,"boolean"!=typeof n.async||n.async,"string"==typeof n.user?n.user:void 0,"string"==typeof n.password?n.password:void 0),n.serialize!==JSON.stringify||!o||n.headers&&n.headers.hasOwnProperty("Content-Type")||i.setRequestHeader("Content-Type","application/json; charset=utf-8"),n.deserialize!==c||n.headers&&n.headers.hasOwnProperty("Accept")||i.setRequestHeader("Accept","application/json, text/*"),n.withCredentials&&(i.withCredentials=n.withCredentials);for(var v in n.headers)({}).hasOwnProperty.call(n.headers,v)&&i.setRequestHeader(v,n.headers[v]);"function"==typeof n.config&&(i=n.config(i,n)||i),i.onreadystatechange=function(){if(!l&&4===i.readyState)try{var e=n.extract!==s?n.extract(i,n):n.deserialize(n.extract(i,n));if(i.status>=200&&i.status<300||304===i.status||p.test(n.url))t(f(n.type,e));else{var o=new Error(i.responseText);for(var a in e)o[a]=e[a];r(o)}}catch(e){r(e)}},o&&null!=n.data?i.send(n.data):i.send()});return!0===n.background?d:l(d)}function l(n,i){var l=r();n=o(n,i);var c=new t(function(t,r){var o=n.callbackName||"_mithril_"+Math.round(1e16*Math.random())+"_"+v++,i=e.document.createElement("script");e[o]=function(r){i.parentNode.removeChild(i),t(f(n.type,r)),delete e[o]},i.onerror=function(){i.parentNode.removeChild(i),r(new Error("JSONP request failed")),delete e[o]},null==n.data&&(n.data={}),n.url=a(n.url,n.data),n.data[n.callbackKey||"callback"]=o,i.src=u(n.url,n.data),e.document.documentElement.appendChild(i)});return!0===n.background?c:l(c)}function a(e,t){if(null==t)return e;for(var n=e.match(/:[^\/]+/gi)||[],r=0;r<n.length;r++){var o=n[r].slice(1);null!=t[o]&&(e=e.replace(n[r],t[o]))}return e}function u(e,t){var n=h(t);if(""!==n){e+=(e.indexOf("?")<0?"?":"&")+n}return e}function c(e){try{return""!==e?JSON.parse(e):null}catch(t){throw new Error(e)}}function s(e){return e.responseText}function f(e,t){if("function"==typeof e){if(!Array.isArray(t))return new e(t);for(var n=0;n<t.length;n++)t[n]=new e(t[n])}return t}var d,v=0;return{request:i,jsonp:l,setCompletionCallback:n}}(window,v),g=function(e){function t(e){return G=e}function n(e){return e.attrs&&e.attrs.xmlns||Q[e.tag]}function o(){try{return J.activeElement}catch(e){return null}}function i(e,t,n,r,o,i,a){for(var u=n;u<r;u++){var c=t[u];null!=c&&l(e,c,o,a,i)}}function l(e,t,n,r,o){var i=t.tag;if("string"!=typeof i)return d(e,t,n,r,o);switch(t.state={},null!=t.attrs&&q(t.attrs,t,n),i){case"#":return a(e,t,o);case"<":return u(e,t,o);case"[":return c(e,t,n,r,o);default:return s(e,t,n,r,o)}}function a(e,t,n){return t.dom=J.createTextNode(t.children),k(e,t.dom,n),t.dom}function u(e,t,n){var r=t.children.match(/^\s*?<(\w+)/im)||[],o={caption:"table",thead:"table",tbody:"table",tfoot:"table",tr:"tbody",th:"tr",td:"tr",colgroup:"table",col:"colgroup"}[r[1]]||"div",i=J.createElement(o);i.innerHTML=t.children,t.dom=i.firstChild,t.domSize=i.childNodes.length;for(var l,a=J.createDocumentFragment();l=i.firstChild;)a.appendChild(l);return k(e,a,n),a}function c(e,t,n,r,o){var l=J.createDocumentFragment();if(null!=t.children){var a=t.children;i(l,a,0,a.length,n,null,r)}return t.dom=l.firstChild,t.domSize=l.childNodes.length,k(e,l,o),l}function s(e,t,o,l,a){var u=t.tag,c=t.attrs,s=c&&c.is;l=n(t)||l;var f=l?s?J.createElementNS(l,u,{is:s}):J.createElementNS(l,u):s?J.createElement(u,{is:s}):J.createElement(u);if(t.dom=f,null!=c&&j(t,c,l),k(e,f,a),null!=t.attrs&&null!=t.attrs.contenteditable)E(t);else if(null!=t.text&&(""!==t.text?f.textContent=t.text:t.children=[r("#",void 0,void 0,t.text,void 0,void 0)]),null!=t.children){var d=t.children;i(f,d,0,d.length,o,null,l),z(t)}return f}function f(e,t){var n;if("function"==typeof e.tag.view){if(e.state=Object.create(e.tag),n=e.state.view,null!=n.$$reentrantLock$$)return K;n.$$reentrantLock$$=!0}else{if(e.state=void 0,n=e.tag,null!=n.$$reentrantLock$$)return K;n.$$reentrantLock$$=!0,e.state=null!=e.tag.prototype&&"function"==typeof e.tag.prototype.view?new e.tag(e):e.tag(e)}if(e._state=e.state,null!=e.attrs&&q(e.attrs,e,t),q(e._state,e,t),e.instance=r.normalize(e._state.view.call(e.state,e)),e.instance===e)throw Error("A view cannot return the vnode it received as argument");n.$$reentrantLock$$=null}function d(e,t,n,r,o){if(f(t,n),null!=t.instance){var i=l(e,t.instance,n,r,o);return t.dom=t.instance.dom,t.domSize=null!=t.dom?t.instance.domSize:0,k(e,i,o),i}return t.domSize=0,K}function v(e,t,n,r,o,a,u){if(t!==n&&(null!=t||null!=n))if(null==t)i(e,n,0,n.length,o,a,u);else if(null==n)C(t,0,t.length,n);else{if(t.length===n.length){for(var c=!1,s=0;s<n.length;s++)if(null!=n[s]&&null!=t[s]){c=null==n[s].key&&null==t[s].key;break}if(c){for(var s=0;s<t.length;s++)t[s]!==n[s]&&(null==t[s]&&null!=n[s]?l(e,n[s],o,u,_(t,s+1,a)):null==n[s]?C(t,s,s+1,n):h(e,t[s],n[s],o,_(t,s+1,a),r,u));return}}if(r=r||b(t,n)){var f=t.pool;t=t.concat(t.pool)}for(var d,v=0,p=0,m=t.length-1,g=n.length-1;m>=v&&g>=p;){var y=t[v],w=n[p];if(y!==w||r)if(null==y)v++;else if(null==w)p++;else if(y.key===w.key){var E=null!=f&&v>=t.length-f.length||null==f&&r;v++,p++,h(e,y,w,o,_(t,v,a),E,u),r&&y.tag===w.tag&&k(e,T(y),a)}else{var y=t[m];if(y!==w||r)if(null==y)m--;else if(null==w)p++;else{if(y.key!==w.key)break;var E=null!=f&&m>=t.length-f.length||null==f&&r;h(e,y,w,o,_(t,m+1,a),E,u),(r||p<g)&&k(e,T(y),_(t,v,a)),m--,p++}else m--,p++}else v++,p++}for(;m>=v&&g>=p;){var y=t[m],w=n[g];if(y!==w||r)if(null==y)m--;else if(null==w)g--;else if(y.key===w.key){var E=null!=f&&m>=t.length-f.length||null==f&&r;h(e,y,w,o,_(t,m+1,a),E,u),r&&y.tag===w.tag&&k(e,T(y),a),null!=y.dom&&(a=y.dom),m--,g--}else{if(d||(d=x(t,m)),null!=w){var A=d[w.key];if(null!=A){var S=t[A],E=null!=f&&A>=t.length-f.length||null==f&&r;h(e,S,w,o,_(t,m+1,a),r,u),k(e,T(S),a),t[A].skip=!0,null!=S.dom&&(a=S.dom)}else{var O=l(e,w,o,u,a);a=O}}g--}else m--,g--;if(g<p)break}i(e,n,p,g+1,o,a,u),C(t,v,m+1,n)}}function h(e,t,n,r,o,i,a){var u=t.tag;if(u===n.tag){if(n.state=t.state,n._state=t._state,n.events=t.events,!i&&U(n,t))return;if("string"==typeof u)switch(null!=n.attrs&&(i?(n.state={},q(n.attrs,n,r)):H(n.attrs,n,r)),u){case"#":p(t,n);break;case"<":m(e,t,n,o);break;case"[":g(e,t,n,i,r,o,a);break;default:y(t,n,i,r,a)}else w(e,t,n,r,o,i,a)}else A(t,null),l(e,n,r,a,o)}function p(e,t){e.children.toString()!==t.children.toString()&&(e.dom.nodeValue=t.children),t.dom=e.dom}function m(e,t,n,r){t.children!==n.children?(T(t),u(e,n,r)):(n.dom=t.dom,n.domSize=t.domSize)}function g(e,t,n,r,o,i,l){v(e,t.children,n.children,r,o,i,l);var a=0,u=n.children;if(n.dom=null,null!=u){for(var c=0;c<u.length;c++){var s=u[c];null!=s&&null!=s.dom&&(null==n.dom&&(n.dom=s.dom),a+=s.domSize||1)}1!==a&&(n.domSize=a)}}function y(e,t,o,i,l){var a=t.dom=e.dom;l=n(t)||l,"textarea"===t.tag&&(null==t.attrs&&(t.attrs={}),null!=t.text&&(t.attrs.value=t.text,t.text=void 0)),I(t,e.attrs,t.attrs,l),null!=t.attrs&&null!=t.attrs.contenteditable?E(t):null!=e.text&&null!=t.text&&""!==t.text?e.text.toString()!==t.text.toString()&&(e.dom.firstChild.nodeValue=t.text):(null!=e.text&&(e.children=[r("#",void 0,void 0,e.text,void 0,e.dom.firstChild)]),null!=t.text&&(t.children=[r("#",void 0,void 0,t.text,void 0,void 0)]),v(a,e.children,t.children,o,i,null,l))}function w(e,t,n,o,i,a,u){if(a)f(n,o);else{if(n.instance=r.normalize(n._state.view.call(n.state,n)),n.instance===n)throw Error("A view cannot return the vnode it received as argument");null!=n.attrs&&H(n.attrs,n,o),H(n._state,n,o)}null!=n.instance?(null==t.instance?l(e,n.instance,o,u,i):h(e,t.instance,n.instance,o,i,a,u),n.dom=n.instance.dom,n.domSize=n.instance.domSize):null!=t.instance?(A(t.instance,null),n.dom=void 0,n.domSize=0):(n.dom=t.dom,n.domSize=t.domSize)}function b(e,t){if(null!=e.pool&&Math.abs(e.pool.length-t.length)<=Math.abs(e.length-t.length)){var n=e[0]&&e[0].children&&e[0].children.length||0,r=e.pool[0]&&e.pool[0].children&&e.pool[0].children.length||0,o=t[0]&&t[0].children&&t[0].children.length||0;if(Math.abs(r-o)<=Math.abs(n-o))return!0}return!1}function x(e,t){for(var n={},r=0,r=0;r<t;r++){var o=e[r];if(null!=o){var i=o.key;null!=i&&(n[i]=r)}}return n}function T(e){var t=e.domSize;if(null!=t||null==e.dom){var n=J.createDocumentFragment();if(t>0){for(var r=e.dom;--t;)n.appendChild(r.nextSibling);n.insertBefore(r,n.firstChild)}return n}return e.dom}function _(e,t,n){for(;t<e.length;t++)if(null!=e[t]&&null!=e[t].dom)return e[t].dom;return n}function k(e,t,n){n&&n.parentNode?e.insertBefore(t,n):e.appendChild(t)}function E(e){var t=e.children;if(null!=t&&1===t.length&&"<"===t[0].tag){var n=t[0].children;e.dom.innerHTML!==n&&(e.dom.innerHTML=n)}else if(null!=e.text||null!=t&&0!==t.length)throw new Error("Child node of a contenteditable must be trusted")}function C(e,t,n,r){for(var o=t;o<n;o++){var i=e[o];null!=i&&(i.skip?i.skip=!1:A(i,r))}}function A(e,t){function n(){if(++o===r&&(O(e),e.dom)){var n=e.domSize||1;if(n>1)for(var i=e.dom;--n;)S(i.nextSibling);S(e.dom),null==t||null!=e.domSize||R(e.attrs)||"string"!=typeof e.tag||(t.pool?t.pool.push(e):t.pool=[e])}}var r=1,o=0;if(e.attrs&&"function"==typeof e.attrs.onbeforeremove){var i=e.attrs.onbeforeremove.call(e.state,e);null!=i&&"function"==typeof i.then&&(r++,i.then(n,n))}if("string"!=typeof e.tag&&"function"==typeof e._state.onbeforeremove){var i=e._state.onbeforeremove.call(e.state,e);null!=i&&"function"==typeof i.then&&(r++,i.then(n,n))}n()}function S(e){var t=e.parentNode;null!=t&&t.removeChild(e)}function O(e){if(e.attrs&&"function"==typeof e.attrs.onremove&&e.attrs.onremove.call(e.state,e),"string"!=typeof e.tag)"function"==typeof e._state.onremove&&e._state.onremove.call(e.state,e),null!=e.instance&&O(e.instance);else{var t=e.children;if(Array.isArray(t))for(var n=0;n<t.length;n++){var r=t[n];null!=r&&O(r)}}}function j(e,t,n){for(var r in t)M(e,r,null,t[r],n)}function M(e,t,n,r,i){var l=e.dom;if("key"!==t&&"is"!==t&&(n!==r||P(e,t)||"object"==typeof r)&&void 0!==r&&!N(t)){var a=t.indexOf(":");if(a>-1&&"xlink"===t.substr(0,a))l.setAttributeNS("http://www.w3.org/1999/xlink",t.slice(a+1),r);else if("o"===t[0]&&"n"===t[1]&&"function"==typeof r)F(e,t,r);else if("style"===t)D(l,n,r);else if(t in l&&!L(t)&&void 0===i&&!$(e)){if("value"===t){var u=""+r;if(("input"===e.tag||"textarea"===e.tag)&&e.dom.value===u&&e.dom===o())return;if("select"===e.tag)if(null===r){if(-1===e.dom.selectedIndex&&e.dom===o())return}else if(null!==n&&e.dom.value===u&&e.dom===o())return;if("option"===e.tag&&null!=n&&e.dom.value===u)return}if("input"===e.tag&&"type"===t)return void l.setAttribute(t,r);l[t]=r}else"boolean"==typeof r?r?l.setAttribute(t,""):l.removeAttribute(t):l.setAttribute("className"===t?"class":t,r)}}function z(e){var t=e.attrs;"select"===e.tag&&null!=t&&("value"in t&&M(e,"value",null,t.value,void 0),"selectedIndex"in t&&M(e,"selectedIndex",null,t.selectedIndex,void 0))}function I(e,t,n,r){if(null!=n)for(var o in n)M(e,o,t&&t[o],n[o],r);if(null!=t)for(var o in t)null!=n&&o in n||("className"===o&&(o="class"),"o"!==o[0]||"n"!==o[1]||N(o)?"key"!==o&&e.dom.removeAttribute(o):F(e,o,void 0))}function P(e,t){return"value"===t||"checked"===t||"selectedIndex"===t||"selected"===t&&e.dom===o()}function N(e){return"oninit"===e||"oncreate"===e||"onupdate"===e||"onremove"===e||"onbeforeremove"===e||"onbeforeupdate"===e}function L(e){return"href"===e||"list"===e||"form"===e||"width"===e||"height"===e}function $(e){return e.attrs.is||e.tag.indexOf("-")>-1}function R(e){return null!=e&&(e.oncreate||e.onupdate||e.onbeforeremove||e.onremove)}function D(e,t,n){if(t===n&&(e.style.cssText="",t=null),null==n)e.style.cssText="";else if("string"==typeof n)e.style.cssText=n;else{"string"==typeof t&&(e.style.cssText="");for(var r in n)e.style[r]=n[r];if(null!=t&&"string"!=typeof t)for(var r in t)r in n||(e.style[r]="")}}function F(e,t,n){var r=e.dom,o="function"!=typeof G?n:function(e){var t=n.call(r,e);return G.call(r,e),t};if(t in r)r[t]="function"==typeof n?o:null;else{var i=t.slice(2);if(void 0===e.events&&(e.events={}),e.events[t]===o)return;null!=e.events[t]&&r.removeEventListener(i,e.events[t],!1),"function"==typeof n&&(e.events[t]=o,r.addEventListener(i,e.events[t],!1))}}function q(e,t,n){"function"==typeof e.oninit&&e.oninit.call(t.state,t),"function"==typeof e.oncreate&&n.push(e.oncreate.bind(t.state,t))}function H(e,t,n){"function"==typeof e.onupdate&&n.push(e.onupdate.bind(t.state,t))}function U(e,t){var n,r;return null!=e.attrs&&"function"==typeof e.attrs.onbeforeupdate&&(n=e.attrs.onbeforeupdate.call(e.state,e,t)),"string"!=typeof e.tag&&"function"==typeof e._state.onbeforeupdate&&(r=e._state.onbeforeupdate.call(e.state,e,t)),!(void 0===n&&void 0===r||n||r)&&(e.dom=t.dom,e.domSize=t.domSize,e.instance=t.instance,!0)}function B(e,t){if(!e)throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");var n=[],i=o(),l=e.namespaceURI;null==e.vnodes&&(e.textContent=""),Array.isArray(t)||(t=[t]),v(e,e.vnodes,r.normalizeChildren(t),!1,n,null,"http://www.w3.org/1999/xhtml"===l?void 0:l),e.vnodes=t,null!=i&&o()!==i&&i.focus();for(var a=0;a<n.length;a++)n[a]()}var G,J=e.document,K=J.createDocumentFragment(),Q={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"};return{render:B,setEventCallback:t}},y=function(e){function t(e,t){n(e),i.push(e,u(t))}function n(e){var t=i.indexOf(e);t>-1&&i.splice(t,2)}function r(){for(var e=1;e<i.length;e+=2)i[e]()}var o=g(e);o.setEventCallback(function(e){!1===e.redraw?e.redraw=void 0:r()});var i=[];return{subscribe:t,unsubscribe:n,redraw:r,render:o.render}}(window);m.setCompletionCallback(y.redraw);d.mount=function(e){return function(t,n){if(null===n)return e.render(t,[]),void e.unsubscribe(t);if(null==n.view&&"function"!=typeof n)throw new Error("m.mount(element, component) expects a component, not a vnode");var o=function(){e.render(t,r(n))};e.subscribe(t,o),e.redraw()}}(y);var w=v,b=function(e){if(""===e||null==e)return{};"?"===e.charAt(0)&&(e=e.slice(1));for(var t=e.split("&"),n={},r={},o=0;o<t.length;o++){var i=t[o].split("="),l=decodeURIComponent(i[0]),a=2===i.length?decodeURIComponent(i[1]):"";"true"===a?a=!0:"false"===a&&(a=!1);var u=l.split(/\]\[?|\[/),c=r;l.indexOf("[")>-1&&u.pop();for(var s=0;s<u.length;s++){var f=u[s],d=u[s+1],v=""==d||!isNaN(parseInt(d,10));if(""===f){var l=u.slice(0,s).join();null==n[l]&&(n[l]=Array.isArray(c)?c.length:0),f=n[l]++}else if("__proto__"===f)break;if(s===u.length-1)c[f]=a;else{var h=Object.getOwnPropertyDescriptor(c,f);null!=h&&(h=h.value),null==h&&(c[f]=h=v?[]:{}),c=h}}}return r},x=function(e){function n(t){var n=e.location[t].replace(/(?:%[a-f89][a-f0-9])+/gim,decodeURIComponent);return"pathname"===t&&"/"!==n[0]&&(n="/"+n),n}function r(e){return function(){null==i&&(i=a(function(){i=null,e()}))}}function o(e,t,n){var r=e.indexOf("?"),o=e.indexOf("#"),i=r>-1?r:o>-1?o:e.length;if(r>-1){var l=o>-1?o:e.length,a=b(e.slice(r+1,l));for(var u in a)t[u]=a[u]}if(o>-1){var c=b(e.slice(o+1));for(var u in c)n[u]=c[u]}return e.slice(0,i)}var i,l="function"==typeof e.history.pushState,a="function"==typeof t?t:setTimeout,u={prefix:"#!"};return u.getPath=function(){switch(u.prefix.charAt(0)){case"#":return n("hash").slice(u.prefix.length);case"?":return n("search").slice(u.prefix.length)+n("hash");default:return n("pathname").slice(u.prefix.length)+n("search")+n("hash")}},u.setPath=function(t,n,r){var i={},a={};if(t=o(t,i,a),null!=n){for(var c in n)i[c]=n[c];t=t.replace(/:([^\/]+)/g,function(e,t){return delete i[t],n[t]})}var s=h(i);s&&(t+="?"+s);var f=h(a);if(f&&(t+="#"+f),l){var d=r?r.state:null,v=r?r.title:null;e.onpopstate(),r&&r.replace?e.history.replaceState(d,v,u.prefix+t):e.history.pushState(d,v,u.prefix+t)}else e.location.href=u.prefix+t},u.defineRoutes=function(t,n,i){function a(){var r=u.getPath(),l={},a=o(r,l,l),c=e.history.state;if(null!=c)for(var s in c)l[s]=c[s];for(var f in t){var d=new RegExp("^"+f.replace(/:[^\/]+?\.{3}/g,"(.*?)").replace(/:[^\/]+/g,"([^\\/]+)")+"/?$");if(d.test(a))return void a.replace(d,function(){for(var e=f.match(/:[^\/]+/g)||[],o=[].slice.call(arguments,1,-2),i=0;i<e.length;i++)l[e[i].replace(/:|\./g,"")]=decodeURIComponent(o[i]);n(t[f],l,r,f)})}i(r,l)}l?e.onpopstate=r(a):"#"===u.prefix.charAt(0)&&(e.onhashchange=a),a()},u};d.route=function(e,t){var n,o,i,l,a,u=x(e),c=function(e){return e},s=function(e,s,f){if(null==e)throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined");var d=function(){null!=n&&t.render(e,n(r(o,i.key,i)))},v=function(e){if(e===s)throw new Error("Could not resolve default route "+s);u.setPath(s,null,{replace:!0})};u.defineRoutes(f,function(e,t,r){var u=a=function(e,s){u===a&&(o=null==s||"function"!=typeof s.view&&"function"!=typeof s?"div":s,i=t,l=r,a=null,n=(e.render||c).bind(e),d())};e.view||"function"==typeof e?u({},e):e.onmatch?w.resolve(e.onmatch(t,r)).then(function(t){u(e,t)},v):u(e,"div")},v),t.subscribe(e,d)};return s.set=function(e,t,n){null!=a&&(n=n||{},n.replace=!0),a=null,u.setPath(e,t,n)},s.get=function(){return l},s.prefix=function(e){u.prefix=e},s.link=function(e){e.dom.setAttribute("href",u.prefix+e.attrs.href),e.dom.onclick=function(e){if(!(e.ctrlKey||e.metaKey||e.shiftKey||2===e.which)){e.preventDefault(),e.redraw=!1;var t=this.getAttribute("href");0===t.indexOf(u.prefix)&&(t=t.slice(u.prefix.length)),s.set(t,void 0,void 0)}}},s.param=function(e){return void 0!==i&&void 0!==e?i[e]:i},s}(window,y),d.withAttr=function(e,t,n){return function(r){t.call(n||this,e in r.currentTarget?r.currentTarget[e]:r.currentTarget.getAttribute(e))}};var T=g(window);d.render=T.render,d.redraw=y.redraw,d.request=m.request,d.jsonp=m.jsonp,d.parseQueryString=b,d.buildQueryString=h,d.version="1.1.7",d.vnode=r,e.exports=d}()}).call(t,n(7).setImmediate,n(1))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";(function(e){function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=r(o),l=n(4),a=n(10),u=r(a);t.default=function(t){if(e.browser)return{oncreate:function(e){return document.title=(0,l.getTitle)(e)},view:function(){return(0,i.default)("",(0,i.default)("header","HEADER"),(0,i.default)(t),(0,i.default)("footer","FOOTER"))}};u.default}}).call(t,n(3))},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(s===setTimeout)return setTimeout(e,0);if((s===n||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}function i(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function l(){p&&v&&(p=!1,v.length?h=v.concat(h):m=-1,h.length&&a())}function a(){if(!p){var e=o(l);p=!0;for(var t=h.length;t;){for(v=h,h=[];++m<t;)v&&v[m].run();m=-1,t=h.length}v=null,p=!1,i(e)}}function u(e,t){this.fun=e,this.array=t}function c(){}var s,f,d=e.exports={};!function(){try{s="function"==typeof setTimeout?setTimeout:n}catch(e){s=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var v,h=[],p=!1,m=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new u(e,t)),1!==h.length||p||o(a)},u.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=c,d.addListener=c,d.once=c,d.off=c,d.removeListener=c,d.removeAllListeners=c,d.emit=c,d.prependListener=c,d.prependOnceListener=c,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return function(t){return console.log(e,t),t}},o=function(e){return e.state&&e.state.title?e.state.title():"Mithril SSR"};t.log=r,t.getTitle=o},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(6),i=r(o),l=n(0),a=r(l),u=n(9),c=r(u);a.default.route.prefix(""),(0,i.default)(function(){a.default.route(document.body,"/",c.default)})},function(e,t,n){/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function(t,n){e.exports=n()}(0,function(){var e,t=[],n=document,r=n.documentElement.doScroll,o=(r?/^loaded|^c/:/^loaded|^i|^c/).test(n.readyState);return o||n.addEventListener("DOMContentLoaded",e=function(){for(n.removeEventListener("DOMContentLoaded",e),o=1;e=t.shift();)e()}),function(e){o?setTimeout(e,0):t.push(e)}})},function(e,t,n){(function(e){function r(e,t){this._id=e,this._clearFn=t}var o=void 0!==e&&e||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;t.setTimeout=function(){return new r(i.call(setTimeout,o,arguments),clearTimeout)},t.setInterval=function(){return new r(i.call(setInterval,o,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(o,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(8),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(t,n(1))},function(e,t,n){(function(e,t){!function(e,n){"use strict";function r(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var r={callback:e,args:t};return c[u]=r,a(u),u++}function o(e){delete c[e]}function i(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}function l(e){if(s)setTimeout(l,0,e);else{var t=c[e];if(t){s=!0;try{i(t)}finally{o(e),s=!1}}}}if(!e.setImmediate){var a,u=1,c={},s=!1,f=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?function(){a=function(e){t.nextTick(function(){l(e)})}}():function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?function(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"==typeof n.data&&0===n.data.indexOf(t)&&l(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),a=function(n){e.postMessage(t+n,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){l(e.data)},a=function(t){e.port2.postMessage(t)}}():f&&"onreadystatechange"in f.createElement("script")?function(){var e=f.documentElement;a=function(t){var n=f.createElement("script");n.onreadystatechange=function(){l(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}():function(){a=function(e){setTimeout(l,0,e)}}(),d.setImmediate=r,d.clearImmediate=o}}("undefined"==typeof self?void 0===e?this:e:self)}).call(t,n(1),n(3))},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),i=r(o),l=n(11),a=r(l),u=n(12),c=r(u),s={"/":(0,i.default)(a.default),"/child":(0,i.default)(c.default)};t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4);t.default=function(e){return m("html",{lang:"js"},m("head",null,m("title",null,(0,r.getTitle)(e))),m("body",null,template(e),m("script",{src:"./assets/javascripts/bundle.js"}),m("script",null,"requestAnimationFrame(function()","{","var l = document.createElement('link'); l.setAttribute('rel', 'stylesheet'); l.setAttribute('href', '/assets/stylesheets/bundle.css'); document.head.appendChild(l);","}",");")))}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),i=(r(o),n(0)),l=r(i);t.default={oninit:function(e){return e.state.title="HOME PAGE"},view:function(){return(0,l.default)("a",{href:"#!/child"},"go to child")}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),i=(r(o),n(0)),l=r(i);t.default={oninit:function(e){return e.state.title="CHILD PAGE"},view:function(e){return(0,l.default)("a",{href:"#!/"},"go home")}}}]);