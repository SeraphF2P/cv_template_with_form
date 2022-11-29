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
    shape.style.translate = `(${Math.floor(window.innerWidth * Math.random())}px,
    ${Math.floor(window.innerHeight * Math.random() + 300)}px)`;
    shape.style.rotate = `rotate(${360 * Math.random()}deg)`;
}
let Xaxis = window.innerWidth;
let Yaxis = window.innerHeight;
function moving() {
    shapesCollection.forEach(shape => {
        shape.style.transform = `
        translate(
        ${(Xaxis * Math.random() - 150)}px
        ,${Yaxis * Math.random()}px)
        rotate(${360 * Math.random()}deg)`;
        console.log(shape.style.translate.valueOf());
    });
}
for (let i = 0; i < 30; i++) {
    create_shape();
}
moving();
window.onload = () => {
    moving();
    setInterval(() => {
        moving();
    }, 60000);
};
