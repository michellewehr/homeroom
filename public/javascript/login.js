async function loginFormHandler(event) {
   event.preventDefault();

   const email = document.querySelector('#email').value.trim();
   const password = document.querySelector('#password').value.trim();

   if (email && password) {
      const response = await fetch('/api/teachers/login', {
         method: 'post',
         body: JSON.stringify({
            email,
            password
         }),
         headers: { 'Content-Type': 'application/json' }
      });

      if (response.ok) {
         document.location.replace('dashboard/');
      } else {
         alert(response.statusText);
      }
   }
}

document.querySelector('.login-container').addEventListener('submit', loginFormHandler);
