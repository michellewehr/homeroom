async function addStudentHandler(event) {
   event.preventDefault();


   const first_name = document.querySelector('#firstName').value.trim();
   const last_name = document.querySelector('#lastName').value.trim();
   const guardian = document.querySelector('#guardian').value.trim();
   const guardian_email = document.querySelector('#guardianEmail').value.trim();

   if (first_name && last_name && guardian && guardian_email) {
      const res = await fetch('/api/students', {
         method: 'post',
         body: JSON.stringify({
            first_name, last_name, guardian, guardian_email
         }),
         headers: {
            'Content-Type': 'application/json'
         }
      });
      res.ok ? document.location.replace('./class-roster') : alert(`Student could not be added -- ${res.status}: ${res.statusText}`);
   }
}

document.querySelector('.addStudent').addEventListener('click', addStudentHandler);
document.querySelector('.backBtn').addEventListener('click', () => {
   window.history.back();
})