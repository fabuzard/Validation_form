document.querySelector('.register-button').addEventListener('click',()=>{
    const emailInput = document.querySelector('.email-input');
    const passwordInput = document.querySelector('.password-input')
    const emailFeedback = document.querySelector('#emailFeedback');
    const passwordFeedback = document.querySelector('#passwordFeedback')

    emailFeedback.textContent='';
    passwordFeedback.textContent='';

    let isValid = true;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value)){
        emailFeedback.textContent='Please enter valid email address'
        isValid=false;
        }

    if (passwordInput.value.length<8){
        passwordFeedback.textContent='Password must be at least 8 characters long';
        isValid=false
    }

    if (isValid){
        alert('Registration success');
    }

})