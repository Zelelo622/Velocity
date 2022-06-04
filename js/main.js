// Tabs
const tabsBtns = document.querySelectorAll('.tabs__nav button');
const tabsItems = document.querySelectorAll('.tabs__item');

function hideTabs() {
    tabsItems.forEach(item => item.classList.add('hide'));
    tabsBtns.forEach(btn => btn.classList.remove('active'));
}

function showTabs(index) {
    tabsItems[index].classList.remove('hide');
    tabsBtns[index].classList.add('active');
}

hideTabs();
showTabs(0);

tabsBtns.forEach((btn, index) => btn.addEventListener('click', () => {
    hideTabs();
    showTabs(index);
}));


// Anchors
const anchors = document.querySelectorAll('.menu a');

anchors.forEach(anc => {
    anc.addEventListener('click', function (event) {
        event.preventDefault();

        const id = anc.getAttribute('href');
        const elem = document.querySelector(id);
        window.scroll({
            top: elem.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});