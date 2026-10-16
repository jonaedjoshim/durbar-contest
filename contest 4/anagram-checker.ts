function isAnagram(s1: string, s2: string): boolean {
    const normalize = (s: string): string =>
        s.toLowerCase().replace(/[^a-z]/g, "").split("").sort().join("");

    return normalize(s1) === normalize(s2);
}