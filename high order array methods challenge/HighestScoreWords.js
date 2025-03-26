// function highestScoringWord(str) {
//   const words = str.split(" ");

//   const scores = words.map((word) => {
//     let score = 0;
//     for (const letter of word) {
//       score += letter.charCodeAt(0) - 96;
//     }
//     return score;
//   });

//   //console.log(scores);

//   let highestScore = 0;
//   let highestIndex = 0;

//   for (let i = 0; i < scores.length; i++) {
//     if (scores[i] > highestScore) {
//       highestScore = scores[i];
//       highestIndex = i;
//     }
//   }

//   //console.log(highestScore, highestIndex);

//   //console.log(words[highestIndex]);
//   return words[highestIndex];
// }

function highestScoringWord(str) {
  const words = str.split(" ");

  console.log(words);
  const scores = words.map((word) =>
    Array.from(word).reduce((score, letter) => {
      return score + letter.charCodeAt(0) - 96;
    }, 0)
  );

  console.log(scores);

  const highestScore = Math.max(...scores);
  const highestScoreIndex = scores.indexOf(highestScore);
  //   console.log(highestScore);
  //   console.log(highestScoreIndex);
  console.log(words[highestScoreIndex]);
  return words[highestScoreIndex];
}

highestScoringWord("hello word xoxo");
