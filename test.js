//Função resto da divisão
function restoDivisao(x, y) {
  return x % y;
}
console.log(restoDivisao(4, 3));

//Função de potenciação
 function potenciacao(x,y){
  if(y==0){
    return 1
  }
  else{
    resultado=x
  for (let index = 0; index <y-1; index++) {
    resultado= resultado*x
  }
  return resultado
  }
  

 }


