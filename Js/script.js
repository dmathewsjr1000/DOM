//  Delcaring Variables
const mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = ('<h1> DOM Manipulation </h1>');
mainEl.className = 'flex-ctr';

const topMenuEl = document.querySelector('nav'); 
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.style.height = '100%';
topMenuEl.className = 'flex-around';

const subMenuEl = document.getElementById('sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.className = 'flex-around';
subMenuEl.style.position = absolute;
subMenuEl.style.top = '0';


let menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];
  
  for (let i = 0; i < menuLinks.length; i++) {
    const a = document.createElement('a');
    a.setAttribute('href', menuLinks[i].href);
    a.textContent = menuLinks[i].text;
     topMenuEl.appendChild(a);
   
  } 
  const topMenuLinks = topMenuEl.querySelectorAll('a');
  topMenuEl.addEventListener('click', function callback (e) {

    
        e.preventDefault();
        
    return e !== a;
    console.log(a);

    
  });