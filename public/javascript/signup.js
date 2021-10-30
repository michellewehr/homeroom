async function signupFormHandler(event) {
   event.preventDefault();
   console.log('log 1+++++++++++++++++')

   const first_name = document.querySelector('#firstName').value.trim();
   const last_name = document.querySelector('#lastName').value.trim();
   const email = document.querySelector('#email').value.trim();
   const password = document.querySelector('#password').value.trim();

   console.log(first_name, last_name, email, password)

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
      console.log('signing up++++++++++++++++++')
      if (res.ok) {
         console.log('res.ok signing up++++++++++++++++++')
         document.location.replace('dashboard');
      } else {
         alert(res.statusText);
      }
   }
}

document.querySelector('.signup-container').addEventListener('submit', signupFormHandler);
