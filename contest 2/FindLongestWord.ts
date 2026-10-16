function findLongestWord(sentence: string): string {
    const words = sentence.match(/[a-zA-Z0-9]+/g) || [];
    let longest = "";

    for (const word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}