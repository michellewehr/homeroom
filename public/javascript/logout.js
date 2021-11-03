async function logout() {
  const res = await fetch('/api/teachers/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });
  res.ok ? document.location.replace('/') : alert(`Logout error -- ${res.status}: ${res.statusText}`);
}

document.querySelector('.logoutBtn').addEventListener('click', logout);