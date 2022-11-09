const arr = [3, 6, 1, 2, 7, 9, 0, 4, 5, 8];

const bubbleSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        // swap
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
    console.log(i, array);
  }
  return array;
};

console.log(bubbleSort(arr));
