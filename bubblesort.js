function bubbleSort(arr) {
  let isSorted = false;
  let lastUnsorted = arr.length - 1;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < lastUnsorted; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i);
        isSorted = false;
      }
    }
    lastUnsorted--;
  }
  return arr;

  // different implementation that will run O(n) times by default

  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = 0; j < arr.length - i - 1; j++) {
  //     if (arr[j] > arr[j + 1]) {
  //       swap(arr, j);
  //     }
  //   }
  // }
  // return arr;
  // helper swap function
}

function swap(array, index) {
  // side effects
  const oldLeftValue = array[index];
  array[index] = array[index + 1];
  array[index + 1] = oldLeftValue;
}
