
const addSong = async (songData) => {
  const kv = await Deno.openKv();
  await kv.set(['songs', songData.name], songData);
};

const retrieveSong = async () => {
  const kv = await Deno.openKv();
  const songData = kv.list({ prefix: ['songs'] });
  const songs = [];
  for await (const song of songData) {
    if(song != null && song.value != null) {
      songs.push(song.value);
    }
  }

  return songs;
};

export { addSong, retrieveSong };