let form = document.querySelector('button');
form.addEventListener('click', myClick);

function myClick(evt) {
    document.getElementById('div1').style.display = 'block';
    evt.preventDefault();
    let a = document.querySelector('#f1').value;
    console.log(a);
    let b = document.querySelector('#f2').value;
    console.log(b);
    let info = 'Username: ' + a + '</br>' + 'Password: ' + b;
    document.querySelector('#div1').innerHTML = info;
    localStorage.setItem('Username:', document.querySelector('#f1').value);
    localStorage.setItem('Password:', document.querySelector('#f2').value);
}

