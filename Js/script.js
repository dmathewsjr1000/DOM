//  Delcaring Variables
const mainEl = document.querySelector('main');

mainEl.style.backgroundColor = 'var(--main-bg)';

// const Ti = document.createElement('h1');
mainEl.innerHTML = ('<h1> DOM Manipulation </h1>');
// mainEl.appendChild(Ti);

mainEl.className = 'flex-ctr';

const topMenuEl = document.querySelector('nav'); 
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.style.height = '100%';
topMenuEl.className = 'flex-around';


const menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

  for (let i = 0; i < menuLinks.length; i++) {
    const a = document.createElement('a');
    a.setAttribute('href',menuLinks[i].href);
    a.textContent = menuLinks[i].text;
     topMenuEl.appendChild(a);
    
  }