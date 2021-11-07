async function loginFormHandler(event) {
   event.preventDefault();

   const email = document.querySelector('#email').value.trim();
   let password = document.querySelector('#password').value.trim();

   if (email && password) {
      let res = await fetch('/api/teachers/login', {
         method: 'post',
         body: JSON.stringify({
            email,
            password
         }),
         headers: { 'Content-Type': 'application/json' }
      });
      res.ok ? document.location.replace('/dashboard') : document.location.replace('/login=failed');
   }
}

document.querySelector('.login-container').addEventListener('submit', loginFormHandler);
