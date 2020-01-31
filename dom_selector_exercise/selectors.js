// 5 different ways to select the first <p> tag:

//1
document.getElementById('first');

//2
document.getElementsByClassName('special')[0];

//3
document.getElementsByTagName('p')[0];

//4
document.querySelector('#first');
document.querySelector('.special');

//5
document.querySelectorAll('.special')[0];
