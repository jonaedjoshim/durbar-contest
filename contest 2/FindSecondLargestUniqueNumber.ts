function findSecondLargestUnique(numbers: number[]): number | null {
    const uniqueNums = Array.from(new Set(numbers));
    if (uniqueNums.length < 2) return null;

    uniqueNums.sort((a, b) => b - a);
    return uniqueNums[1];
}