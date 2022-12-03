"use strict";
const progress_bar = document.querySelector('.progress_bar');
const step_1 = progress_bar === null || progress_bar === void 0 ? void 0 : progress_bar.querySelector('span.step_1');
const step_2 = progress_bar === null || progress_bar === void 0 ? void 0 : progress_bar.querySelector('span.step_2');
const step_3 = progress_bar === null || progress_bar === void 0 ? void 0 : progress_bar.querySelector('span.step_3');
const step_1_svg = progress_bar === null || progress_bar === void 0 ? void 0 : progress_bar.querySelector('div.step_1');
const step_2_svg = progress_bar === null || progress_bar === void 0 ? void 0 : progress_bar.querySelector('div.step_2');
const step_3_svg = progress_bar === null || progress_bar === void 0 ? void 0 : progress_bar.querySelector('div.step_3');
const step_line_1 = progress_bar === null || progress_bar === void 0 ? void 0 : progress_bar.querySelector('.step_line.num_1');
const step_line_2 = progress_bar === null || progress_bar === void 0 ? void 0 : progress_bar.querySelector('.step_line.num_2');
const sign_up_form = document.getElementById('sign_up');
const sign_up_section = document.getElementById('sign_up');
const form_part_1 = sign_up_section === null || sign_up_section === void 0 ? void 0 : sign_up_section.querySelector('.form_part_1');
const form_part_2 = sign_up_section === null || sign_up_section === void 0 ? void 0 : sign_up_section.querySelector('.form_part_2');
const form_part_3 = sign_up_section === null || sign_up_section === void 0 ? void 0 : sign_up_section.querySelector('.form_part_3');
const forms_input_1 = Array.from(form_part_1.querySelectorAll('input'));
const forms_input_2 = Array.from(form_part_2.querySelectorAll('input'));
const forms_input_3 = Array.from(form_part_3.querySelectorAll('input'));
const floatingPassword = document.getElementById('floatingPassword');
const floatingPassword_confirm = document.getElementById('floatingPassword_confirm');
const password_confirm_error_message = document.querySelector('.input_error_message.confirm_password');
const form_carousel = document.getElementById('form_carousel');
const btn_next = form_carousel === null || form_carousel === void 0 ? void 0 : form_carousel.querySelector('.carousel-control-next');
const btn_prev = form_carousel === null || form_carousel === void 0 ? void 0 : form_carousel.querySelector('.carousel-control-prev');
let slide_counter = 0;
function slideX_pre() {
    if (slide_counter == 1) {
        step_1.classList.remove('checked');
        step_1_svg.classList.remove('checked');
        step_line_1.classList.remove('checked');
        btn_prev.innerText = 'close';
        btn_prev.setAttribute('data-bs-dismiss', 'modal');
        btn_prev.removeAttribute('data-bs-target');
        btn_prev.removeAttribute('data-bs-slide');
    }
    if (slide_counter == 2) {
        step_2.classList.remove('checked');
        step_2_svg.classList.remove('checked');
        step_line_2.classList.remove('checked');
    }
    slide_counter--;
}
function slideX_next() {
    if ((forms_input_1 === null || forms_input_1 === void 0 ? void 0 : forms_input_1.every(input => { return input.checkValidity(); })) && slide_counter == 0) {
        step_1.classList.add('checked');
        step_1_svg.classList.add('checked');
        step_line_1.classList.add('checked');
        btn_prev.innerText = 'Preview';
        btn_prev.removeAttribute('data-bs-dismiss');
        btn_prev.setAttribute('data-bs-target', '#form_carousel');
        btn_prev.setAttribute('data-bs-slide', 'prev');
    }
    if ((forms_input_2 === null || forms_input_2 === void 0 ? void 0 : forms_input_2.every(input => { return input.checkValidity(); })) && slide_counter == 1) {
        step_2.classList.add('checked');
        step_2_svg.classList.add('checked');
        step_line_2.classList.add('checked');
    }
    if ((forms_input_3 === null || forms_input_3 === void 0 ? void 0 : forms_input_3.every(input => { return input.checkValidity(); })) && slide_counter == 2) {
        step_3.classList.add('checked');
        step_3_svg.classList.add('checked');
        btn_prev.setAttribute('disabled', '');
        btn_next.setAttribute('disabled', '');
        collect_user_info();
        let sss = document.querySelector('.sign_up_section');
        let modal_backdrop = document.querySelector('.modal-backdrop');
        setTimeout(() => {
            sss.style.display = 'none';
            modal_backdrop.style.display = 'none';
        }, 800);
    }
    btn_next.setAttribute('disabled', '');
    slide_counter++;
}
btn_prev === null || btn_prev === void 0 ? void 0 : btn_prev.addEventListener('click', slideX_pre);
btn_next === null || btn_next === void 0 ? void 0 : btn_next.addEventListener('click', slideX_next);
forms_input_1.forEach(input => {
    input.onchange = () => {
        if ((forms_input_1 === null || forms_input_1 === void 0 ? void 0 : forms_input_1.every(input => { return input.checkValidity(); })) && slide_counter == 0) {
            btn_next.removeAttribute('disabled');
        }
        if ((forms_input_1 === null || forms_input_1 === void 0 ? void 0 : forms_input_1.some(input => { return input.checkValidity() == false; })) && slide_counter == 0) {
            btn_next.setAttribute('disabled', '');
        }
    };
});
forms_input_2.forEach(input => {
    input.onchange = () => {
        if (floatingPassword.value != floatingPassword_confirm.value) {
            password_confirm_error_message.style.display = 'block';
        }
        else {
            password_confirm_error_message.style.display = 'none';
        }
        if ((forms_input_2 === null || forms_input_2 === void 0 ? void 0 : forms_input_2.every(input => { return input.checkValidity(); })) && slide_counter == 1) {
            btn_next.removeAttribute('disabled');
        }
        if ((forms_input_2 === null || forms_input_2 === void 0 ? void 0 : forms_input_2.some(input => { return input.checkValidity() == false; })) && slide_counter == 1) {
            btn_next.setAttribute('disabled', '');
        }
    };
});
forms_input_3.forEach(input => {
    input.onchange = () => {
        if ((forms_input_3 === null || forms_input_3 === void 0 ? void 0 : forms_input_3.every(input => { return input.checkValidity(); })) && slide_counter == 2) {
            btn_next.removeAttribute('disabled');
        }
        if ((forms_input_3 === null || forms_input_3 === void 0 ? void 0 : forms_input_3.some(input => { return input.checkValidity() == false; })) && slide_counter == 2) {
            btn_next.setAttribute('disabled', '');
        }
    };
});
let users = [{ name: 'jafer ali', email: 'fanfar13@gmail.com', password: 'asdasd', location: null }];
function collect_user_info() {
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
}
const log_in_section = document.querySelector('.log_in_section');
const user_name_email = document.getElementById('log_in_user_name_email');
const Password_log_in_password = document.getElementById('Password_log_in_password');
const submit_log_btn = log_in_section === null || log_in_section === void 0 ? void 0 : log_in_section.querySelector('[value="Log in"]');
const log_in_form = log_in_section === null || log_in_section === void 0 ? void 0 : log_in_section.querySelector('form');
const first_page = document.querySelector('.first_page');
const second_page = document.querySelector('.second_page');
submit_log_btn === null || submit_log_btn === void 0 ? void 0 : submit_log_btn.addEventListener('click', (e) => {
    e.preventDefault();
    for (let i = 0; i < users.length; i++) {
        if ((users[i].name == user_name_email.value || users[i].email == user_name_email.value)
            && (users[i].password == Password_log_in_password.value)) {
            log_in_form === null || log_in_form === void 0 ? void 0 : log_in_form.submit();
        }
    }
});
