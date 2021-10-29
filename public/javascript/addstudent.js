async function addStudentHandler(event) {
    event.preventDefault();

    const last_name = document.querySelector('input[name="lastName"]').value.trim();
    const first_name = document.querySelector('input[name="firstName"]').value.trim();
    const guardian = document.querySelector('input[name="guardian"]').value.trim();
    const guardian_email = document.querySelector('input[name="email"]').value.trim();

    console.log(last_name, first_name, guardian, guardian_email)

    if (last_name, first_name, guardian, guardian_email) {
        const response = await fetch(`/api/students`, {
            method: 'POST',
            body: JSON.stringify({
                last_name,
                first_name,
                guardian_email,
                guardian
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    
        if (response.ok) {
            document.location.replace('/class-roster');
        } else {
            alert(response.statusText);
        }
    }

}
  
document.querySelector('.add-student-form').addEventListener('submit', addStudentHandler);