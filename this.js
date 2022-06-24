var teste = 5;

console.log(this.teste);

let pessoa = {
    name:'lauany',
    idade:17,

falar:function(){
console.log('ola me nome é ' +this.name);
    
},
aniversario: function(){
    this.idade += 1
}
};

pessoa.falar()