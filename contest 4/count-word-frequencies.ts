function countWordFrequencies(sentence: string): Record<string, number> {
    const result: Record<string, number> = {};

    const words = sentence
        .toLowerCase()
        .split(/[^a-z0-9]+/)
        .filter((word) => word.length > 0);

    for (const word of words) {
        result[word] = (result[word] || 0) + 1;
    }

    return result;
}