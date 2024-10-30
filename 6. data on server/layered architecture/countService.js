const getCount = async () => {
  const kv = await Deno.openKv()
  const count = await kv.get(['store'])
  return count.value ?? 0;
}

const  incrementCount = async () => {
  let count = await getCount();
  count++;
  await setCount(count);
}

const setCount = async (count) => {
  const kv = await Deno.openKv();
  await kv.set(['store'], count);
}

export { getCount, incrementCount }