async function logout() {
    const response = await fetch('/api/teachers/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert(response.statusText);
    }
  }
  
document.querySelector('.logoutBtn').addEventListener('click', logout);