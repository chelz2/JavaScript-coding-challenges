function phoneNumberDictionary(phoneNumbers) {
  let phoneDirectory = new Map();
  for (const entry of phoneNumbers) {
    const [name, phoneNumber] = entry.split(":");
    phoneDirectory.set(name, phoneNumber);
  }
  return phoneDirectory;
}

const phoneNumbers = [
  "John:123-456-7890",
  "Jane:987-654-3210",
  "Joe:555-555-5555",
];

console.log(phoneNumberDictionary(phoneNumbers));
