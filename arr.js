let students = [
  {
    id: 1,
    name: "Bikash",
    mark: 50,
  },
  {
    id: 2,
    name: "Saroj",
    mark: 35,
  },
  {
    id: 3,
    name: "Ram",
    mark: 38,
  },
];

// console.log("before", students);

// for (let i = 0; i < students.length; i++) {
//   const student = students[i];

//   if (student.id === 2) {
//     // update
//     student.name = "Sujal";
//   } else {
//     // do nothing
//   }
// }

// const updatedStudents = students.map((student) => {
//   if (student.id === 2) {
//     return {
//       id: student.id,
//       name: "Sujal",
//     };
//   } else {
//     return student;
//   }
// });

// students = updatedStudents;

// console.log("old students", students);
// console.log("updatedStudents", updatedStudents);

// map concept => existing array -> some operation -> new array
const numbers = [1, 2, 3, 4, 5];
// [2, 4,6,8,10]
const evenNumbers = numbers.map((number) => {
  const doubled = number * 2;
  return doubled;
});
console.log("evenNumbers", evenNumbers);

const updatedStudentMarks = students.map((student) => {
  const isFailed = 40 > student.mark;

  if (isFailed) {
    // failed uslai // grace mark = passingMark - obtainedMark
    return {
      id: student.id,
      name: student.name,
      mark: 40,
    };
  } else {
    return student;
  }
});

console.log("updatedStudentMarks", updatedStudentMarks);

// find method
// const studentFound = students.find((student) => {
//   // have to return true/ false // boolean
//   if (student.id === 8) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log("studentFound with id 2", studentFound);

// filter method
const failedStudents = students.filter((student) => {
  // have to return true/ false // boolean
  if (student.mark < 40) {
    return true;
  } else {
    return false;
  }
});
console.log("failedStudents", failedStudents);

// split: method of string
// the word with greater than 3 chars, i need to remove it.
// input: We are learning about javascript array and string.
// output: We are and
const sentence = "We are learning about javascript array and string.";
// ["We", "are", "learning", "about", "javascript", "array", "and", "string."]

const words = sentence.split(" ");
console.log("words", words);

const wordWithLessThan3Chars = words.filter((word) => {
  if (word.length > 3) {
    return false;
  } else {
    return true;
  }
});
console.log("word with less than 3 chars", wordWithLessThan3Chars); // [ 'We', 'are', 'and' ]

// includes: array method
const isAboutExistInWordWithLessThan3Chars =
  wordWithLessThan3Chars.includes("about");
console.log(
  "isAboutExistInWordWithLessThan3Chars",
  isAboutExistInWordWithLessThan3Chars
);

// forEach: similar to map: returns new array but forEach does not

// input: [ 'We', 'are', 'and' ], output: [ 'We', 'are', 'learning', 'js', 'and', 'nodejs' ]
// [ 'We', 'are', 'and' ]
// [ 'We', 'are', 'learning', 'and' ]
// [ 'We', 'are', 'learning', 'js', 'and'  ]
// [ 'We', 'are', 'learning', 'js', 'and', 'nodejs' ]

wordWithLessThan3Chars.forEach((word, index) => {
  if (word === "are") {
    const tempWord = wordWithLessThan3Chars[index + 1];
    wordWithLessThan3Chars[index + 1] = "learning";
    wordWithLessThan3Chars[index + 2] = tempWord;
  }
});

console.log("wordWithLessThan3Chars", wordWithLessThan3Chars);

wordWithLessThan3Chars.forEach((word, index) => {
  if (word === "learning") {
    const tempWord = wordWithLessThan3Chars[index + 1];
    wordWithLessThan3Chars[index + 1] = "js";
    wordWithLessThan3Chars[index + 2] = tempWord;
  }
});
console.log("wordWithLessThan3Chars", wordWithLessThan3Chars);

wordWithLessThan3Chars.push("nodejs");

console.log("wordWithLessThan3Chars", wordWithLessThan3Chars);
