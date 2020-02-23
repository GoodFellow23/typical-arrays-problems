
exports.min = function min (array) {
  return !array || array==0 ? 0 : array.sort((a,b)=>a-b).shift();
}

exports.max = function max (array) {
  return  !array || array==0 ? 0 : array.sort((a,b)=>a-b).reverse().shift();
}

exports.avg = function avg (array) {
  return !array || array==0 ? 0 : array.reduce((a,b)=> a+b)/array.length;
}
