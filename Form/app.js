import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as addressController from "./addressController.js";

const app = new Hono();

app.get("/", addressController.listAddresses);
app.post("/addresses", addressController.addAddressAndListAddresses);

Deno.serve(app.fetch);