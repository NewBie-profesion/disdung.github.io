// DOM - Document onject model
const name = document.querySelector('.form-name');
const email = document.querySelector('.form-mail');
const btn = document.querySelector('.form-button');
const insert = document.querySelector('.insert');
const openWindow = document.querySelector('.tes');
btn.addEventListener('click', function(e) {
    e.preventDefault();
    
    console.log(name.value);
    console.log(email.value);
    
    const nameform =  name.value;
    const emailfrom = email.value;

    localStorage.setItem('email', emailfrom);
    
    insert.innerHTML += `<div>
        <h4>${emailfrom}</h4>
        <h4>${nameform}</h4>
    </div>`
})

const arr = [1,2,3];

const test = localStorage.setItem('test', JSON.stringify(arr));
const testLocalStrorge = (localStorage.getItem('test'));

console.log(testLocalStrorge[0]);
