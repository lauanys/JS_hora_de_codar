// 
var btn = document.querySelector('button');
console.log(btn);

btn.addEventListener('click', function(){ 
    this.style.color ='red';
    console.log(btn);
});
//click afetando outros elementos
var title = document.querySelector('#title');
title.addEventListener('click',function(){

var li = document.querySelector('.li');
li.style.display = 'none';
HTMLFormControlsCollection.log(li)
});

//dblclick

var dbl = document.querySelector('#title');
dbl.addEventListener('dblclick', function(){
    var addLi = document.querySelector('.li');
    addLi.style.display = 'block';
});