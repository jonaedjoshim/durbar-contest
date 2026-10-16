function getDayOfWeek(year: number, month: number, day: number): string {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date(year, month - 1, day);
    return days[date.getDay()];
}