validatePassword = password => {
   const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
   return regex.test(password);
};

async function signupFormHandler(event) {
   event.preventDefault();

   const first_name = document.querySelector('#firstName').value.trim();
   const last_name = document.querySelector('#lastName').value.trim();
   const email = document.querySelector('#email').value.trim();
   const password = document.querySelector('#password').value.trim();

   if (first_name && last_name && email && password) {
      if (validatePassword(password)) {
         const res = await fetch('/api/teachers', {
            method: 'post',
            body: JSON.stringify({
               first_name, last_name, email, password
            }),
            headers: {
               'Content-Type': 'application/json'
            }
         });
         res.ok ? postSubjects() : alert(`Failed to create user -- ${res.status}: ${res.statusText}.`);
      } else {
         document.location.replace('/signup=failed');
         return;
      }
   } else {
      alert(`All fields must be filled in!`);
   }

}

// interval funcion
const delay = (ms = 300) => new Promise(res => setTimeout(res, ms));

// set subject variables
let subject_value = 0;
let subjectsArray = ['English', 'Math', 'Science', 'Social Studies'];
let subjectsPosted = [];

const postSubjects = async () => {
   subject_value++;
   for (let i = 0; i < subjectsArray.length; i++) {
      let subject_name = subjectsArray[i];
      // Delay next fetch to make sure previous fetch has succeeded
      await delay();
      await fetch('/api/subjects', {
         method: 'post',
         body: JSON.stringify({ subject_name, subject_value }),
         headers: {
            'Content-Type': 'application/json'
         }
      })
      // Push an element to the subjectsPosted array to represent each successful push
      subjectsPosted.push('Push successful');
   };
   // if the amount of subjects posted is not 4, throw an error, otherwise re-route user to dash
   subjectsPosted.length === 4 ? document.location.replace('/dashboard') : alert(`Something went wrong when adding subjects.`);
};

// addSubject = async () => {
//    let subject_value = 0;
//    let subjectsArray = ['English', 'Math', 'Science', 'Social Studies'];

//    for (i = 0; i < subjectsArray.length; i++) {
//       subject_value++;
//       let subject_name = subjectsArray[i];
//       let res = await fetch('/api/subjects', {
//          method: 'post',
//          body: JSON.stringify({ subject_name, subject_value }),
//          headers: {
//             'Content-Type': 'application/json'
//          }
//       });
//       res.ok ? document.location.replace('/dashboard') : alert(`Something went wrong when adding subjects -- ${res.status}: ${res.statusText}`);
//    }
// };

document.querySelector('.signup-container').addEventListener('submit', signupFormHandler);