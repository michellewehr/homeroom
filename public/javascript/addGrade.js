

async function addGradeHandler(event) {
    event.preventDefault();

    const subject = document.querySelector('#subject');
    const subject_id = subject.options[subject.selectedIndex].value;
    const lastName = document.querySelector('#lastName');
    const student_id = lastName.options[lastName.selectedIndex].value;
    const assignment = document.querySelector('#assignment');
    const assignment_id = assignment.options[assignment.selectedIndex].value;
    const number_grade = document.querySelector('#studGrade').value;
    
    if (subject_id && student_id && assignment_id && number_grade) {
        const res = await fetch ('api/grades', {
            method: 'post',
            body: JSON.stringify({
                subject_id, student_id, assignment_id, number_grade
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if(res.ok) {
            document.location.replace('/grades/' + subject_id);
        } else {
            console.log('NOPE!');
        }
    }
}

document.querySelector('.addGrade').addEventListener('click', addGradeHandler);