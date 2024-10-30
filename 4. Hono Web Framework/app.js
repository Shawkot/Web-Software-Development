/* import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();

app.get("/", (c) => c.text("Hello World!"));

export default app; */

import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();

app.get('/restaurants', (c) => c.text("Listing restaurants."));
app.post('/restaurants', (c) => c.text("Adding a restaurant."));
app.get('/restaurants/:id', (c) => {
  const id = c.req.param('id');
  return c.text(`Showing restaurant with id ${id}.`);
});
app.get('/restaurants/:id/reviews', (c) => {
  const id = c.req.param('id');
  return c.text(`Listing reviews for restaurant with id ${id}.`);
});
app.post('/restaurants/:id/reviews', (c) => {
  const id = c.req.param('id');
  return c.text(`Adding a review for restaurant with id ${id}.`)
})
app.delete('/restaurants/:id/reviews/:rid', (c) => {
  const id = c.req.param('id');
  const rid = c.req.param('rid');
  return c.text(`Removing review ${rid} from restaurant with id ${id}.`);
})
/* app.get(
  "/lists/:listId/items/:itemId",
  (c) => {
    const listId = c.req.param("listId");
    const itemId = c.req.param("itemId");

    return c.text(`List ${listId}, item ${itemId}`);
  },
); */
/* app.get(
  "/products/:id",
  (c) => c.text(`Information on product ${c.req.param("id")}`),
); */
/* app.get("/products/1", (c) => c.text("Information on product 1"));
app.get("/products/2", (c) => c.text("Information on product 2"));
app.get("/products/3", (c) => c.text("Information on product 3")); */


/* app.get('/', (c) => {
  if(c.req.query('operation') && c.req.query('number1') && c.req.query('number2')) {
    let num1 = Number(c.req.query('number1'));
    let num2 = Number(c.req.query('number2'));
    if(c.req.query('operation') === 'sum') {
      return c.text(`${num1 + num2}`);
    } else if(c.req.query('operation') === 'difference') {
      return c.text(`${num1 - num2}`)
    }
  }
  return c.text('Invalid parameters.');
}) */
/* app.get("/", (c) => c.text("The starting point."))
app.post("/", (c) => c.text("Postman pat."));
app.get('/it', (c) => c.text("I think so."));
app.on("cat", "/secrets", (c) => c.text("Meow!"));
app.on("whats", "/up", (c) => c.text("A movie!")); */
//app.get("*", (c) => c.text(`${c.req.method} ${c.req.path}`));

//app.get("/", (c) => c.text(`Name: ${c.req.query("name")}`));
/* app.get('/', (c) => {
  let name = "harry";
  if(c.req.query("name")) {
    name = c.req.query('name');
  }
  return c.text(`Hi ${name}`);
}) */

/* app.get("/", (c) => {
  let name = "Linus"
  if(c.req.query('name')) {
    name = c.req.query('name');
  }
  return c.text(`Once upon a time, there was a young kid called ${name}. ${name} was happy.`);
}); */

export default app;
