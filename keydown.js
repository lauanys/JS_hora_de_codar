//precionar a tecla
document.addEventListener('keydown', function(Event){
if(Event.key === 'Enter'){
    console.log('apertou o enter');
}
} );

//keyup
document.addEventListener('keyup', function(e){
if(e.key === 'Enter') {
    console.log('Soltou o enter');
}
}); 