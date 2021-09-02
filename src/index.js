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

console.log(reverseStringRecursion("hello"));


export { convertToF, reverseString };
