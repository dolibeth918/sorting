function mergeSort(arr){
  if (arr.length < 2){
    return arr;
  }
  let splits = split(arr), left = splits[0], right = splits[1];
  return merge(mergeSort(left), mergeSort(right));
}
//returns two nested arrs ex: [3, 4, 5, 6, 7] => [[3, 4], [5, 6, 7]];
function split(arr){
  let center = arr.length / 2;
  let left = arr.slice(0, center);
  let right = arr.slice(center);
  return [left, right];
}

function merge(left, right){
  const merged = [];
  let leftIdx = 0, rightIdx = 0;
  while (leftIdx < left.length && rightIdx < right.length){
    if (left[leftIdx] < right[rightIdx]){
      merged.push(left[leftIdx]);
      leftIdx++;
    } else {
      merged.push(right[rightIdx]);
      rightIdx++;
    }
  }
  // if one arr is longer than the other, just push the rest of that arr into merged
  for (; leftIdx < left.length; leftIdx++) merged.push(left[leftIdx]);
  for (; rightIdx < right.length; rightIdx++) merged.push(right[rightIdx]);
  return merged;
}
