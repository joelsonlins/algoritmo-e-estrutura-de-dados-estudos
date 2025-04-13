function teste(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let changes = 0;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        changes++;
      }
    }
    if (changes === 0) {
      break;
    }
  }

  return arr
}
array = [4,2,9,1];

console.log(teste(array));
