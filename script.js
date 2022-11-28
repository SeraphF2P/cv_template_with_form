"use strict";
const sign_up_form = document.getElementById('sign_up');
const form_btns = document.querySelector('.form_btns');
const btn_next = form_btns === null || form_btns === void 0 ? void 0 : form_btns.querySelector('.btn_next');
const btn_prev = form_btns === null || form_btns === void 0 ? void 0 : form_btns.querySelector('.btn_prev');
const btn_close = form_btns === null || form_btns === void 0 ? void 0 : form_btns.querySelector('.btn_close');
const steps_bodys = document.querySelector('.steps_bodys');
const sign_up_section = document.querySelector('.sign_up_section');
const floatingPassword = document.getElementById('floatingPassword');
const floatingPassword_confirm = document.getElementById('floatingPassword_confirm');
const password_confirm_error_message = document.querySelector('.input_error_message.confirm_password');
const step_body_num_1 = sign_up_section === null || sign_up_section === void 0 ? void 0 : sign_up_section.querySelector('.step_body.num_1');
const step_body_num_2 = sign_up_section === null || sign_up_section === void 0 ? void 0 : sign_up_section.querySelector('.step_body.num_2');
const step_body_num_3 = sign_up_section === null || sign_up_section === void 0 ? void 0 : sign_up_section.querySelector('.step_body.num_3');
const forms_input_1 = Array.from(step_body_num_1.querySelectorAll('input'));
const forms_input_2 = Array.from(step_body_num_2.querySelectorAll('input'));
const forms_input_3 = Array.from(step_body_num_3.querySelectorAll('input'));
const progress_bar = sign_up_section === null || sign_up_section === void 0 ? void 0 : sign_up_section.querySelector('.progress_bar');
const step_1 = progress_bar === null || progress_bar === void 0 ? void 0 : progress_bar.querySelector('.step_1');
const step_2 = progress_bar === null || progress_bar === void 0 ? void 0 : progress_bar.querySelector('.step_2');
const step_3 = progress_bar === null || progress_bar === void 0 ? void 0 : progress_bar.querySelector('.step_3');
let slide_value = 0;
function slideX_pre() {
    steps_bodys.style.transform = `translateX( ${slide_value.toLocaleString()}px)`;
    if (slide_value != 0 && slide_value != -600) {
        slide_value += 300;
    }
    if (slide_value = -600) {
        submit_btn.replaceWith(btn_next);
    }
}
const submit_btn = document.createElement('input');
submit_btn.setAttribute('type', 'submit');
submit_btn.setAttribute('class', 'btn btn-primary btn_next');
submit_btn.setAttribute('form', 'sign_up');
function slideX_next() {
    if (forms_input_1 === null || forms_input_1 === void 0 ? void 0 : forms_input_1.every(input => { return input.checkValidity(); })) {
        steps_bodys.style.transform = 'translate(-300px)';
        step_1.classList.add('confirmed');
        btn_close.innerText = 'Preview';
        btn_close.removeAttribute('data-bs-dismiss');
        btn_close.classList.remove('btn_close');
        slide_value = 0;
        if (floatingPassword.value != floatingPassword_confirm.value) {
            password_confirm_error_message.style.display = 'block';
        }
        if ((forms_input_2 === null || forms_input_2 === void 0 ? void 0 : forms_input_2.every(input => { return input.checkValidity(); })) && floatingPassword.value == floatingPassword_confirm.value) {
            steps_bodys.style.transform = 'translate(-600px)';
            step_2.classList.add('confirmed');
            slide_value = -300;
            password_confirm_error_message.style.display = 'none';
            if (forms_input_3 === null || forms_input_3 === void 0 ? void 0 : forms_input_3.every(input => { return input.checkValidity(); })) {
                btn_next.replaceWith(submit_btn);
                submit_btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    steps_bodys.style.transform = 'translate(-900px)';
                    step_3.classList.add('confirmed');
                    slide_value = -600;
                    btn_prev.setAttribute('data-bs-dismiss', "modal");
                    btn_prev.setAttribute('class', "btn btn-secondry ");
                    setTimeout(() => {
                        btn_close.click();
                    }, 1000);
                });
            }
        }
    }
}
btn_prev === null || btn_prev === void 0 ? void 0 : btn_prev.addEventListener('click', slideX_pre);
btn_next === null || btn_next === void 0 ? void 0 : btn_next.addEventListener('click', slideX_next);
let users = [{ name: 'jafer ali', email: 'fanfar13@gmail.com', password: 'asdasd', location: null }];
submit_btn.addEventListener('click', () => {
    let full_name_input = document.getElementById('full_name_input');
    let floatingInput_email = document.getElementById('floatingInput_email');
    let floatingPassword = document.getElementById('floatingPassword');
    let inputAddress = document.getElementById('inputAddress');
    let inputAddress2 = document.getElementById('inputAddress2');
    let inputCity = document.getElementById('inputCity');
    let inputState = document.getElementById('inputState');
    let inputZip = document.getElementById('inputZip');
    let userInfo = {
        name: `${full_name_input.value}`,
        email: `${floatingInput_email.value}`,
        password: `${floatingPassword.value}`,
        location: `${inputAddress.value},${inputAddress2.value},${inputCity.value},${inputState.value},${inputZip.value}`
    };
    users.push(userInfo);
    console.log(users);
});
const log_in_section = document.querySelector('.log_in_section');
const user_name_email = document.getElementById('log_in_user_name_email');
const Password_log_in_password = document.getElementById('Password_log_in_password');
const submit_log_btn = log_in_section === null || log_in_section === void 0 ? void 0 : log_in_section.querySelector('[value="Log in"]');
const close_btn = log_in_section === null || log_in_section === void 0 ? void 0 : log_in_section.querySelector('.btn_close');
const first_page = document.querySelector('.first_page');
const second_page = document.querySelector('.second_page');
submit_log_btn === null || submit_log_btn === void 0 ? void 0 : submit_log_btn.addEventListener('click', (e) => {
    e.preventDefault();
    for (let i = 0; i < users.length; i++) {
        if (users[i].name == user_name_email.value || users[i].email == user_name_email.value) {
            if (users[i].password == Password_log_in_password.value) {
                close_btn === null || close_btn === void 0 ? void 0 : close_btn.click();
                first_page.style.display = 'none';
                second_page.style.display = 'block';
                moving();
                setInterval(() => {
                    moving();
                }, 60000);
            }
        }
    }
});
