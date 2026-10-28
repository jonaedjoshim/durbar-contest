function findFreeTime(
  bookedIntervals: [number, number][],
  workingHours: [number, number],
): [number, number][] {
  const [workStart, workEnd] = workingHours;

  const clipped = bookedIntervals
    .map(([s, e]): [number, number] => [
      Math.max(s, workStart),
      Math.min(e, workEnd),
    ])
    .filter(([s, e]) => s < e)
    .sort((a, b) => a[0] - b[0]);

  const merged: [number, number][] = [];

  for (const [s, e] of clipped) {
    if (merged.length > 0 && s <= merged[merged.length - 1][1]) {
      merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], e);
    } else {
      merged.push([s, e]);
    }
  }

  const free: [number, number][] = [];
  let cursor = workStart;

  for (const [s, e] of merged) {
    if (s > cursor) free.push([cursor, s]);
    cursor = Math.max(cursor, e);
  }

  if (cursor < workEnd) free.push([cursor, workEnd]);

  return free;
}

// ---------------------------------------------------------------
// LOCAL TESTING (ei part ta submit korar dorkar nai)
// ---------------------------------------------------------------

console.log(
  findFreeTime(
    [
      [10, 12],
      [14, 16],
    ],
    [9, 17],
  ),
);
console.log(
  findFreeTime(
    [
      [10, 12],
      [14, 16],
      [11, 15],
    ],
    [9, 17],
  ),
);
console.log(findFreeTime([], [9, 17]));
console.log(
  findFreeTime(
    [
      [0, 5],
      [5, 10],
      [20, 30],
    ],
    [9, 17],
  ),
);
console.log(findFreeTime([[9, 17]], [9, 17]));
console.log(
  findFreeTime(
    [
      [8, 10],
      [16, 20],
    ],
    [9, 17],
  ),
);
