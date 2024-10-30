const getVisits = async () => {
  const kv = await Deno.openKv();
  const visitCount = await kv.get(['visits']);
  console.log(visitCount?.value);
  return visitCount?.value !== undefined ? Number(visitCount.value) : 0;
}

const  incrementVisits = async () => {
  let count = await getVisits();
  count++;
  await setVisits(count);
}

const setVisits = async (count) => {
  const kv = await Deno.openKv();
  console.log(count);
  await kv.set(['visits'], count);
}

export { getVisits, incrementVisits }