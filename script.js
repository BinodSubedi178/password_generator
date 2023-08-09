const slider = document.getElementById('mySlider');
const sliderValueField = document.getElementById('slider-index');
const gen_pass = document.getElementById("generated_password")
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const specialChars = '!@#$%^&*()_-+=<>?';

slider.addEventListener('input', () => {
    const value = slider.value;
    sliderValueField.value = value;
});

let generate = document.getElementById("generate")
generate.addEventListener('click', () => {
    const uppercase = document.getElementById("upper_case").checked
    const lowercase = document.getElementById("lower_case").checked
    const number = document.getElementById("numeric").checked
    const special = document.getElementById("Symbols").checked
    const value = parseInt(slider.value);
    if ( value == 0 ){
        gen_pass.value = "Please specify valid length!"
    }
    else{
    let charSet = '';
    if (uppercase) charSet += uppercaseChars;
    if (lowercase) charSet += lowercaseChars;
    if (number) charSet += numberChars;
    if (special) charSet += specialChars;
    let password = ''
    for (let i = 0; i < value; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
      }
      if (password == "undefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefined"){
        gen_pass.value = "Please select at least one box."
      }
      else{
      gen_pass.value = password
      }
    }
})
let copy_button = document.getElementById('copy-btn')
copy_button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(gen_pass.value);
      copy_button.textContent = 'Copied!';
      setTimeout(() => {
        copy_button.textContent = 'Copy';
      }, 1000);
    } catch (error) {
      console.error('Copy failed:', error);
    }
  });