// CÁCH 2: Không dùng SORT
function numberSort(a) {
    for (let i = 0; i < a.length - 1; i++) {
      for (let j = i + 1; j < a.length; j++) {
        if (a[i] < a[j]) {
          let x = a[i];
          a[i] = a[j];
          a[j] = x;
        }
      }
    }
    return a;
  }
  let a = [3, 25, 38, 49, 12];
  console.log(numberSort(a)); 
  
