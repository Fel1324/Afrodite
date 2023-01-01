function openMenu(){
    document.querySelector('aside.menu').classList.add('menu-open');
    document.body.style.overflow = 'hidden';
}

function closeMenu(){
    document.querySelector('aside.menu').classList.remove('menu-open');
    document.body.style.overflow = 'auto';
}
