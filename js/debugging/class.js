function countWords(sentence) {
  const words = sentence.split("");
  return words.length;
}

console.log(countWords("hello world"));

function removeDuplicates(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (!result.includes(el)) {
      result.push(el);
    }
  }
  return result;
}

console.log(`removed: `, removeDuplicates([1, 2, 2, 4, 3, 4, 5, 6])); // 1 2 3 4 5 6
