
const progress_bar = document.querySelector('.progress_bar');
const step_1 = progress_bar?.querySelector('span.step_1') as HTMLDivElement;
const step_2 = progress_bar?.querySelector('span.step_2') as HTMLDivElement;
const step_3 = progress_bar?.querySelector('span.step_3') as HTMLDivElement;

const step_1_svg = progress_bar?.querySelector('div.step_1') as HTMLDivElement;
const step_2_svg = progress_bar?.querySelector('div.step_2') as HTMLDivElement;
const step_3_svg = progress_bar?.querySelector('div.step_3') as HTMLDivElement;

const step_line_1 = progress_bar?.querySelector('.step_line.num_1') as HTMLDivElement;
const step_line_2 = progress_bar?.querySelector('.step_line.num_2') as HTMLDivElement;


const sign_up_form = document.getElementById('sign_up') as HTMLFormElement;

const sign_up_section = document.getElementById('sign_up') as HTMLElement;

const form_part_1 = sign_up_section?.querySelector('.form_part_1');
const form_part_2 = sign_up_section?.querySelector('.form_part_2');
const form_part_3 = sign_up_section?.querySelector('.form_part_3');


const forms_input_1 = Array.from(form_part_1!.querySelectorAll('input'));
const forms_input_2 = Array.from(form_part_2!.querySelectorAll('input'));
const forms_input_3 = Array.from(form_part_3!.querySelectorAll('input'));


const floatingPassword = document.getElementById('floatingPassword') as HTMLInputElement;
const floatingPassword_confirm = document.getElementById('floatingPassword_confirm') as HTMLInputElement;
const password_confirm_error_message = document.querySelector('.input_error_message.confirm_password') as HTMLParagraphElement;

const form_carousel = document.getElementById('form_carousel');

const btn_next = form_carousel?.querySelector('.carousel-control-next') as HTMLButtonElement;
const btn_prev = form_carousel?.querySelector('.carousel-control-prev') as HTMLButtonElement;

let slide_counter = 0;
function slideX_pre() {
    if(slide_counter == 1){
        step_1.classList.remove('checked');
        step_1_svg.classList.remove('checked');
        step_line_1.classList.remove('checked');
    
        btn_prev.innerText = 'close';
        btn_prev.setAttribute('data-bs-dismiss','modal');
        btn_prev.removeAttribute('data-bs-target');
        btn_prev.removeAttribute('data-bs-slide');
    }
    if(slide_counter == 2){
        step_2.classList.remove('checked');
        step_2_svg.classList.remove('checked');     
        step_line_2.classList.remove('checked');     
    }
    slide_counter--;
}
// const submit_btn = document.createElement('input');
// submit_btn.setAttribute('type', 'submit');
// submit_btn.setAttribute('class', 'btn btn-primary btn_next');
// submit_btn.setAttribute('form', 'sign_up');
function slideX_next() {
    if (forms_input_1?.every(input => { return input.checkValidity() }) && slide_counter == 0) {
        step_1.classList.add('checked');
        step_1_svg.classList.add('checked');
        step_line_1.classList.add('checked');
        btn_prev.innerText = 'Preview';
        btn_prev.removeAttribute('data-bs-dismiss');
        btn_prev.setAttribute('data-bs-target','#form_carousel');
        btn_prev.setAttribute('data-bs-slide','prev'); 
    }
    if(forms_input_2?.every(input => { return input.checkValidity() }) && slide_counter == 1){
        step_2.classList.add('checked');
        step_2_svg.classList.add('checked');
        step_line_2.classList.add('checked');
    }
    if(forms_input_3?.every(input => { return input.checkValidity() }) && slide_counter == 2){
        step_3.classList.add('checked');
        step_3_svg.classList.add('checked');
        btn_prev.setAttribute('disabled', '');
        btn_next.setAttribute('disabled', '');
        collect_user_info()
        let sss = document.querySelector('.sign_up_section') as HTMLDivElement;
        let modal_backdrop = document.querySelector('.modal-backdrop') as HTMLDivElement;
       
        setTimeout(()=>{
            sss.style.display   = 'none';
            modal_backdrop.style.display   = 'none';
            // sign_up_form?.submit()
        },800)
    }
    btn_next.setAttribute('disabled','') 
    slide_counter++;
    }

