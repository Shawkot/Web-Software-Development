import * as scrypt from "https://deno.land/x/scrypt@v4.3.4/mod.ts";

const hash = scrypt.hash("asparagus");

console.log('Comparing hash with password');
let result = scrypt.verify("password", hash);
console.log(`Were they the same? ${result}`);

console.log('Comparing hash with asparagus');
result = scrypt.verify("asparagus", hash);
console.log(`Were they the same? ${result}`);

/* import * as scrypt from "https://deno.land/x/scrypt@v4.3.4/mod.ts";

const hash = scrypt.hash("asparagus");
console.log(hash); */