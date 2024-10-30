import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import {
  getSignedCookie,
  setSignedCookie,
} from "https://deno.land/x/hono@v3.12.11/helper.ts";

const app = new Hono();

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

// add functionality 
const secret = 'zahra';

app.get('/', async (c) => {
  let count = await getSignedCookie(c, secret, 'count') ?? 0;
  count = Number(count) + 1;
  console.log(count);
  await setSignedCookie(c, 'count', `${count}`, secret, { path: '/'});
  return c.html(
    eta.render('index.eta', {visitCount: count} )
  )
  
})
export default app;
