'use strict';

function enterCode(){
  let code = prompt("Введите код: ",  `let a = 2; let b = +prompt('Введите b'); let c = a + b; alert(c); console.log(c);` );
  console.log(code);
  eval(code);
}

function useCode(){
  try {
    enterCode();
  }
  catch (ex) {
  console.log('Возникла ошибка: ' + ex);
  }
}
