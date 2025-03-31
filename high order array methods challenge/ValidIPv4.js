function isValidIpv4(str) {
  if (!str) {
    console.log(false);
    return false;
  }
  const arr = str.split(".");

  if (arr.length > 4) {
    return false;
  }

  return arr.every((octet) => {
    const num = parseInt(octet);
    return num >= 0 && num <= 255 && octet === num.toString();
  });
}

const ipv4 = isValidIpv4("ss.33.33.33");

console.log(ipv4);
