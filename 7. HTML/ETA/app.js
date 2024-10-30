import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const app = new Hono();

const data = {
  object: "gravity",
  value: 0,
  math: "zero"
};

app.get("/", (c) => {
  if (c.req.query("object")) {
    data.object = c.req.query("object");
  }

  if (c.req.query("value")) {
    data.value = Number(c.req.query("value"));
    if(data.value > 0) {
      data.math = "positive";
    } else if(data.value < 0) {
      data.math = "negative";
    } else if(data.value === 0){
      data.math = "zero";
    }
  }

  return c.html(eta.render("index.eta", data));
});

/* app.get("/", (c) => {
  const data = {
    name: "Anonymous",
  };

  if (c.req.query("name")) {
    if(c.req.query("name") === "ADMIN") {
      data.name = "boss";
    } else {
      data.name = c.req.query("name");
    }
    
  }

  return c.html(eta.render("index.eta", data));
}); */
/* 
const data = {
  count: 0,
  secret: "Illuminati",
  heading: "Hello world!",
  variable: "<strong>Epic HTML!</strong>"
}

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });
const app = new Hono();

app.get('/', (c) => {
  data.count++;
  const render = eta.render('index.eta', data);
  return c.html(render);
})
 */
/* const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const app = new Hono();

app.get("/", (c) => c.html(eta.render("index.eta"))); */

Deno.serve(app.fetch);