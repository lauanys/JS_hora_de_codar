var h3 = document.createElement('h3');
h3.classList = 'testando-class';

var texto = document.createTextNode('esse e o h3');

h3.appendChild(texto);
console.log(h3);

var title = document.querySelector('h1');
console.log(title);

var body = title.parentNode;
//troca de elemento
body.replaceChild(h3, title)

