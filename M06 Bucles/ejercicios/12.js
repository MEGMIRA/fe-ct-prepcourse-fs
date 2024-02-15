function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
  const div3 = num%3;
  const div5 =num%5;

 if (div3===0 && div5===0)
 {return "fizzbuzz"}
 else {
  if(div3===0 && div5!==0)
  {return "fizz"}
  else {if (div3!==0 && div5===0){ return "buzz"} else {
    if (div3!==0 && div5!==0)return false}}}
}

module.exports = fizzBuzz;
