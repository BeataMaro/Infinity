// // //Close cookie window

const cookies = document.getElementById('cookies');
const cookieBtn = document.getElementById('btnCookies');

cookieBtn.onclick = function () {

    cookies.classList.add('hidden')

}


//hamburger menu

const body = document.body;

const navButton = document.querySelector("[data-js='navButton']");
const navLi = document.querySelectorAll('.header-nav_li');



navButton.onclick = function () {

    // let navBg = document.getElementById('header-nav_bg');
    // let navVisible = document.getElementById('header-nav_visible');
    // let navlist = document.getElementById('header-nav');


    // navBg.classList.toggle('hidden')
    // navlist.classList.toggle('hidden')

    // navVisible.setAttribute('hidden', true);

    console.log('Menu')

    body.classList.toggle('open');

}



// form validation



const form = document.forms.userForm;
const error = document.getElementById('error');
const message = document.getElementById('msg');
const reqInputs = form.querySelectorAll('[required]');



form.addEventListener('submit', function (ev) {

    ev.preventDefault()


    form.classList.add('is-submitted');
    console.log('wysłano')


    for (var i = 0; i < reqInputs.length; i++) {
        reqInputs[i].checkValidity()
    }


});