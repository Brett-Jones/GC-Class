
function printCourses(courseObject) {
    for (const course in courseObject) {
        console.log(`Course: ${course}, Enrolled Students: ${courseObject[course]}`);
    }
}









