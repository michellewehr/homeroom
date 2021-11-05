async function loginFormHandler(event) {
   event.preventDefault();

   const email = document.querySelector('#email').value.trim();
   const password = document.querySelector('#password').value.trim();

   if (email && password) {
      const res = await fetch('/api/teachers/login', {
         method: 'post',
         body: JSON.stringify({
            email,
            password
         }),
         headers: { 'Content-Type': 'application/json' }
      });
      res.ok ? document.location.replace('/dashboard') : alert(`Login failed -- ${res.status}: Incorrect login information. Try again.`);
   }
}

document.querySelector('.login-container').addEventListener('submit', loginFormHandler);
