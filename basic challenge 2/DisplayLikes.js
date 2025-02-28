function displayLikes(arr) {
  if (arr.length === 0) {
    return "no lone likes this";
  } else if (arr.length === 1) {
    return `${arr[0]} likes this`;
  } else if (arr.length === 2) {
    return `${arr[0]} & ${arr[1]} likes this`;
  } else if (arr.length === 3) {
    return `${arr[0]}, ${arr[1]} & ${arr[0]} likes this`;
  } else {
    return `${arr[0]}, ${arr[1]} & ${arr.length - 2} others likes this`;
  }
}

const likeArr = ["john", "johny", "joseph", "jeremy", "joshua", "jehovah"];
const likes = displayLikes(likeArr);
console.log(likes);
