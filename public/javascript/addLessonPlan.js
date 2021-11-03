
async function addAssignment(event) {
    event.preventDefault();
    let assignment_name = document.querySelector('#assessment').value.trim();
    const subject_id = subject.options[subject.selectedIndex].value;

    const res = await fetch('api/assignments', {
        method: 'post',
        body: JSON.stringify({
            assignment_name, subject_id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    res.ok ? addLessonPlanHandler() : alert(`Assignment could not be added -- ${res.status}: ${res.statusText}`);
}

// add lesson plan
async function addLessonPlanHandler(event) {

    //gets user inputs-- works
    const lesson_date = document.querySelector('#lessonDate').value;
    const subject = document.querySelector('#subject')
    const subject_id = subject.options[subject.selectedIndex].value;
    const lesson_name = document.querySelector('#lessonName').value.trim();
    const lesson_objective = document.querySelector('#objective').value.trim();
    const lesson_activity = document.querySelector('#activity').value.trim();
    let lesson_assessment = document.querySelector('#assessment').value.trim();
    const materials = document.querySelector('#materials').value.trim();

    // console.log(subject_id);

    if (lesson_date && subject && subject_id && lesson_name && lesson_objective && lesson_activity && materials) {
        const res = await fetch('api/lessonplans/', {
            method: 'post',
            body: JSON.stringify({
                lesson_date, subject_id, lesson_name, lesson_objective, lesson_activity, lesson_assessment, materials
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        res.ok ? document.location.replace('/lesson-plans') : alert(`Lesson plan could not be added -- ${res.status}: ${res.statusText}`);
    }
}



document.querySelector('.submitAddLeson').addEventListener('click', addAssignment);
