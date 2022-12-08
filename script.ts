
const bg_animation = document.querySelector('.bg_animation') as HTMLElement;
const main = document.querySelector('main') as HTMLElement;;
const body = document.querySelector('body');
const shapes = ['triangle','pentagon','empty_circle','empty_square']
let shapesCollection: HTMLDivElement[] = [];
function create_shape (){
    let shape = document.createElement('div');
    let random = Math.floor(Math.random() * shapes.length);
    shape.classList.add('shape');
    shape.classList.add(shapes[random]);
    bg_animation?.append(shape);
    shape.style.transform =  `translate(${((bg_animation?.offsetWidth!) * Math.random() - 150)}px,${(bg_animation?.offsetHeight!) * Math.random() - 150}px)
    rotate(${ 180 * Math.random()}deg)
    scale(${ 0.5 + (0.5 * Math.random())})
    `
    shapesCollection.push(shape);
}
let Xaxis = bg_animation?.offsetWidth;
let Yaxis = bg_animation?.offsetHeight;

function moving(){
  
    shapesCollection.forEach(shape =>{
        shape.style.transform =  `
        translate(
        ${((Xaxis! - 150) * Math.random() )}px
        ,${(Yaxis!  - 150) * Math.random()}px)
        rotate(${360 * Math.random()}deg)`;
    })
}

window.onload = () =>{
  for (let i = 0; i < 50; i++) {
    create_shape()
}
shapesCollection.forEach(shape =>{
  shape.style.transition = 'transform 90s linear, rotate 90s linear';
})
    moving()
    setInterval(()=>{
        moving()
    },80000)
}

const skills : HTMLDivElement[] = Array.from(document.querySelectorAll('.skill'));

const progress_circle_1 = skills[0].querySelector('circle') as SVGCircleElement;
const progress_circle_2 = skills[1].querySelector('circle') as SVGCircleElement;
const progress_circle_3 = skills[2].querySelector('circle') as SVGCircleElement;
const progress_circle_4 = skills[3].querySelector('circle') as SVGCircleElement;
const progress_circle_5 = skills[4].querySelector('circle') as SVGCircleElement;
const progress_circle_6 = skills[5].querySelector('circle') as SVGCircleElement;

const per_1 =skills[0].querySelector('.numb') as HTMLDivElement;
const per_2 =skills[1].querySelector('.numb') as HTMLDivElement;
const per_3 =skills[2].querySelector('.numb') as HTMLDivElement;
const per_4 =skills[3].querySelector('.numb') as HTMLDivElement;
const per_5 =skills[4].querySelector('.numb') as HTMLDivElement;
const per_6 =skills[5].querySelector('.numb') as HTMLDivElement;

