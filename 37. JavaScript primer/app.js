let list = []

const enqueue = (item) => {
  list.push(item);
  return list;
}

const dequeue = () => {
  const shifted = list.shift();
  console.log(`shifted value is ${shifted}`);
  return list;
}

enqueue('one');
console.log(list);
enqueue('two');
console.log(list);
dequeue();
console.log(list);

const queue = []
for (let i = 0; i < 6; i++) {
  queue.push(i);
}
console.log(queue);

queue.forEach(value => {
  console.log(value);
})
