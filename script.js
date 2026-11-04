(function(){
  const button=document.querySelector('[data-theme-button]');
  const root=document.documentElement;
  let saved=null;try{saved=localStorage.getItem('anuja-portfolio-theme')}catch(e){}
  if(saved==='dark'||saved==='light')root.dataset.theme=saved;
  function updateThemeButton(){if(button){const dark=root.dataset.theme==='dark';button.setAttribute('aria-label',dark?'Switch to light mode':'Switch to dark mode');button.setAttribute('title',dark?'Switch to light mode':'Switch to dark mode');}}
  updateThemeButton();
  if(button)button.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';try{localStorage.setItem('anuja-portfolio-theme',root.dataset.theme)}catch(e){}updateThemeButton();});
  document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{
    const filter=btn.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(other=>{other.classList.toggle('is-active',other===btn);other.setAttribute('aria-pressed',other===btn?'true':'false');});
    document.querySelectorAll('[data-category]').forEach(card=>card.hidden=filter!=='all'&&card.dataset.category!==filter);
  }));
})();
