// return longest sequence element length of an array
function longestConsecutiveSequence(arr) {
  const numSet = new Set(arr);
  let longestSequence = 0;

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentSequence = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentSequence++;
      }

      longestSequence = Math.max(longestSequence, currentSequence);
    }
  }

  return longestSequence;
}

const longestSeq = longestConsecutiveSequence([4, 6, 2, 8, 7, 3, 4, 4]);
console.log(longestSeq);
