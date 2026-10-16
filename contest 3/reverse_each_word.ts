function reverseEachWord(str: string): string {
    const words = str.split(" ");

    const reversedWords = words.map((word) => {
        return word.split("").reverse().join("");
    });

    return reversedWords.join(" ");
}