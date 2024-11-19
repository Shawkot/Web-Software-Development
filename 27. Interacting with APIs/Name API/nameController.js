import * as nameService from "./nameService.js";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const getNames = (c) => {
  return c.json(nameService.getNames());
};

const validator = z.object({
  name: z.string().min(1),
})
const postName = async (c) => {
  try {
    const body = await c.req.json();
    const validationResult = validator.safeParse(body);
    if(!validationResult.success) {
      return c.json({
        validation: "fail",
        errors: validationResult.error.format(),
      })
  }
    nameService.addName(body.name);
    return c.json({ validation: "success" });
  } catch(error) {
    return c.json({
      validation: "fail",
      errors: validationResult.error.format(),
    })
  } 
};

export { getNames, postName };