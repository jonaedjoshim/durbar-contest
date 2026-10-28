function maxTasks(tasks: [number, number][]): number {
  const sorted = [...tasks].sort((a, b) => a[1] - b[1]);

  let count = 0;
  let lastFinish = -Infinity;

  for (const [start, finish] of sorted) {
    if (start >= lastFinish) {
      count++;
      lastFinish = finish;
    }
  }

  return count;
}

// ---------------------------------------------------------------
// LOCAL TESTING (ei part ta submit korar dorkar nai)
// ---------------------------------------------------------------

console.log(maxTasks([[1, 4], [2, 3], [3, 5], [7, 9]]));
console.log(maxTasks([[1, 2], [2, 3], [3, 4]]));
console.log(maxTasks([]));
console.log(maxTasks([[1, 5]]));
console.log(maxTasks([[1, 5], [2, 3], [4, 6]]));
console.log(maxTasks([[3, 5], [1, 2], [2, 3]]));