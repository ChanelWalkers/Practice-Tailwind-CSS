const form = document.querySelector("#link-form");
const input = document.getElementById("link-input");
const errMsg = document.getElementById("err-msg");

function validURL(str) {
    var pattern = new RegExp(
        '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$',
        'i'
    )
    return !!pattern.test(str)
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let ok = 1;

    if (input.value === '') {
        errMsg.innerHTML = 'Please enter something';
        ok = 0;
    } else if (!validURL(input.value)) {
        errMsg.innerHTML = 'Please enter a valid URL';
    }

    if (!ok) {
        input.classList.add('border-red')
    } else {
        errMsg.textContent = '';
        input.classList.remove('border-red');
        alert('Success');
        input.value = '';
    }
});

const menuBtn = document.querySelector("#menu-btn");
const menu = document.getElementById("menu");
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
})

