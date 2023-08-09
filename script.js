const slider = document.getElementById('mySlider');
const sliderValueField = document.getElementById('slider-index');
const gen_pass = document.getElementById("generated_password")
const lows_chars = "abcdefghijklmnopqrstuvwxyz"
const ups_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const alph_numeric_chars = "abcdefghijklmnopqrstuvwxyz1234567890"
const char_set = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?"
const uppercase = document.getElementById("upper_case")
const lowercase = document.getElementById("lower_case")
const number = document.getElementById("numeric")
const special = document.getElementById("Symbols")

slider.addEventListener('input', () => {
    const value = slider.value;
    sliderValueField.value = value;
});

number.addEventListener('change', () => {
})
uppercase.addEventListener('change', () => {
})
lowercase.addEventListener('change', () => {
})
special.addEventListener('change', () => {
})

let generate = document.getElementById("generate")
generate.addEventListener('click', (charSet) => {
    if (number.checked === true && uppercase.checked === true && lowercase.checked === true && special.checked === true) {
        const value = slider.value;
        console.log("Bhaad mein jaaye")
    }
    })