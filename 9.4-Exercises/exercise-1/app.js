import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as songController from "./songController.js";

const app = new Hono();

app.get("/", songController.renderSongs);
app.post('/songs', songController.addAndRenderSongs);

export default app;