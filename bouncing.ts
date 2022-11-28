
const bg_animation = document.querySelector('.bg_animation');
const shapes = ['circle','square','triangle','pentagon']
let shapesCollection: HTMLDivElement[] = [];
function createshape (){
    let shape = document.createElement('div');
    let random = Math.floor(Math.random() * shapes.length);
    shape.classList.add('shape');
    shape.classList.add(shapes[random]);
    bg_animation?.append(shape);
    shapesCollection.push(shape);
    shape.style.translate =  `(${Math.floor(window.innerWidth * Math.random())}px,
    ${Math.floor(window.innerHeight * Math.random() + 300)}px)`
    shape.style.rotate =  `rotate(${ 360 * Math.random()}deg)`
}
let Xaxis = window.innerWidth;
let Yaxis = window.innerHeight;

function moving(){
    shapesCollection.forEach(shape =>{
        shape.style.transform =  `
        translate(
        ${(Xaxis* Math.random() - 150)}px
        ,${Yaxis* Math.random()}px)
        rotate(${360 * Math.random()}deg)`;
        console.log(shape.style.translate.valueOf())
    })
}
for (let i = 0; i < 20; i++) {
    createshape()
}
moving()

// let direction = 'toBottomLeft';
// function change_movement(){
//     switch(direction){
//         case 'toBottomLeft':
//             Xaxis = 0;
//             Yaxis = window.innerHeight;
//             break;
//             case 'toTopLeft' :
//                 Xaxis = 0;
//                 Yaxis = 0;
//                 break;     
//                 case 'toTopRight' :
//                     Xaxis = window.innerWidth;
//                     Yaxis = 0;
//                     break;
//                       case 'toBottomRight' :
//                         Xaxis = window.innerWidth;
//                         Yaxis = window.innerHeight;
//                         break;
//     }
// }

// function change_direction(){
// if(direction== 'toTopLeft' && Xaxis == 0 ){
//     direction = 'toTopRight';
//     }else if(direction== 'toBottomLeft' && Xaxis == 0  ){
//         direction = 'toBottomRight';
//     } 
// if(direction== 'toTopRight' && Yaxis == 0 ){
//     direction = 'toBottomRight';
//         }else if(direction== 'toTopLeft' && Yaxis == 0 ){
//             direction = 'toBottomLeft';
//                 }
// if(Xaxis >= (window.innerWidth - 100)  && direction== 'toTopRight'){
//     direction = 'toTopLeft';
//             } 
//     if(Xaxis >= (window.innerWidth - 100) && direction== 'toBottomRight'){
//             direction = 'toBottomLeft';
//                     } 
//     if(Yaxis >= (window.innerHeight ) && direction== 'toBottomLeft'){
//                     direction = 'toTopLeft';
//                             } 
//     if(Yaxis >= window.innerHeight && direction== 'toBottomRight'){
//                      direction = 'toTopRight';
//                         }
// }


