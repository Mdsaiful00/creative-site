let navBar = document.querySelector('.navbar');
let lightBtn = document.querySelector('#light-btn');
let searchBtn = document.querySelector('#search-btn');
let barsBtn = document.querySelector('#bars-btn');
let colorBtn = document.querySelector('#color-btn');
let bgBtn = document.querySelector('#bg-btn');
let searchBox = document.querySelector('.search-box');
let colorBox = document.querySelector('.color-box');
let userBtn = document.querySelector('#user-btn');
let userBox = document.querySelector('.user-box');
let loginForm = document.querySelector('.login-form');
let loginBtn = document.querySelector('#login-btn');

let registerBtn = document.querySelector('#register-btn');
let registerForm = document.querySelector('.register-form');

window.onscroll = () => {
    userBox.classList.remove('active');
    loginForm.classList.remove('active');
    registerForm.classList.remove('active');
}
searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBox.classList.toggle('active');
    colorBox.classList.remove('active');
    userBox.classList.remove('active');
    navBar.classList.remove('active');
});
colorBtn.addEventListener('click', () => {
    colorBtn.classList.toggle('fa-times');
    colorBox.classList.toggle('active');
    searchBox.classList.remove('active');
    userBox.classList.remove('active');
    navBar.classList.remove('active');

});
userBtn.addEventListener('click', () => {
    userBtn.classList.toggle('fa-times');
    userBox.classList.toggle('active');
    searchBox.classList.remove('active');
    colorBox.classList.remove('active')
    navBar.classList.remove('active');
});

barsBtn.addEventListener('click', () => {
    barsBtn.classList.toggle('fa-times');
    navBar.classList.toggle('active');
    userBox.classList.remove('active');
    colorBox.classList.remove('active');
    searchBox.classList.remove('active');

});

loginBtn.onclick = () => {
    loginForm.classList.toggle('active');
    registerForm.classList.remove('active');
    searchBox.classList.remove('active');
    colorBox.classList.remove('active');
    navBar.classList.remove('active');
    userBox.classList.remove('active');
}
registerBtn.onclick = () => {
    registerForm.classList.toggle('active');
    loginForm.classList.remove('active');
    searchBox.classList.remove('active');
    colorBox.classList.remove('active');
    navBar.classList.remove('active');
    userBox.classList.remove('active');

}

document.querySelectorAll('.color-box .color').forEach(btn => {
    btn.onclick = () => {
        let color = btn.style.background;
        document.querySelector(':root').style.setProperty('--main-color', color)
    }
});
bgBtn.onclick = () => {
    bgBtn.classList.toggle('fa-sun');
    if (bgBtn.classList.contains('fa-sun')) {
        document.body.classList.add('active')
    } else {
        document.body.classList.remove('active');
    }
};























window.scroll = () => {
    searchBox.classList.remove('active');
    colorBox.classList.remove('active');
    userBox.classList.remove('active');
    navBar.classList.remove('active');
}





