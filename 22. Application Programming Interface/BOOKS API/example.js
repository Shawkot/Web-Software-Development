const data = {
  "day": 1,
  "month": 1,
  "country": "fi",
};

const response = await fetch("https://nameday.abalin.net/api/V1/getdate", {
  headers: {
    "Content-Type": "application/json",
  },
  method: "POST",
  body: JSON.stringify(data),
});

const jsonData = await response.json();
console.log(jsonData.nameday.fi);

/* const response = await fetch("https://dog.ceo/api/breeds/image/random");
const jsonData = await response.json();
console.log(jsonData.message); */

//Deno.serve(app.fetch);

/* import { Hono } from "./deps.js";
import { sql } from "./database.js";

const app = new Hono();

app.get("/addresses", async (c) => {
  return c.json(await sql`SELECT * FROM addresses`);
});

app.post("/addresses", async (c) => {
  const body = await c.req.json();
  await sql`INSERT INTO addresses (name, address) VALUES (${body.name}, ${body.address})`;
  return c.json({ status: "ok" });
}); */

/* import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();

app.post('/', async (c) => {
  const body = await c.req.json();
  console.log(body);
  return c.json(body);
}) */

/* app.get("/secret/:secret", (c) => {
    const secret = c.req.param('secret');
    return c.json({secret: secret});   
}) */

//Deno.serve(app.fetch);

//export default app;

/* import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();

const data = {
  name: "Karen Spärck Jones",
  yearOfBirth: 1935,
  title: "Professor",
};

app.get("/", (c) => c.json(data));

app.post("/", async (c) => {
  const body = await c.req.json();
  console.log(body);
  body.message = "thanks";
  return c.json(body);
});

Deno.serve(app.fetch); */