function commonSkills(skills1: string[], skills2: string[]): string[] {
    const set1 = new Set(skills1.map((skill) => skill.toLowerCase()));
    const set2 = new Set(skills2.map((skill) => skill.toLowerCase()));

    const result: string[] = [];

    for (const skill of set1) {
        if (set2.has(skill)) {
            result.push(skill);
        }
    }

    return result.sort();
}