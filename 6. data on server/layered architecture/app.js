import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as countController from "./countController.js";

const app = new Hono();

app.get("/", countController.getCount);
app.post("/", countController.incrementAndGetCount);

Deno.serve(app.fetch);
