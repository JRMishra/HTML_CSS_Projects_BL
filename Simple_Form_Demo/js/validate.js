const text=document.querySelector('#text');
const textError=document.querySelector('.text-error');
text.addEventListener('input', function(){
    let namRegex= new RegExp(/^[A-Z][a-z]{2,}$/);
    if(namRegex.test(text.value))
    textError.textContent="";
    else
    textError.textContent="Name is incorrect";
})

const email=document.querySelector('#email');
const emailError=document.querySelector('.email-error');
email.addEventListener('input', function(){
    let emailRegex= new RegExp(/^[a-z0-9A-Z]+([-.+_][a-z0-9+-]+)*@[a-z0-9A-Z]+[.][a-z]{2,3}([.][a-z]{2,})?$/);
    if(emailRegex.test(email.value))
    emailError.textContent="";
    else
    emailError.textContent="Email is incorrect";
})

const tel=document.querySelector('#tel');
const telError=document.querySelector('.tel-error');
tel.addEventListener('input', function(){
    let telRegex= new RegExp(/^[0-9]{2}[ ][1-9][0-9]{9}$/);
    if(telRegex.test(tel.value))
    telError.textContent="";
    else
    telError.textContent="Tel. Number is incorrect";
})

const pwd=document.querySelector('#pwd');
const pwdError=document.querySelector('.pwd-error');
pwd.addEventListener('input', function(){
    let pwdRegex= new RegExp(/((?=^.*[0-9].*$)(?=^.*[A-Z].*$)(?=^[a-zA-Z0-9]*[!@#$%&*+_]{1}[a-zA-Z0-9]*$).{8,})/);
    if(pwdRegex.test(pwd.value))
    pwdError.textContent="";
    else
    pwdError.textContent="Password is incorrect";
})

const salary=document.querySelector('#salary');
const output=document.querySelector('.salary-output');
output.textContent=salary.value;
salary.addEventListener('input',function(){
    output.textContent=salary.value;
})