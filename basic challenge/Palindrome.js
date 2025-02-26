function isPalindrome(str) {
  const formattedText = removeNonAlphanumeric(str.toLowerCase());
  const reverseTxt = reverseStr(formattedText);
  return formattedText === reverseTxt;
}

function removeNonAlphanumeric(str) {
  let formattedStr = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (isAlphanumeric(char)) {
      formattedStr += char;
    }
  }
  console.log(formattedStr);
  return formattedStr;
}

function isAlphanumeric(chr) {
  const code = chr.charCodeAt(0);
  return (code >= 48 && code <= 57) || (code >= 97 && code <= 122);
}

function reverseStr(str) {
  let reverseString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str[i];
  }
  console.log(reverseString);
  return reverseString;
}

// alternate solution

// function isPalindrome(str) {
//   const strFormmated = str.toLowerCase().replace(/[^a-z0-9]/g, "");
//   const reverseStr = strFormmated.split("").reverse().join("");

//   return strFormmated === reverseStr;
// }

const text = isPalindrome("Madam");
console.log(text);
