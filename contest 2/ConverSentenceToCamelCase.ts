function convertToCamelCase(sentence: string): string {
    const words = sentence.trim().split(/\s+/).filter(w => w.length > 0);
    if (words.length === 0) return "";

    return words
        .map((word, index) => {
            const lower = word.toLowerCase();
            if (index === 0) return lower;
            return lower[0].toUpperCase() + lower.slice(1);
        })
        .join("");
}