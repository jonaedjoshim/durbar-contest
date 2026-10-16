function convertTemperature(value: number, unit: string): number {
    let result: number;

    if (unit === 'C') {
        result = (value * 9 / 5) + 32;
    } else {
        result = (value - 32) * 5 / 9;
    }

    return Math.round(result * 100) / 100;
}