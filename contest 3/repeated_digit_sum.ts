function repeatedDigitSum(n: number): number {
    while (n >= 10) {
        const digits = n.toString().split("");
        let sum = 0;

        for (const digit of digits) {
            sum += parseInt(digit);
        }

        n = sum;
    }

    return n;
}