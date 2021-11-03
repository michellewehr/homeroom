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
      res.ok ? addSubject() : alert(`Request failed -- ${res.status}: ${res.statusText}.`);
   } else {
      alert(`All fields must be filled in!`);
   }

}

// addSubject = async () => {

//    const subjectsArray = ['English', 'Math', 'Science', 'Social Studies'];

//    await Promise.all(
//       subjectsArray.map(async subject_name => {
//          const res = await fetch('/api/subjects', {
//             method: 'post',
//             body: JSON.stringify({ subject_name }),
//             headers: {
//                'Content-Type': 'application/json'
//             }
//          });
//          const subjectRes = await res.json();
//          console.log(subjectRes);
//          res.ok ? document.location.replace('/dashboard') : alert(`Something went wrong when adding subjects -- ${res.status}: ${res.statusText}`);
//       })
//    )
// };

addSubject = async () => {
   let subject_value = 0;
   let subjectsArray = ['English', 'Math', 'Science', 'Social Studies'];
   for (i = 0; i < subjectsArray.length; i++) {
      subject_value++;
      let subject_name = subjectsArray[i];
      const res = await fetch('/api/subjects', {
         method: 'post',
         body: JSON.stringify({ subject_name, subject_value }),
         headers: {
            'Content-Type': 'application/json'
         }
      });
      res.ok ? document.location.replace('/dashboard') : alert(`Something went wrong when adding subjects -- ${res.status}: ${res.statusText}`);
   }
};

document.querySelector('.signup-container').addEventListener('submit', signupFormHandler);