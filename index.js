const arr = [3, 6, 1, 2, 7, 9, 0, 4, 5, 8];

const bubbleSort = (array) => {
  const len = array.length;
  let swapped = false;
  //
  for (let i = 0; i < len - 1; i++) {
    swapped = false;
    //
    for (let j = 0; j < len - 1; j++) {
      if (array[j] > array[j + 1]) {
        // swap
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return array;
};

console.log(bubbleSort(arr));
