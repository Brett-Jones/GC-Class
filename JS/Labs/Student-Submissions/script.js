
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

    let checkScore = array.find(studentScore => studentScore.score) 
        return studentScore
    
    
    
    
    
    // [index] >= 60 ? true : false
    // if(checkScore = true){
    //     return array.passed = true
    // } else {
    //     return 'Did not pass'
    // }
}
let checkScore = editSubmission(submissions, 2, 61);

console.log(checkScore);










findSubmissionByName = (array, name) => {
    return array.find(findName => findName === name) || 'Student not found.';
}












