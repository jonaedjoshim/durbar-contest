function countNumberProperties(numbers: number[]): {
    even: number;
    odd: number;
    positive: number;
    negative: number
} {
    let even = 0;
    let odd = 0;
    let positive = 0;
    let negative = 0;

    for (const number of numbers) {
        if (number % 2 === 0) {
            even++;
        } else {
            odd++;
        }
        if (number > 0) {
            positive++;
        } else if (number < 0) {
            negative++;
        }
    }
    return { even, odd, positive, negative }
}