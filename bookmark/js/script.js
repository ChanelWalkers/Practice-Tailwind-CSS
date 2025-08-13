const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
const logo = document.getElementById('logo');
// Tabs menu event listener
tabs.forEach((tab) => tab.addEventListener('click', onTabClick));

function onTabClick(e) {
    tabs.forEach((tab) => {
        tab.children[0].classList.remove(
            'border-softRed',
            'border-b-4',
            'md:border-b-0',
        )
    })

    panels.forEach((panel) => panel.classList.add('hidden'))

    // Activate a new tab and panel based on the target
    e.target.classList.add(
        'border-softRed',
        'border-b-4',
    )
    const classString = e.target.getAttribute('data-target');
    document.getElementById('panels').getElementsByClassName(classString)[0]
        .classList.remove('hidden');
}

const menuBtn = document.querySelector('#menu-btn');
const menu = document.querySelector('#menu');
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
    menuBtn.classList.toggle('open');

    if (menu.classList.contains('flex')) {
        logo.setAttribute('src', './images/logo-bookmark-footer.svg');
    } else {
        logo.setAttribute('src', './images/logo-bookmark.svg');
    }
});