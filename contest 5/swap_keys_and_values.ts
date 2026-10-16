function swapKeysAndValues(obj: Record<string, string | number>): Record<string, string> {
    const result: Record<string, string> = {};

    for (const key in obj) {
        result[String(obj[key])] = key;
    }

    return result;
}