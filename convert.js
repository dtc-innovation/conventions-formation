import {Previewer} from 'https://unpkg.com/pagedjs@0.1.38/dist/paged.esm.js';
import {dateFormat, lookup} from './mustache.js';
import {getParams} from './url.js';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('[data-markdown]');
  const title = document.querySelector('head > title').textContent;
  const params = getParams(location.search);

  Mustache.Context.prototype.lookup = lookup;

  const md = new markdownit('default', {
    html: true,
    linkify: true,
    typographer: true,
    quotes: ['«\xA0', '\xA0»', '‹\xA0', '\xA0›']
  });

  md.use(markdownItAttrs);

  root.innerHTML = md.render(
    Mustache.render(root.innerHTML, {...params, dateFormat, title})
  );

  new Previewer().preview();
});
