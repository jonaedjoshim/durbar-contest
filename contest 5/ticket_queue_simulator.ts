function simulateTicketQueue(commands: string[]): { queue: string[]; served: string[] } {
  const queue: string[] = [];
  const served: string[] = [];

  for (const command of commands) {
    if (command === "serve") {
      if (queue.length > 0) {
        served.push(queue.shift()!);
      }
    } else if (command.startsWith("join ")) {
      const name = command.slice(5);
      if (!queue.includes(name)) {
        queue.push(name);
      }
    } else if (command.startsWith("leave ")) {
      const name = command.slice(6);
      const index = queue.indexOf(name);
      if (index !== -1) {
        queue.splice(index, 1);
      }
    }
  }

  return { queue, served };
}