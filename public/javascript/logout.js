async function logout() {
    const response = await fetch('/api/teachers/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
    console.log('before logout.ok++++++++++++++=')

    if (response.ok) {
      console.log('logout.ok++++++++++++++=')
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  
document.querySelector('.logoutBtn').addEventListener('click', logout);