btn_prev?.addEventListener('click', slideX_pre);
btn_next?.addEventListener('click', slideX_next);

forms_input_1.forEach(input =>{
    input.onchange = ()=>{
        if (forms_input_1?.every(input => { return input.checkValidity() }) && slide_counter == 0) {
            btn_next.removeAttribute('disabled') ;

        }
        if(forms_input_1?.some(input => { return input.checkValidity()  == false }) && slide_counter == 0){
            btn_next.setAttribute('disabled','')  
        }       
    }
})
forms_input_2.forEach(input =>{
        input.onchange = ()=>{
         if (floatingPassword.value != floatingPassword_confirm.value) {
             password_confirm_error_message.style.display = 'block'
         }else{
            password_confirm_error_message.style.display = 'none'
         }

        if (forms_input_2?.every(input => { return input.checkValidity() }) && slide_counter == 1) {
                btn_next.removeAttribute('disabled') ;
        }
        if(forms_input_2?.some(input => { return input.checkValidity() == false}) && slide_counter == 1){
                btn_next.setAttribute('disabled','')  
        }       
    }
})
forms_input_3.forEach(input =>{
    input.onchange = ()=>{
        if (forms_input_3?.every(input => { return input.checkValidity() }) && slide_counter == 2) {
            btn_next.removeAttribute('disabled') ;

        }
        if(forms_input_3?.some(input => { return input.checkValidity() == false}) && slide_counter == 2){
            btn_next.setAttribute('disabled','')  
        }       
    }
})
let users:any[] = [{name:'jafer ali',email:'fanfar13@gmail.com',password:'asdasd',location:null}];
function collect_user_info(){
    let full_name_input = document.getElementById('full_name_input') as HTMLInputElement;
    let floatingInput_email = document.getElementById('floatingInput_email') as HTMLInputElement;
    let floatingPassword = document.getElementById('floatingPassword') as HTMLInputElement;
    let inputAddress = document.getElementById('inputAddress') as HTMLInputElement;
    let inputAddress2 = document.getElementById('inputAddress2') as HTMLInputElement;
    let inputCity = document.getElementById('inputCity') as HTMLInputElement;
    let inputState = document.getElementById('inputState') as HTMLInputElement;
    let inputZip = document.getElementById('inputZip') as HTMLInputElement;
    let userInfo = {
        name : `${full_name_input.value}`,
        email : `${floatingInput_email.value}` ,
        password : `${ floatingPassword.value}`,
        location : `${inputAddress.value},${inputAddress2.value},${inputCity.value},${inputState.value},${inputZip.value}`
    } 
    users.push(userInfo);
}
const body_1 = document.querySelector('body')
function loding_page(){
    body_1?.classList.add("loding_page");
}



const log_in_section = document.querySelector('.log_in_section');
const user_name_email = document.getElementById('log_in_user_name_email') as HTMLInputElement;
const Password_log_in_password = document.getElementById('Password_log_in_password') as HTMLInputElement;

const submit_log_btn = log_in_section?.querySelector('[value="Log in"]');
const log_in_form = log_in_section?.querySelector('form');


const first_page = document.querySelector('.first_page')as HTMLElement;
const second_page = document.querySelector('.second_page')as HTMLElement;
submit_log_btn?.addEventListener('click', (e) => {
    e.preventDefault()
    for (let i = 0; i < users.length; i++) {
       if ((users[i].name == user_name_email.value || users[i].email == user_name_email.value) 
       && (users[i].password == Password_log_in_password.value)) {
        log_in_form?.submit()
    
    }
}})
