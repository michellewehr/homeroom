
async function addAssignment(event) {
    event.preventDefault();
    const assignment_name = document.querySelector('#lessonName').value.trim();
    let subject_id = subject.options[subject.selectedIndex].value;

    if (assignment_name && subject_id) {
        const res = await fetch('api/assignments', {
            method: 'post',
            body: JSON.stringify({
                assignment_name, subject_id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        res.ok ? addLessonPlanHandler() : alert(`Assignment could not be created. ${res.status}: ${res.statusText}`);
    } else {
        alert(`You must have a lesson name and a subject selected. Try again?`);
        return;
    }
}

// add lesson plan
async function addLessonPlanHandler() {
    const lesson_date = document.querySelector('#lessonDate').value;
    const subject = document.querySelector('#subject')
    let subject_id = subject.options[subject.selectedIndex].value;
    const lesson_name = document.querySelector('#lessonName').value.trim();
    const lesson_objective = document.querySelector('#objective').value.trim();
    const lesson_activity = document.querySelector('#activity').value.trim();
    let lesson_assessment = document.querySelector('#assessment').value.trim();
    const materials = document.querySelector('#materials').value.trim();

    if (lesson_date && subject_id && lesson_name && lesson_objective && lesson_activity && lesson_assessment && materials) {
        const res = await fetch('api/lessonplans/', {
            method: 'post',
            body: JSON.stringify({
                lesson_date, subject_id, lesson_name, lesson_objective, lesson_activity, lesson_assessment, materials
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        res.ok ? document.location.replace('/lesson-plans') : alert(`Lesson plan could not be added -- ${res.status}: ${res.statusText}`);
    } else {
        alert(`All fields are required to add a lesson plan!`);
        return;
    }
}

document.querySelector('.submitAddLeson').addEventListener('click', addAssignment);
document.querySelector('.backBtn').addEventListener('click', () => {
    window.history.back();
})
