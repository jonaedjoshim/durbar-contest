interface NotificationEvent {
  type: "ADD" | "READ" | "CLEAR";
  count?: number;
}

function updateNotificationCount(
  initialCount: number,
  events: NotificationEvent[],
): number {
  let count = initialCount;

  for (const event of events) {
    if (event.type === "ADD") {
      count += event.count ?? 1;
    } else if (event.type === "READ") {
      count = Math.max(0, count - (event.count ?? 1));
    } else if (event.type === "CLEAR") {
      count = 0;
    }
  }

  return count;
}

// ---------------------------------------------------------------
// LOCAL TESTING (ei part ta submit korar dorkar nai)
// ---------------------------------------------------------------

console.log(
  updateNotificationCount(2, [
    { type: "ADD", count: 3 },
    { type: "READ", count: 1 },
  ]),
);

console.log(
  updateNotificationCount(5, [
    { type: "READ", count: 10 },
    { type: "ADD", count: 2 },
    { type: "CLEAR" },
  ]),
);

console.log(updateNotificationCount(0, []));
console.log(updateNotificationCount(3, [{ type: "READ" }]));
console.log(updateNotificationCount(3, [{ type: "ADD" }]));
console.log(updateNotificationCount(10, [{ type: "READ", count: 100 }]));
