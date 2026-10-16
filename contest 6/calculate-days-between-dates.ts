function daysBetweenDates(date1: string, date2: string): number {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  const diffMs = Math.abs(d2.getTime() - d1.getTime());
  const msPerDay = 1000 * 60 * 60 * 24;

  return Math.round(diffMs / msPerDay);
}
