let button = document.querySelector('button');
button.addEventListener('click', getUserInfo);

function getUserInfo(event) {
    document.getElementById('div1').style.display = 'block';
    event.preventDefault();
    let login = document.querySelector('#f1').value;
    let password = document.querySelector('#f2').value;
    let userInfo = 'Username: ' + login + '</br>' + 'Password: ' + password;
    document.querySelector('#div1').innerHTML = userInfo;
    localStorage.setItem('Username:', login);
    localStorage.setItem('Password:', password);
}
