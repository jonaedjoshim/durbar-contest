function countEvenOdd(numbers: number[]): { even: number; odd: number } {
    let even = 0;
    let odd = 0;

    for (const n of numbers) {
        if (n % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }

    return { even, odd };
}