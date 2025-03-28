function validAnagram(str1, str2) {
  const strCharFreq1 = str1.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
  const strCharFreq2 = str2.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  console.log(strCharFreq1, strCharFreq2);

  return Object.keys(strCharFreq1).every(
    (char) => strCharFreq1[char] === strCharFreq2[char]
  );
}

let bool;

bool = validAnagram("slice", "lices");
console.log(bool);

bool = validAnagram("dgfgdf dfhhf", "sgfjgsjf");
console.log(bool);
