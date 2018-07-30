function selectionSort(array) {
  // change code below this line
  let smallest;
  for (let i = 0; i < array.length; i++){
    // assume that the smallest element is i
    smallest = i;
    for (let j = i + 1; j < array.length; j++){
      // if at any point the array at another index is smaller:
      if (array[j] < array[smallest]){
        // set the new index to be the smallest
        smallest = j;
      }
    }
    if (i !== smallest)
    swap(array, i, smallest);
  }
  return array;
}
function swap(arr, idx1, idx2){
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}