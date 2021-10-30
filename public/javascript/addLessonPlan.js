console.log('hi');
console.log(document.querySelector('#lessonDate').value);

    // const lesson_date = document.querySelector('#lessonDate');

    // lesson_date.addEventListener('change', () => {
    //     console.log(lesson_date.value)
    //     const subject = document.querySelector('#subject')
    //     const subject_id = subject.options[subject.selectedIndex].value;
    //     console.log(subject_id);
    //     console.log(document.querySelector('#lessonName').value.trim());
    //     console.log(document.querySelector('#objective').value.trim());
    //     console.log(document.querySelector('#activity').value.trim());
    //     console.log(document.querySelector('#materials').value.trim());
    // })


    // TODO: look into dateonly-- maybe problem there with post?
// add lesson plan
async function addLessonPlanHandler(event) {
    event.preventDefault();
    console.log('hello');

    //gets user inputs-- works
    const lesson_date = document.querySelector('#lessonDate').value;
    const subject = document.querySelector('#subject')
    const subject_id = subject.options[subject.selectedIndex].dataset.subjectId
    const lesson_name = document.querySelector('#lessonName').value.trim();
    const lesson_objective = document.querySelector('#objective').value.trim();
    const lesson_activity = document.querySelector('#activity').value.trim();
    const materials = document.querySelector('#materials').value.trim();

    
    if (lesson_date && subject && subject_id && lesson_name && lesson_objective && lesson_activity && materials) {
    const res = await fetch('/api/lessonplans', {
        method: 'post',
        body: JSON.stringify({
            lesson_date, subject_id, lesson_name, lesson_objective, lesson_activity, materials
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if(res.ok) {
        document.location.replace('/lesson-plans');
    } else {
        console.log('NOPE!');
    }
}
}

document.querySelector('.addLesson').addEventListener('submit', addLessonPlanHandler);
