(function(){
  "use strict";

  var contentEl = document.getElementById('content');
  var sidebarEl = document.getElementById('sidebar');
  var tocEl = document.getElementById('toc');
  var scrimEl = document.getElementById('scrim');
  var menuBtn = document.getElementById('menuBtn');
  var themeBtn = document.getElementById('themeBtn');
  var searchInput = document.getElementById('searchInput');
  var searchResults = document.getElementById('searchResults');

  var manifest = (typeof MANIFEST !== 'undefined') ? MANIFEST : [];

  /* ---------- section labels ---------- */
  var SECTION_LABELS = {
    '00-start-here': 'Start Here',
    '01-agile-foundations': 'Agile Foundations',
    '02-scrum-framework': 'The Scrum Framework',
    '03-professional-scrum-competencies': 'Professional Scrum Competencies',
    '04-scrum-master-role': 'The Scrum Master Role',
    '05-scaling-frameworks': 'Scaling Frameworks',
    '06-real-life-scenarios': 'Real-Life Scenarios',
    '07-certifications': 'Certifications',
    '08-templates-and-toolkit': 'Templates & Toolkit',
    '09-interview-prep': 'Interview Prep',
    '10-glossary': 'Glossary'
  };
  var SUBGROUP_LABELS = {
    'scrum-org': 'Scrum.org',
    'scrum-alliance': 'Scrum Alliance',
    'safe': 'Scaled Agile (SAFe)'
  };

  function sectionKey(path){
    var parts = path.split('/');
    if (parts.length === 1) return parts[0].replace(/\.md$/, '');
    return parts[0];
  }
  function subgroupKey(path){
    var parts = path.split('/');
    return parts.length === 3 ? parts[1] : null;
  }
  function humanize(name){
    return name.replace(/\.md$/, '').replace(/^\d+-/, '').replace(/-/g, ' ')
      .replace(/\b\w/g, function(c){ return c.toUpperCase(); });
  }

  /* ---------- build grouped tree ---------- */
  function buildTree(){
    var order = [];
    var groups = {};
    manifest.forEach(function(item){
      var key = sectionKey(item.path);
      if (!groups[key]){ groups[key] = { key:key, items:[], subgroups:{}, subOrder:[] }; order.push(key); }
      var sub = subgroupKey(item.path);
      if (sub){
        if (!groups[key].subgroups[sub]){ groups[key].subgroups[sub] = []; groups[key].subOrder.push(sub); }
        groups[key].subgroups[sub].push(item);
      } else {
        groups[key].items.push(item);
      }
    });
    order.sort();
    return order.map(function(k){ return groups[k]; });
  }

  var tree = buildTree();

  /* ---------- sidebar render ---------- */
  function renderSidebar(activePath){
    sidebarEl.innerHTML = '';
    tree.forEach(function(group){
      var num = group.key.match(/^\d+/);
      num = num ? num[0] : '·';
      var label = SECTION_LABELS[group.key] || humanize(group.key);
      var containsActive = group.items.concat(Object.keys(group.subgroups).reduce(function(a,s){return a.concat(group.subgroups[s]);},[]))
        .some(function(i){ return i.path === activePath; });

      var wrap = document.createElement('div');
      wrap.className = 'sb-group' + (containsActive ? ' open' : '');

      var head = document.createElement('button');
      head.className = 'sb-group-head';
      head.innerHTML = '<span class="sb-num">' + num + '</span><span class="sb-group-title">' + label + '</span>' +
        '<svg class="sb-caret" width="10" height="10" viewBox="0 0 10 10"><path d="M3 1l4 4-4 4" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      head.addEventListener('click', function(){ wrap.classList.toggle('open'); });
      wrap.appendChild(head);

      var list = document.createElement('ul');
      list.className = 'sb-items';

      function addItem(item){
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = '#/' + item.path.replace(/\.md$/, '');
        a.textContent = item.title;
        if (item.path === activePath) a.className = 'active';
        li.appendChild(a);
        list.appendChild(li);
      }

      group.items.forEach(addItem);
      group.subOrder.forEach(function(sub){
        var subLi = document.createElement('li');
        subLi.style.margin = '10px 0 2px';
        var subLabel = document.createElement('div');
        subLabel.textContent = SUBGROUP_LABELS[sub] || humanize(sub);
        subLabel.style.cssText = 'font-family:var(--mono);font-size:10.5px;color:var(--ink-faint);text-transform:uppercase;letter-spacing:.05em;padding:4px 10px;';
        subLi.appendChild(subLabel);
        list.appendChild(subLi);
        group.subgroups[sub].forEach(addItem);
      });

      wrap.appendChild(list);
      sidebarEl.appendChild(wrap);
    });
  }

  /* ---------- TOC (right rail) from rendered headings ---------- */
  function renderToc(){
    var headings = contentEl.querySelectorAll('.md h2, .md h3');
    if (!headings.length){ tocEl.innerHTML = ''; return; }
    var html = '<div class="toc-title">On this page</div><ul class="toc-list">';
    headings.forEach(function(h, i){
      var id = 'h-' + i;
      h.id = id;
      html += '<li><a class="' + (h.tagName === 'H3' ? 'h3' : '') + '" href="#' + id + '" data-jump="' + id + '">' + h.textContent + '</a></li>';
    });
    html += '</ul>';
    tocEl.innerHTML = html;
    tocEl.querySelectorAll('a[data-jump]').forEach(function(a){
      a.addEventListener('click', function(e){
        e.preventDefault();
        var el = document.getElementById(a.getAttribute('data-jump'));
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* ---------- prev/next ---------- */
  function renderPageNav(activePath){
    var idx = manifest.findIndex(function(i){ return i.path === activePath; });
    if (idx === -1) return '';
    var prev = manifest[idx - 1];
    var next = manifest[idx + 1];
    var html = '<div class="page-nav">';
    html += prev
      ? '<a href="#/' + prev.path.replace(/\.md$/, '') + '"><span class="pn-label">Previous</span><span class="pn-title">' + prev.title + '</span></a>'
      : '<span></span>';
    html += next
      ? '<a class="pn-next" href="#/' + next.path.replace(/\.md$/, '') + '"><span class="pn-label">Next</span><span class="pn-title">' + next.title + '</span></a>'
      : '<span></span>';
    html += '</div>';
    return html;
  }

  /* ---------- landing page ---------- */
  function renderLanding(){
    var html = '<div class="landing-hero"><p class="eyebrow">Zero to Master</p>' +
      '<h1 style="font-size:32px;letter-spacing:-.02em;margin:0 0 10px;">Scrum Master: Zero to Master</h1>' +
      '<p style="color:var(--ink-muted);font-size:15.5px;line-height:1.65;max-width:62ch;">A complete, free curriculum for developers becoming Scrum Masters — the framework itself, the competencies that separate a Scrum Master from someone who just runs meetings, twenty real-life scenarios worked end to end, and full study guides for every major certification.</p></div>';
    html += '<div class="landing-grid">';
    tree.forEach(function(group){
      var num = (group.key.match(/^\d+/) || ['·'])[0];
      var label = SECTION_LABELS[group.key] || humanize(group.key);
      var first = group.items[0] || (group.subOrder.length ? group.subgroups[group.subOrder[0]][0] : null);
      if (!first) return;
      var count = group.items.length + group.subOrder.reduce(function(n,s){ return n + group.subgroups[s].length; }, 0);
      html += '<a class="landing-card" href="#/' + first.path.replace(/\.md$/, '') + '">' +
        '<span class="lc-num">' + num + '</span><span class="lc-title">' + label + '</span>' +
        '<span class="lc-desc">' + count + ' page' + (count === 1 ? '' : 's') + '</span></a>';
    });
    html += '</div>';
    contentEl.innerHTML = html;
    tocEl.innerHTML = '';
    renderSidebar(null);
    document.title = 'Scrum Master: Zero to Master';
  }

  /* ---------- route a content page ---------- */
  function renderPage(path){
    var item = manifest.find(function(i){ return i.path === path; });
    contentEl.innerHTML = '<div class="loading">Loading…</div>';
    fetch('content/' + path)
      .then(function(res){
        if (!res.ok) throw new Error('not found');
        return res.text();
      })
      .then(function(md){
        var body = (typeof marked !== 'undefined') ? marked.parse(md) : '<pre>' + md + '</pre>';
        var crumbLabel = SECTION_LABELS[sectionKey(path)] || humanize(sectionKey(path));
        contentEl.innerHTML =
          '<div class="crumb"><a href="#/">Guide</a> / ' + crumbLabel + '</div>' +
          '<div class="md">' + body + '</div>' +
          renderPageNav(path);
        document.title = (item ? item.title : humanize(path)) + ' — Scrum Master Guide';
        renderToc();
        rewriteRelativeLinks(path);
      })
      .catch(function(){
        contentEl.innerHTML = '<div class="crumb"><a href="#/">Guide</a></div><div class="md"><h1>Page not found</h1><p>That page doesn\'t exist yet. <a href="#/">Back to the guide.</a></p></div>';
      });
    renderSidebar(path);
  }

  /* rewrite relative .md links inside rendered content into hash routes */
  function rewriteRelativeLinks(currentPath){
    var baseParts = currentPath.split('/'); baseParts.pop();
    contentEl.querySelectorAll('.md a[href$=".md"], .md a[href*=".md#"]').forEach(function(a){
      var href = a.getAttribute('href');
      if (/^https?:\/\//.test(href)) return;
      var parts = baseParts.slice();
      href.split('/').forEach(function(seg){
        if (seg === '..') parts.pop();
        else if (seg !== '.') parts.push(seg);
      });
      var resolved = parts.join('/').replace(/\.md$/, '').replace(/\.md#/, '#');
      a.setAttribute('href', '#/' + resolved);
    });
  }

  /* ---------- router ---------- */
  function route(){
    var hash = location.hash.replace(/^#\/?/, '');
    closeSidebarMobile();
    if (!hash){ renderLanding(); window.scrollTo(0,0); return; }
    renderPage(hash + '.md');
    window.scrollTo(0,0);
  }
  window.addEventListener('hashchange', route);

  /* ---------- search ---------- */
  function runSearch(q){
    q = q.trim().toLowerCase();
    if (!q){ searchResults.classList.remove('open'); searchResults.innerHTML=''; return; }
    var matches = manifest.filter(function(i){
      return i.title.toLowerCase().indexOf(q) !== -1 || i.path.toLowerCase().indexOf(q) !== -1;
    }).slice(0, 18);
    if (!matches.length){
      searchResults.innerHTML = '<div class="search-empty">No matches for "' + q + '"</div>';
    } else {
      searchResults.innerHTML = matches.map(function(m){
        var label = SECTION_LABELS[sectionKey(m.path)] || humanize(sectionKey(m.path));
        return '<a href="#/' + m.path.replace(/\.md$/, '') + '"><span class="sr-section">' + label + '</span>' + m.title + '</a>';
      }).join('');
    }
    searchResults.classList.add('open');
  }
  searchInput.addEventListener('input', function(){ runSearch(searchInput.value); });
  searchInput.addEventListener('focus', function(){ if (searchInput.value) runSearch(searchInput.value); });
  document.addEventListener('click', function(e){
    if (!e.target.closest('.search-wrap')) searchResults.classList.remove('open');
  });
  searchResults.addEventListener('click', function(){ searchInput.value=''; searchResults.classList.remove('open'); });

  /* ---------- theme ---------- */
  function applyTheme(t){
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem('smg-theme', t);
  }
  themeBtn.addEventListener('click', function(){
    var cur = document.documentElement.getAttribute('data-theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    applyTheme(cur === 'dark' ? 'light' : 'dark');
  });
  var saved = localStorage.getItem('smg-theme');
  if (saved) applyTheme(saved);

  /* ---------- mobile sidebar ---------- */
  function closeSidebarMobile(){
    sidebarEl.classList.remove('open');
    scrimEl.classList.remove('open');
  }
  menuBtn.addEventListener('click', function(){
    sidebarEl.classList.toggle('open');
    scrimEl.classList.toggle('open');
  });
  scrimEl.addEventListener('click', closeSidebarMobile);

  /* ---------- init ---------- */
  route();
})();
