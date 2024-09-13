
const submissions = [
    {
    name: "Jane",
    score: 95,
    passed: true
    },
    {
    name: "Joe",
    score: 77,
    passed: true
    },
    {
    name: "Jack",
    score: 59,
    passed: false
    },
    {
    name: "Jill",
    score: 88,
    passed: true
    }
]


const addSubmission = (array, newName, newScore) => {
    
    let newStudent = {
        name: newName,
        score: newScore,
        passed: newScore >= 60 ? true : false
    }
    array.push(newStudent);
}

addSubmission(submissions, 'Jim', 72);

console.log(submissions);



const deleteSubmissionByIndex = (array, index) => {
    submissions.splice(array, index);
}
deleteSubmissionByIndex(submissions, 1);

console.log(submissions);



deleteSubmissionByName = (array, name) => {
    submissions.splice(array, name);
}

deleteSubmissionByName(submissions, 'Jane');

console.log(submissions);



const editSubmission = (array, index, score) => {
    let object = array[index];
    object.score = score;
    object.passed = score >= 60;
}

let checkScore = editSubmission(submissions, 2, 61);

console.log(checkScore);










const findAverageScore = (array) => {
    let sum = 0;
    array.forEach(student => {
        sum += student.score;
    });
    return sum % array.length;
}

findAverageScore(submissions);

console.log





findSubmissionByName = (array, name) => {
    return array.find(findName => findName === name) || 'Student not found.';
}












