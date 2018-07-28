function bubbleSort(arr){
  let isSorted = false;
  let lastUnsorted = arr.length - 1;
  while (!isSorted){
    isSorted = true;
    for (let i = 0; i < lastUnsorted; i++){
      if (arr[i] > arr[i+1]){
        swap(arr, i, i + 1);
      }
    }
    lastUnsorted--;
  }
  return arr;
  // for (let i = 0; i < arr.length; i++){
  //   for (let j = 0; j < (arr.length - i - 1); j++){
  //     if (arr[j] > arr[j+1]){
  //       swap(arr, j, j+1);
  //     }
  //   }
  // }
  // return arr;
  //helper swap function
}

function swap(arr, idx1, idx2){
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}
