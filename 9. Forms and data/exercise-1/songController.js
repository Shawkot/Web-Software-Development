import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import * as songService from './songService.js';

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const renderSongs = async (c) => {
  const data = {
    songs: await songService.retrieveSong(),
  };
  console.log(data);
  return c.html(
    eta.render('index.eta', data)
  );
};

const addAndRenderSongs = async (c) => {
  const body = await c.req.parseBody();
  //console.log(`body: ${body}`);
  await songService.addSong(body);
  return c.redirect('/');
  //return await renderSongs(c);
};

export { renderSongs, addAndRenderSongs };
