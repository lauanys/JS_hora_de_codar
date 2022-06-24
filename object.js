var pessoa ={
    name:'lauany',
    idade:17,
falar: function(){
    console.log('seja bem vinda')
},
soma: function(a, b){
    return a + b;
}
};

console.log(pessoa.name);
pessoa.falar();

var result = pessoa.soma(2, 2);
console.log(result)