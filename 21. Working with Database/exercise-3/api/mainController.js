import { Eta } from "./deps.js";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const htmlWithUser = async (c, viewTemplate, data) => {
  data = data || {};
  data.user = c.user;
  return c.html(eta.render(viewTemplate, data));
};

const showMain = async (c) => {
  return await htmlWithUser(c, "main.eta");
};

export { showMain };
