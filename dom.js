var titulo = document.querySelector('h1');
titulo.textContent='fui trocado';

var paragrafo = document.createElement('p');
paragrafo.appendChild(document.createTextNode('texto do paragrafo'));

var body = document.querySelector('body');
body.appendChild(paragrafo);

