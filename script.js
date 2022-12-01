"use strict";
const bg_animation = document.querySelector('.bg_animation');
const shapes = ['triangle', 'pentagon', 'empty_circle', 'empty_square'];
let shapesCollection = [];
function create_shape() {
    let shape = document.createElement('div');
    let random = Math.floor(Math.random() * shapes.length);
    shape.classList.add('shape');
    shape.classList.add(shapes[random]);
    bg_animation === null || bg_animation === void 0 ? void 0 : bg_animation.append(shape);
    shapesCollection.push(shape);
    shape.style.translate = `(${(Math.floor(window.innerWidth + 150) * Math.random() + 150)}px,
    ${Math.floor(window.innerHeight * Math.random() + 300)}px)`;
    shape.style.rotate = `rotate(${180 * Math.random()}deg)`;
    shape.style.scale = `${0.5 + (0.5 * Math.random())}`;
}
let Xaxis = window.innerWidth;
let Yaxis = window.innerHeight;
function moving() {
    shapesCollection.forEach(shape => {
        shape.style.transform = `
        translate(
        ${(Xaxis * Math.random() - 150)}px
        ,${Yaxis * Math.random()}px)
        rotate(${180 * Math.random()}deg)`;
    });
}
for (let i = 0; i < 40; i++) {
    create_shape();
}
moving();
window.onload = () => {
    moving();
    setInterval(() => {
        moving();
    }, 60000);
};
const skills = Array.from(document.querySelectorAll('.skill'));
const progress_circle_1 = skills[0].querySelector('circle');
const progress_circle_2 = skills[1].querySelector('circle');
const progress_circle_3 = skills[2].querySelector('circle');
const progress_circle_4 = skills[3].querySelector('circle');
const progress_circle_5 = skills[4].querySelector('circle');
const progress_circle_6 = skills[5].querySelector('circle');
const per_1 = skills[0].querySelector('.numb');
const per_2 = skills[1].querySelector('.numb');
const per_3 = skills[2].querySelector('.numb');
const per_4 = skills[3].querySelector('.numb');
const per_5 = skills[4].querySelector('.numb');
const per_6 = skills[5].querySelector('.numb');
function calc_persent(div, percent) {
    let num = 0;
    setInterval(() => {
        if ((percent / 472) * 100 > num) {
            num += 5;
            div.innerHTML = `${num}%`;
        }
        else {
            clearInterval;
        }
    }, 250);
}
let first_time_scroll = true;
function progress() {
    if (scrollY > 880 && scrollY < 1280 && first_time_scroll) {
        progress_circle_1.style.strokeDashoffset = '0';
        progress_circle_2.style.strokeDashoffset = '100';
        progress_circle_3.style.strokeDashoffset = '120';
        progress_circle_4.style.strokeDashoffset = '200';
        progress_circle_5.style.strokeDashoffset = '260';
        progress_circle_6.style.strokeDashoffset = '400';
        calc_persent(per_1, 472);
        calc_persent(per_2, 372);
        calc_persent(per_3, 352);
        calc_persent(per_4, 272);
        calc_persent(per_5, 212);
        calc_persent(per_6, 72);
        first_time_scroll = false;
    }
}
let nav_is_visible = true;
const nav = document.querySelector('.nav_bar');
window.onscroll = () => {
    progress();
    if (nav_is_visible) {
        nav.style.translate = '0px -70px';
        nav_is_visible = !nav_is_visible;
    }
    else if (nav_is_visible == false) {
        setTimeout(() => { nav.style.translate = '0px 0px'; }, 200);
        nav_is_visible = !nav_is_visible;
    }
};
const textDisplay = document.querySelector('.text_effect');
const phrases = ['Hello World !!!', 'junior web-developer', 'love to code'];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;
function loop() {
    isEnd = false;
    textDisplay.innerHTML = currentPhrase.join('');
    if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j]);
            j++;
            textDisplay.innerHTML = currentPhrase.join('');
        }
        if (isDeleting && j <= phrases[i].length) {
            currentPhrase.pop();
            j--;
            textDisplay.innerHTML = currentPhrase.join('');
        }
        if (j == phrases[i].length) {
            isEnd = true;
            isDeleting = true;
        }
        if (isDeleting && j === 0) {
            currentPhrase = [];
            isDeleting = false;
            i++;
            if (i === phrases.length) {
                i = 0;
            }
        }
    }
    const spedUp = Math.random() * (80 - 50) + 50;
    const normalSpeed = Math.random() * (300 - 200) + 200;
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
    setTimeout(loop, time);
}
loop();
const humburger_menu_icon = document.querySelector('.humburger_menu_icon');
const sections_menu = document.querySelector('.sections_menu');
const sections_list_items = Array.from(sections_menu.querySelectorAll('li'));
humburger_menu_icon === null || humburger_menu_icon === void 0 ? void 0 : humburger_menu_icon.addEventListener('click', () => {
    sections_list_items.forEach(li => li.classList.toggle('show'));
});
sections_list_items.forEach(li => {
    li.addEventListener('click', () => {
        sections_list_items.forEach(li => li.classList.remove('show'));
    });
});
const theme_list_btns = Array.from(document.querySelectorAll('.theme_list_btn'));
const theme_list = document.querySelector('.theme_list');
theme_list_btns === null || theme_list_btns === void 0 ? void 0 : theme_list_btns.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('checked');
        theme_list === null || theme_list === void 0 ? void 0 : theme_list.classList.toggle('checked');
    });
});
