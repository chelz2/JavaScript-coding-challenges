// function generateHashtag(str) {
//   if (!str || str.trim() === "") {
//     return false;
//   }

//   const hashtag =
//     "#" +
//     str
//       .split(" ")
//       .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//       .join("");

//   if (hashtag.length > 140) {
//     return false;
//   }

//   return hashtag;
// }

// alternative
function generateHashtag(str) {
  const hashtag = str.split(" ").reduce((hash, word) => {
    return hash + word.charAt(0).toUpperCase() + word.substring(1);
  }, "#");

  //   console.log(hashtag);
  return hashtag.length === 1 || hashtag.length > 140 ? false : hashtag;
}

const hashtag = generateHashtag(" js is cool");
console.log(hashtag);

const str = " dgs jgd ";
console.log(str.trim());
console.log(str);
