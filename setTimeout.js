//definir tempo limite
//ação que só pode ser execultada depois de uma regra (setTimeout)/ assincrona

setTimeout (function(){
    console.log('quanto tempo ');
}, 1000);






setInterval(function(){
    console.log('contando')
   }, 2000);
//cleaSetrInterval
   
var time = setInterval(function(){
    console.log('contando 2')
},3000);

setTimeout(function(){
    console.log('não precisa mais contar');
    clearInterval(time);
},7000);

