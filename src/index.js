const convertToF = (ceulcius) => {
  const convertFactor = 9 / 5;
  let fahrenheit = ceulcius * convertFactor + 32;

  return fahrenheit;
};

const reverseString = (str) => {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str.charAt(i);
  }

  return reversed;
};

const reverseStringRecursion = (str) => {
  // case base or terminal case
  if (str === "") return "";
  else return reverseStringRecursion(str.substr(1)) + str.charAt(0);
};

// 5 -> 1*5 => 5*4 => 20*3 => 60*2 => 120*1  
const factorialize = (num) => {
  let factorial = 1;

  for (let i = num; i >= 1; i--) {
    factorial *= i;
  }

  return factorial;
};

const factorializeRecursion = (num) => {
    // caso base
    if (num == 1)
        return num;
    
    return factorializeRecursion(num - 1) * num;
}

console.log(factorializeRecursion(5));
console.log(reverseStringRecursion("hello"));

export { convertToF, reverseString, factorialize };
