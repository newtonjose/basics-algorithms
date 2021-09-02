const convertToF = function(ceulcius) {
  const convertFactor = 9 / 5;
  let fahrenheit = ceulcius * convertFactor + 32;

  return fahrenheit;
}

export { convertToF };
