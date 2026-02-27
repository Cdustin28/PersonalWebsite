(function(){
  // mark active nav link
  const path = location.pathname.replace(/index\.html$/, "");
  document.querySelectorAll('[data-nav]').forEach(a=>{
    const href = a.getAttribute('href');
    if(!href) return;
    const norm = href.replace(/index\.html$/, "");
    if(path.endsWith(norm) || (path === "/" && (norm === "./" || norm === "/"))){
      a.classList.add('active');
    }
  });
})();
