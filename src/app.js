import db from './db.js';

document.getElementById('registration-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const age = parseInt(document.getElementById('age').value, 10);
  const gender = document.getElementById('gender').value;
  const contact = document.getElementById('contact').value;

  await db.run('INSERT INTO patients (name, age, gender, contact) VALUES (?, ?, ?, ?)', [name, age, gender, contact]);

  alert('Patient registered successfully!');
  e.target.reset();
});
