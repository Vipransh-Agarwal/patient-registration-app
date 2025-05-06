import db from './db.js';

document.addEventListener('DOMContentLoaded', () => {
  // Handle form submission to add a new patient
  document.getElementById('registration-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const age = parseInt(document.getElementById('age').value, 10);
    const gender = document.getElementById('gender').value.trim();
    const contact = document.getElementById('contact').value.trim();

    if (!name || isNaN(age) || !gender || !contact) {
      alert("Please fill all fields correctly.");
      return;
    }

    try {
      await db.run(
        'INSERT INTO patients (name, age, gender, contact) VALUES (?, ?, ?, ?)',
        [name, age, gender, contact]
      );
      alert('Patient registered successfully!');
      e.target.reset();
    } catch (err) {
      console.error('Error inserting patient:', err);
      alert('Error registering patient.');
    }
  });

  // Handle SQL query execution
  document.getElementById('execute-query').addEventListener('click', async () => {
    const query = document.getElementById('sql-query').value.trim();
    const resultContainer = document.getElementById('query-result');

    if (!query) {
      resultContainer.textContent = 'Please enter a SQL query.';
      return;
    }

    try {
      const result = await db.query(query);
      resultContainer.textContent = JSON.stringify(result.rows, null, 2);
    } catch (error) {
      resultContainer.textContent = `Error: ${error.message}`;
    }
  });
});
