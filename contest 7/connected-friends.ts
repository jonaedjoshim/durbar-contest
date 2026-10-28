function countConnectedFriends(
  friendships: string[][],
  startPerson: string,
): number {
  const graph: Map<string, string[]> = new Map();

  for (const [a, b] of friendships) {
    if (!graph.has(a)) graph.set(a, []);
    if (!graph.has(b)) graph.set(b, []);
    graph.get(a)!.push(b);
    graph.get(b)!.push(a);
  }

  if (!graph.has(startPerson)) return 1;

  const visited = new Set<string>([startPerson]);
  const stack = [startPerson];

  while (stack.length > 0) {
    const person = stack.pop()!;

    for (const friend of graph.get(person)!) {
      if (!visited.has(friend)) {
        visited.add(friend);
        stack.push(friend);
      }
    }
  }

  return visited.size;
}

// ---------------------------------------------------------------
// LOCAL TESTING (ei part ta submit korar dorkar nai)
// ---------------------------------------------------------------

console.log(
  countConnectedFriends(
    [
      ["Alice", "Bob"],
      ["Bob", "Charlie"],
      ["David", "Eve"],
    ],
    "Alice",
  ),
);

console.log(
  countConnectedFriends(
    [
      ["Alice", "Bob"],
      ["Charlie", "David"],
    ],
    "Eve",
  ),
);

console.log(countConnectedFriends([], "Solo"));
console.log(countConnectedFriends([["A", "B"]], "B"));
console.log(
  countConnectedFriends(
    [
      ["A", "B"],
      ["B", "C"],
      ["C", "D"],
      ["E", "F"],
    ],
    "A",
  ),
);
