const oneWord = function (str) {
  return str.replaceAll(" ", "");
}


const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");

  return [first.toUpperCase(), ...others].join(" ");
}

const transformer = (str, fn) => {
  console.log(`So you like javascript?: ${fn(str)}`); 
  console.log(`The string was transformed by ${fn.name} function.`);
}

transformer('javascript is the best!', upperFirstWord);
transformer('javascript is the best!', oneWord);
