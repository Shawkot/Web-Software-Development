import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();

app.get('/', (c) => c.text("Hi there!"));
app.get('/congrats', (c) => c.text(`Congrats, ${c.req.query('heroOfTheDay')}!`))

app.get('/items/:id', (c) => c.text(`Retrieving item ${c.req.param('id')}.`));

app.post('/items', (c) => c.text("Adding an item."));

export default app;