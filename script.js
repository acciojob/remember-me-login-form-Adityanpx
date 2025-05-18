document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const checkbox = document.getElementById('checkbox');
  const existingUserBtn = document.getElementById('existing');

  // Check if credentials exist in localStorage
  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');

  if (savedUsername && savedPassword) {
    existingUserBtn.style.display = 'block';
  }

  // Handle form submission
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    alert(`Logged in as ${username}`);

    if (checkbox.checked) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      existingUserBtn.style.display = 'block';
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
      existingUserBtn.style.display = 'none';
    }
  });

  // Handle "Login as existing user" button
  existingUserBtn.addEventListener('click', () => {
    const savedUsername = localStorage.getItem('username');
    alert(`Logged in as ${savedUsername}`);
  });
});
