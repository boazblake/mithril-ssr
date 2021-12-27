'use strict';
import domready from 'domready';
import m from 'mithril';
import routes   from './routes';

domready(function(){
  m.route(document.body, '/', routes);
});
