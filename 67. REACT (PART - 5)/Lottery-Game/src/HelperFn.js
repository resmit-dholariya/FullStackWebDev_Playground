function genTickets(n) {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * 10);
  }
  return arr;
}

function sum(arr) {
  return arr.reduce((sum, ele) => sum + ele, 0);
}

export { genTickets, sum };
