const getStore = async () => {
  const kv = await Deno.openKv();
  const count = await kv.get(["store"]);
  return count.value ?? "Nothing.";
}

/* const incrementCount = async () => {
  let count = await getStore();
  count++;
  await setStore(count);
}; */

const setStore = async (count) => {
  const kv = await Deno.openKv();
  await kv.set(["store"], count);
}

export { getStore, setStore };

/* let store = 0;

const setStore = (s) => store = s;

const getStore = () => store; */


//let count = 0;

/* const getCount = () => count;

const incrementCount = () => {
  count++;
};

export { getCount, incrementCount }; */