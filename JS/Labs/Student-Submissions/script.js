
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

const addSubmission = (submissions, newName, newScore) => {
    
    let newstudent = {
        name: "Jake",
        score: 78,
        passed: (newScore >= 60) ? true : false
    }
   console.log(submissions.push(newstudent))
}

console.log(addSubmission);


// const deleteSubmissionByIndex = (submissions, index) => {
//     submissions.splice(2,index);
// }

// const deleteSubmissionByName = (submissions, name) => {
//     submissions.splice(2,name);
// }

// const editSubmission = (submissions, index, score) => {
//     submissions.splice(2,index, score);
// }





