/* const countryNames = new Map();
countryNames.set("FIN", "Finland");
countryNames.set("SWE", "Sweden");

countryNames.forEach((value, key) => {
  console.log(`${key} -> ${value}`);
});

console.log("---");

const countries = new Set();
countries.add("Finland");
countries.add("Sweden");
countries.forEach((value) => {
  console.log(value);
}); */

const countryNames = new Map();
countryNames.set("FIN", "Finland");
countryNames.set("SWE", "Sweden");

for (const [key, value] of countryNames) {
  console.log(`${key} --> ${value}`);
}

console.log("---");

const countries = new Set();
countries.add("Finland");
countries.add("Sweden");
for (const value of countries) {
  console.log(value);
}