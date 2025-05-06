// app.js
import { initDb } from './db.js';

initDb().then((db) => {
  const form = document.getElementById('registration-form');
  const queryBtn = document.getElementById('execute-query');
  const queryResult = document.getElementById('query-result');
  const sqlQueryInput = document.getElementById('sql-query');

  // Handle form submission for registering a new patient
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const contact = document.getElementById('contact').value;

    await db.exec(`
      INSERT INTO patients (name, age, gender, contact) 
      VALUES ('${name}', ${age}, '${gender}', '${contact}');
    `);

    alert('Patient Registered Successfully!');
    form.reset();
  });

  // Query execution when clicking the "Execute" button
  queryBtn.addEventListener('click', async () => {
    const query = sqlQueryInput.value.trim();

    if (query) {
      try {
        const result = await db.query(query);
        queryResult.textContent = JSON.stringify(result, null, 2);
      } catch (error) {
        queryResult.textContent = `Error: ${error.message}`;
      }
    } else {
      queryResult.textContent = 'Please enter a query.';
    }
  });
});
