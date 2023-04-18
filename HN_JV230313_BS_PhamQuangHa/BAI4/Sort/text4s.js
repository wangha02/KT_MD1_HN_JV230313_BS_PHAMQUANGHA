// CÁCH 1: Dùng SORT
function numberSort(arr) {
  arr.sort(function (a, b) {
    return b - a;
  });
  return arr;
}
let a = [3, 25, 38, 49, 12];
console.log(numberSort(a));

