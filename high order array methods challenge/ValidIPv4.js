function isValidIpv4(str) {
  if (!str) {
    console.log(false);
    return false;
  }
  const arr = str.split(".");

  const bool = arr.every((octat) => {
    return typeof +octat === "number" && +octat === "NaN";
  });

  if (bool === false) {
    console.log(false);
    return false;
  }

  if (
    bool === false ||
    arr.length === 0 ||
    arr.length !== 4 ||
    +arr[0] < 0 ||
    +arr[0] > 255 ||
    +arr[1] < 0 ||
    +arr[1] > 255 ||
    +arr[2] < 0 ||
    +arr[2] > 255 ||
    +arr[3] < 0 ||
    +arr[3] > 255
  ) {
    console.log(false);
    return false;
  }

  console.log(true);
  return true;
}

isValidIpv4("33.33.33.33");
