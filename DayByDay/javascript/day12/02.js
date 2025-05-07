function parentesesValidos(string) {
  let paraLeft = 0;
  let paraRight = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(") {
      paraLeft += 1;
    } else if (string[i] === ")") {
      paraRight += 1;
    }
  }

  return paraLeft === paraRight ? true : false;
}
console.log(parentesesValidos("()()"));
console.log(parentesesValidos("(()"));
console.log(parentesesValidos("((()))"));
