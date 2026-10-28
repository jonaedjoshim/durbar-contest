function trackElevator(
  startFloor: number,
  minFloor: number,
  maxFloor: number,
  commands: string[]
): number {
  let current = startFloor;

  for (const command of commands) {
    if (command === "UP" && current < maxFloor) {
      current++;
    } else if (command === "DOWN" && current > minFloor) {
      current--;
    }
  }

  return current;
}

// ---------------------------------------------------------------
// LOCAL TESTING (ei part ta submit korar dorkar nai)
// ---------------------------------------------------------------

console.log(trackElevator(0, 0, 10, ["UP", "UP", "DOWN", "UP"]));
console.log(trackElevator(9, 0, 10, ["UP", "UP", "UP", "DOWN"]));
console.log(trackElevator(5, 0, 10, []));
console.log(trackElevator(0, 0, 10, ["DOWN", "DOWN"]));
console.log(trackElevator(10, 0, 10, ["UP", "UP"]));
console.log(trackElevator(0, -5, 5, ["DOWN", "DOWN", "DOWN"]));