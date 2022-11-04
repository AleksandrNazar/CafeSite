//menu burger
const menuButton = document.querySelector('.nav-button');
const mobileMenu = document.querySelector('.mobile-header-nav');

menuButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
});


//class active
const buttons = document.querySelectorAll('.button');

buttons.forEach(function(item) {
    item.addEventListener('click', function() {
        buttons.forEach(function(item) {
            item.classList.remove('active');
        });
        this.classList.add('active');
    });
});


//menu images change
const cardButtons = document.querySelectorAll('[data-card]');
const cardBlocks = document.querySelectorAll('[data-card-content]');

cardButtons.forEach(function(item) {
    item.addEventListener('click', function() {
        cardBlocks.forEach(function(item) {
            item.classList.add('hidden')
        });

        const cardBlock = document.querySelector('#' + this.dataset.card);
        cardBlock.classList.remove('hidden');
    });
});


//fixed header
const header = document.querySelector('header');

window.onscroll = function headerFix () {
    if(pageYOffset > 100) {
        header.classList.add('header-fixed')
    } else {
        header.classList.remove('header-fixed')
    }
};

//open/closed footer links
const footerLinksHead = document.querySelectorAll('.footer-links-head');

footerLinksHead.forEach(function(item) {
    item.addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('hidden')
    });
});
