function findFirstUniqueChar(s: string): string | number {
    const freq: Record<string, number> = {};

    for (const ch of s) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    for (const ch of s) {
        if (freq[ch] === 1) return ch;
    }

    return -1;
}