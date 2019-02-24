import {dateFormat, lookup} from './mustache.js';
import {getParams} from './url.js';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('[data-markdown]');
  const params = getParams(location.search);

  Mustache.Context.prototype.lookup = lookup;

  const md = new markdownit('default', {
    html: false,
    typographer: true,
    quotes: ['«\xA0', '\xA0»', '‹\xA0', '\xA0›']
  });

  md.use(markdownItAttrs);

  root.innerHTML = md.render(
    Mustache.render(root.innerHTML, {...params, dateFormat})
  );

  PagedPolyfill.preview();
});
