// solution 1
// function formatPhoneNumber(arr) {
//   const areaCode = arr.slice(0, 3).join("");
//   const prefix = arr.slice(3, 6).join("");
//   const phone = arr.slice(6).join("");

//   return `(${areaCode}) ${prefix}-${phone}`;
// }

// solution 2
// function formatPhoneNumber(arr) {
//   const formatted = arr.join("");

//   return `(${formatted.substring(0, 3)}) ${formatted.substring(
//     3,
//     6
//   )}-${formatted.substring(6)}`;
// }

// solution 3
const formatPhoneNumber = (arr) =>
  `(${arr.slice(0, 3).join("")}) ${arr.slice(3, 6).join("")}-${arr
    .slice(6)
    .join("")}`;

const phone = formatPhoneNumber([3, 4, 6, 7, 3, 5, 8, 9, 3, 1]);

console.log(phone);
