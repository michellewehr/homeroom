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
      if (res.ok) {
         addSubject();
         document.location.replace('/dashboard');
      } else {
         alert(res.statusText);
      }
   }
}

addSubject = async () => {
   // const subjectsArray = ['English', 'Math', 'Science', 'Social Studies'];

   const subject_name = 'English';
   const res = await fetch('/api/subjects', {
      method: 'post',
      body: JSON.stringify({ subject_name }),
      headers: {
         'Content-Type': 'application/json'
      }
   });
   if (res.ok) {
      console.log('it worked');
   } else {
      alert(res.statusText);
   }

   // let subjectsArray = ['English', 'Math', 'Science', 'Social Studies'];
   // for (i = 0; i < subjectsArray.length; i++) {
   //    let subject_name = subjectsArray[i];
   //    const res = await fetch('/api/subjects', {
   //       method: 'post',
   //       body: JSON.stringify({ subject_name }),
   //       headers: {
   //          'Content-Type': 'application/json'
   //       }
   //    });
   //    if (res.ok) {
   //       console.log('it worked');
   //    } else {
   //       alert(res.statusText);
   //    }
   // }
};


document.querySelector('.signup-container').addEventListener('submit', signupFormHandler);
