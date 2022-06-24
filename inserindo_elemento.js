var div  = document.createElement('div');
div.classList = 'div-criada';
console.log(div);
 

var container = document.querySelector('#container');
container.appendChild(div);

div.insertBefore('body', 'h1');