// word freq counter in a string

function wordFreqCounter(str) {
  const words = str.toLowerCase();

  const arr = words.split(" ");
  //console.log(arr);

  let freqWordCounter = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 1) {
      if (freqWordCounter.has(arr[i])) {
        freqWordCounter.set(arr[i], freqWordCounter.get(arr[i]) + 1);
      } else {
        freqWordCounter.set(arr[i], 1);
      }
    }
  }

  return freqWordCounter;
}

console.log(
  wordFreqCounter("hello world from joshe hoshe hello hello  world !")
);

// alternative
function wordFreqCounter(str) {
  const words = str.split(/\W+/);

  const wordFreq = new Map();

  for (const word of words) {
    if (word === "") continue;

    if (wordFreq.has(word)) {
      wordFreq.set(word, wordFreq.get(word) + 1);
    } else {
      wordFreq.set(word, 1);
    }
  }

  return wordFreq;
}

console.log(wordFreqCounter("naval naval naval has said it"));
