//solution 1
// function validateEmail(str) {
//   const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
//   return emailRegex.test(str);
// }

//solution 2
function validateEmail(email) {
  if (email.indexOf("@") === -1) {
    return false;
  }

  const [local, domain] = email.split("@");

  if (local.length === 0 || domain.length < 3) {
    return false;
  }

  const domainExtension = domain.split(".");

  if (
    domainExtension.length < 2 ||
    domainExtension[domainExtension.length - 1].length < 2
  ) {
    return false;
  }

  return true;
}

console.log(validateEmail("dfhkhfd.okdom"));

console.log(validateEmail("gg@jivan.com"));
