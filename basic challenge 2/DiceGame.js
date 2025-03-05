// function diceGameSimulation1(num) {
//   const result = [];

//   for (let i = 0; i < num; i++) {
//     let resultObj = {};

//     resultObj.dice1 = Math.floor(Math.random() * 6) + 1;
//     resultObj.dice2 = Math.floor(Math.random() * 6) + 1;
//     resultObj.sum = resultObj.dice1 + resultObj.dice2;

//     if (resultObj.sum === 7 || resultObj.sum === 11) {
//       resultObj.resultult = "win";
//     } else if (
//       resultObj.sum === 2 ||
//       resultObj.sum === 3 ||
//       resultObj.sum === 12
//     ) {
//       resultObj.resultult = "lose";
//     } else {
//       resultObj.resultult = "roll again";
//     }

//     result.push(resultObj);
//   }
//   return result;
// }

//OR
function rollDice() {
  return Math.floor(Math.random() * 6 + 1);
}

function diceGameSimulation(numSimulation) {
  const results = [];

  for (let i = 0; i < numSimulation; i++) {
    const dice1 = rollDice();
    const dice2 = rollDice();
    const sum = dice1 + dice2;

    let result = "";
    if (sum === 7 || sum === 11) {
      result = "win";
    } else if (sum === 2 || sum === 3 || sum === 12) {
      result = "lose";
    } else {
      result = "roll again";
    }

    results.push({ dice1, dice2, sum, result });
  }
  return results;
}

const dice2 = diceGameSimulation(3);
console.log(dice2);
