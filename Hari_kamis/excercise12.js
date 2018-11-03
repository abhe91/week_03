function tentukanDeretGeometri(arr) {
  var counter = 0;
//   var beda = arr[1] / arr[0];
  for(var i = 0; i< arr.length-1;i++){
    if(arr[i+1] / arr[i] !== arr[1] / arr[0]){
      counter++;
    }
  }
  return (counter === 0)
}



console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false

