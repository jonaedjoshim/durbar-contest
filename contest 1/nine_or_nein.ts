function checkMathOperationsForNine(a: number, b: number): string {
    const sum = a + b;
    const diff = a - b;
    const mul = a * b;
    const div = a / b;

    if (sum === 9 || diff === 9 || mul === 9 || div === 9) {
        return "Nine";
    }
    return "Nein";
}