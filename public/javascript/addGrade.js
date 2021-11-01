
// async function addGradeHandler(event) {
//     event.preventDefault();


fetch('api/assignments')
.then(response => {
    return response.json();
})
.then(function(response) {
    const assignArr = response;
    assignArr.forEach(assignment => {
        let assignmentId = assignment.id;
        let assignmentName = assignment.assignment_name;
        console.log(assignmentId);
        console.log(assignmentName);
    })
})
.catch(err => {
    console.log(err);
})

async function addGradeHandler(event) {
    event.preventDefault();

    const subject = document.querySelector('#subject');
    const subject_id = subject.options[subject.selectedIndex].value;
    const lastName = document.querySelector('#lastName');
    const student_id = lastName.options[lastName.selectedIndex].value;
     console.log(subject_id);
    console.log(student_id);

    
}

document.querySelector('.addGrade').addEventListener('click', addGradeHandler);