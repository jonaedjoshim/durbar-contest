function formatCountdown(totalSeconds: number): string {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (n: number): string => String(n).padStart(2, "0");

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

// LOCAL TESTING

console.log(formatCountdown(3661));
console.log(formatCountdown(59));
console.log(formatCountdown(0));
console.log(formatCountdown(3600));
console.log(formatCountdown(86399));
console.log(formatCountdown(10000000));
