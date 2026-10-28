interface Student {
  name: string;
  score: number;
  rank?: number;
}

function rankStudents(students: Student[]): Student[] {
  const sorted = [...students]
    .map((student, index) => ({ student, index }))
    .sort((a, b) => {
      if (b.student.score !== a.student.score) {
        return b.student.score - a.student.score;
      }
      return a.index - b.index;
    })
    .map((entry) => entry.student);

  const result: Student[] = [];

  for (let i = 0; i < sorted.length; i++) {
    const rank =
      i > 0 && sorted[i].score === sorted[i - 1].score
        ? result[i - 1].rank!
        : i + 1;

    result.push({ ...sorted[i], rank });
  }

  return result;
}

// ---------------------------------------------------------------
// LOCAL TESTING (ei part ta submit korar dorkar nai)
// ---------------------------------------------------------------

console.log(
  rankStudents([
    { name: "Alice", score: 90 },
    { name: "Bob", score: 95 },
    { name: "Charlie", score: 90 },
    { name: "David", score: 85 },
  ]),
);

console.log(
  rankStudents([
    { name: "Eva", score: 100 },
    { name: "Frank", score: 100 },
    { name: "Grace", score: 100 },
  ]),
);

console.log(rankStudents([]));
console.log(rankStudents([{ name: "Solo", score: 50 }]));
