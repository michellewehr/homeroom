async function signupFormHandler(event) {
    event.preventDefault();
 
    // const signupObj = {
    //    firstName: document.querySelector('#firstName').value.trim(),
    //    lastName: document.querySelector('#lastName').value.trim(),
    //    email: document.querySelector('#email').value.trim(),
    //    password: document.querySelector('#password').value.trim(),
    // };
 
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
          document.location.replace('dashboard')
       } else {
          alert(res.statusText);
       }
    }
 }
 
 document.querySelector('.signup-container').addEventListener('submit', signupFormHandler);
 