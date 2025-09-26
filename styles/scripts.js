// styles/scripts.js
document.addEventListener("DOMContentLoaded", function(){
  // Mobile nav toggle
  const toggle = document.querySelector('.mobile-toggle');
  if(toggle){
    toggle.addEventListener('click', ()=> {
      document.documentElement.classList.toggle('nav-open');
    });
  }

  // Dark mode toggle
  const dm = document.querySelector('#dark-mode-toggle');
  if(dm){
    dm.addEventListener('click', ()=>{
      document.documentElement.classList.toggle('dark');
      dm.classList.toggle('active');
    });
  }

  // Publications filter
  const filterInputs = document.querySelectorAll('[data-pub-filter]');
  if(filterInputs.length){
    filterInputs.forEach(inp => {
      inp.addEventListener('change', applyPubFilter);
    });
    function applyPubFilter(){
      const checked = [...document.querySelectorAll('[data-pub-filter]:checked')].map(n=>n.value);
      const items = document.querySelectorAll('.pub-item');
      items.forEach(it=>{
        const tags = (it.dataset.tags||"").split(',');
        if(checked.length===0){ it.style.display='block'; return;}
        const common = tags.filter(t => checked.includes(t));
        it.style.display = common.length>0 ? 'block' : 'none';
      });
    }
  }
});
