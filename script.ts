const sign_up_form = document.getElementById('sign_up') as HTMLFormElement;
const form_btns = document.querySelector('.form_btns')

const btn_next = form_btns?.querySelector('.btn_next') as HTMLButtonElement;
const btn_prev = form_btns?.querySelector('.btn_prev') as HTMLButtonElement;
const btn_close = form_btns?.querySelector('.btn_close') as HTMLButtonElement;

const steps_bodys = document.querySelector('.steps_bodys') as HTMLElement;
const sign_up_section = document.querySelector('.sign_up_section') as HTMLElement;
const floatingPassword = document.getElementById('floatingPassword') as HTMLInputElement;
const floatingPassword_confirm = document.getElementById('floatingPassword_confirm') as HTMLInputElement;
const password_confirm_error_message = document.querySelector('.input_error_message.confirm_password') as HTMLParagraphElement;

const step_body_num_1 = sign_up_section?.querySelector('.step_body.num_1');
const step_body_num_2 = sign_up_section?.querySelector('.step_body.num_2');
const step_body_num_3 = sign_up_section?.querySelector('.step_body.num_3');

const forms_input_1 = Array.from(step_body_num_1!.querySelectorAll('input'));
const forms_input_2 = Array.from(step_body_num_2!.querySelectorAll('input'));
const forms_input_3 = Array.from(step_body_num_3!.querySelectorAll('input'));

const progress_bar = sign_up_section?.querySelector('.progress_bar');
const step_1 = progress_bar?.querySelector('.step_1') as HTMLDivElement;
const step_2 = progress_bar?.querySelector('.step_2') as HTMLDivElement;
const step_3 = progress_bar?.querySelector('.step_3') as HTMLDivElement;



let slide_value: number = 0;
function slideX_pre() {
    steps_bodys.style.transform = `translateX( ${slide_value.toLocaleString()}px)`;
    if (slide_value != 0 && slide_value != -600) {
        slide_value += 300;
    }
    if (slide_value = -600) {
        submit_btn.replaceWith(btn_next)
    }
}
const submit_btn = document.createElement('input');
submit_btn.setAttribute('type', 'submit');
submit_btn.setAttribute('class', 'btn btn-primary btn_next');
submit_btn.setAttribute('form', 'sign_up');
function slideX_next() {
    if (forms_input_1?.every(input => { return input.checkValidity() })) {
        steps_bodys.style.transform = 'translate(-300px)';
        step_1.classList.add('confirmed');
        btn_close.innerText = 'Preview';
        btn_close.removeAttribute('data-bs-dismiss')
        btn_close.classList.remove('btn_close')
        slide_value = 0;
        if (floatingPassword.value != floatingPassword_confirm.value) {
            password_confirm_error_message.style.display = 'block'
        }
        if (forms_input_2?.every(input => { return input.checkValidity() }) && floatingPassword.value == floatingPassword_confirm.value) {
            steps_bodys.style.transform = 'translate(-600px)'
            step_2.classList.add('confirmed');
            slide_value = -300;
            password_confirm_error_message.style.display = 'none'
            if (forms_input_3?.every(input => { return input.checkValidity() })) {
                btn_next.replaceWith(submit_btn);
                submit_btn.addEventListener('click', (e) => {
                    e.preventDefault()
                    steps_bodys.style.transform = 'translate(-900px)';
                    step_3.classList.add('confirmed');
                    slide_value = -600;
                    btn_prev.setAttribute('data-bs-dismiss',"modal");
                    btn_prev.setAttribute('class',"btn btn-secondry ");
                    setTimeout(()=>{
                        btn_close.click();
                    },1000)
                })
               

            }
        }
    }
}
btn_prev?.addEventListener('click', slideX_pre);
btn_next?.addEventListener('click', slideX_next);

let users:any[] = [{name:'jafer ali',email:'fanfar13@gmail.com',password:'asdasd',location:null}];
submit_btn.addEventListener('click', () => {
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
    console.log(users);
}) 

const log_in_section = document.querySelector('.log_in_section');
const user_name_email = document.getElementById('log_in_user_name_email') as HTMLInputElement;
const Password_log_in_password = document.getElementById('Password_log_in_password') as HTMLInputElement;

const submit_log_btn = log_in_section?.querySelector('[value="Log in"]');
const close_btn = log_in_section?.querySelector('.btn_close') as HTMLInputElement;

const first_page = document.querySelector('.first_page')as HTMLElement;
const second_page = document.querySelector('.second_page')as HTMLElement;
submit_log_btn?.addEventListener('click', (e) => {
    e.preventDefault();
    for (let i = 0; i < users.length; i++) {
       if (users[i].name == user_name_email.value || users[i].email == user_name_email.value ) {
        if(users[i].password == Password_log_in_password.value){
            close_btn?.click();
            first_page.style.display = 'none';
            second_page.style.display = 'block';
            moving()
        setInterval(()=>{
            moving()
        },60000)
        }
    }
}})