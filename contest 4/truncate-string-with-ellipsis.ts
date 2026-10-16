function truncateString(str: string, maxLength: number): string {
    if (str.length <= maxLength) {
        return str;
    }

    if (maxLength <= 3) {
        return "...";
    }

    return str.slice(0, maxLength - 3) + "...";
}