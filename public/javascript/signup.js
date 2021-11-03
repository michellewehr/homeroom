async function signupFormHandler(event) {
   event.preventDefault();

   const first_name = document.querySelector('#firstName').value.trim();
   const last_name = document.querySelector('#lastName').value.trim();
   const email = document.querySelector('#email').value.trim();
   const password = document.querySelector('#password').value.trim();

   if (first_name && last_name && email && password) {
      const res = await fetch('/api/teachers', {
         method: 'post',
         body: JSON.stringify({
            first_name, last_name, email, password
         }),
         headers: {
            'Content-Type': 'application/json'
         }
      });
      res.ok ? addSubject() : alert(`Request failed -- ${res.status}: Bad request.`);
   } else {
      alert(`All fields must be filled in!`);
   }

}

addSubject = async () => {
   let subjectsArray = ['English', 'Math', 'Science', 'Social Studies'];
   for (subject of subjectsArray) {
      let subject_name = subject;
      const res = await fetch('/api/subjects', {
         method: 'post',
         body: JSON.stringify({ subject_name }),
         headers: {
            'Content-Type': 'application/json'
         }
      });
      res.ok ? document.location.replace('/dashboard') : alert(`Something went wrong when adding subjects -- ${res.status}: ${res.statusText}`);
   }
};

document.querySelector('.signup-container').addEventListener('submit', signupFormHandler);