function calc_persent(div: HTMLDivElement,percent: number){
let num = 0 ;
setInterval(()=>{
    if((percent/472)*100 > num) {
    num+=5
    div.innerHTML = `${num}%`;
}else{
    clearInterval
}
},250)
}
let first_time_scroll = true;
function progress (){
    
        progress_circle_1.style.strokeDashoffset ='0';
        progress_circle_2.style.strokeDashoffset ='100';
        progress_circle_3.style.strokeDashoffset ='120';
        progress_circle_4.style.strokeDashoffset ='200';
        progress_circle_5.style.strokeDashoffset ='260';
        progress_circle_6.style.strokeDashoffset ='400';
        
        calc_persent(per_1,472);
        calc_persent(per_2,372);
        calc_persent(per_3,352);
        calc_persent(per_4,272);
        calc_persent(per_5,212);
        calc_persent(per_6,72);
      
}
let nav_is_visible = true;
let footer_is_hidden = true;
const header = document.querySelector('header') as HTMLElement;
const footer = document.querySelector('footer') as HTMLElement;
main.onscroll = ()=>{
  if(main.scrollTop > 1178 && main.scrollTop < 1800 && first_time_scroll){
    progress()  
    first_time_scroll = false
  }
  if(nav_is_visible && main.scrollTop > 0){
    header.classList.add('change');
    nav_is_visible = !nav_is_visible;
  }
   if(nav_is_visible == false  && main.scrollTop < 70){
    header.classList.remove('change')
    nav_is_visible = !nav_is_visible;
  }
  if(((main.scrollHeight - main.scrollTop) <= window.innerHeight + 20) && footer_is_hidden){
    footer.style.transform = 'translateY(0)';
    footer.style.display ='flex';
    main.style.overflowY = 'hidden';
    footer_is_hidden = false;
  }
  if(((main.scrollHeight - main.scrollTop) > window.innerHeight + 20) && footer_is_hidden == false){
    footer.style.transform = 'translateY(200px)';
    footer.style.display ='none';
    main.style.overflowY = 'visible';
    footer_is_hidden =  true;
  }
  }
  
  
    const textDisplay = document.querySelector('.text_effect') as HTMLElement;
    const phrases = ['Hello World !!!', 'junior web-developer', 'love to code']
    let i = 0
    let j = 0 
    let currentPhrase: string[] = []
    let isDeleting = false
    let isEnd = false
    
    function loop () {
      isEnd = false
      textDisplay.innerHTML = currentPhrase.join('')
    
      if (i < phrases.length) {
    
        if (!isDeleting && j <= phrases[i].length) {
          currentPhrase.push(phrases[i][j])
          j++
          textDisplay.innerHTML = currentPhrase.join('')
        }
    
        if(isDeleting && j <= phrases[i].length) {
          
          currentPhrase.pop();
          j--
          textDisplay.innerHTML = currentPhrase.join('')
        }
    
        if (j == phrases[i].length) {
          isEnd = true
          isDeleting = true
        }
    
        if (isDeleting && j === 0) {
          currentPhrase = []
          isDeleting = false
          i++
          if (i === phrases.length) {
            i = 0
          }
        }
      }
      const spedUp = Math.random() * (80 -50) + 50;
      const normalSpeed = Math.random() * (300 -200) + 200;
      const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
      setTimeout(loop, time)
    }
    
    loop()

    const theme_list_btn = document.querySelector('.theme_list_btn');
    const theme_list = document.querySelector('.theme_list') as HTMLButtonElement;
    const theme_list_items = Array.from(document.querySelectorAll('.theme_list_item'));
    theme_list_btn?.addEventListener('click', () => {
      theme_list_btn.classList.toggle('checked');
      theme_list?.classList.toggle('checked');
      theme_list_items?.forEach(item=>item.classList.toggle('checked')); 
    })
    const dark_mode_btn = theme_list?.querySelector('.dark_mode') as HTMLButtonElement;
    const light_mode_btn = theme_list?.querySelector('.light_mode') as HTMLButtonElement;
    const color_mode_btn = theme_list?.querySelector('.color_mode') as HTMLButtonElement;


function activate_Theme (this: any){
  let theme_name = this.getAttribute('class').split(' ')[1];
  dark_mode_btn.classList.remove('active');
  light_mode_btn.classList.remove('active');
  color_mode_btn.classList.remove('active');
  this.classList.add('active');
if(body?.getAttribute('class') != theme_name){
  body?.setAttribute('class',`${theme_name}`);
}else{
  body?.setAttribute('class','');
}
}
    dark_mode_btn.addEventListener('click',activate_Theme);
    light_mode_btn.addEventListener('click',activate_Theme);
    color_mode_btn.addEventListener('click',activate_Theme);


let X_d: number;
let Y_d: number;
let choosen: HTMLButtonElement | null;

function drag_it (){ 
  choosen = theme_list;
  document.onmousemove = (e)=>{
    X_d = e.pageX;
    Y_d= e.pageY;
    if(choosen != null){
      choosen.style.right = `calc(100% - ${X_d + 25}px)` ;
      choosen.style.marginTop = `calc(${Y_d - 125}px)`;
    }
  
  }
}
function drop_it (){
  document.onmouseup = ()=>{
    choosen = null
  }
}
theme_list.addEventListener('dragstart',drag_it)
theme_list.addEventListener('dragend',drop_it)
theme_list.addEventListener('dragover',drop_it)
theme_list.addEventListener('dragover',(e)=>{
  e.preventDefault()
})



const list = document.querySelectorAll('.list');

function activeLink(this: any) {
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) =>
item.addEventListener('click',activeLink));