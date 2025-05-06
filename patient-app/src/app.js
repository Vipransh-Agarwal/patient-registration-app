// app.js
import { initDb } from './db.js';

function renderTable(rows) {
  const container = document.getElementById('query-result');
  container.innerHTML = '';

  if (!rows.length) {
    container.textContent = 'No results.';
    return;
  }

  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  const headers = Object.keys(rows[0]);
  const headerRow = document.createElement('tr');

  headers.forEach(col => {
    const th = document.createElement('th');
    th.textContent = col;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  rows.forEach(row => {
    const tr = document.createElement('tr');
    headers.forEach(col => {
      const td = document.createElement('td');
      td.textContent = row[col];
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  container.appendChild(table);
}

initDb().then((db) => {
  const form = document.getElementById('registration-form');
  const queryBtn = document.getElementById('execute-query');
  const queryResult = document.getElementById('query-result');
  const sqlQueryInput = document.getElementById('sql-query');

  // Register Patient
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const contact = document.getElementById('contact').value;

    try {
      await db.exec(`
        INSERT INTO patients (name, age, gender, contact) 
        VALUES ('${name}', ${age}, '${gender}', '${contact}');
      `);

      alert('Patient Registered Successfully!');
      form.reset();
    } catch (error) {
      alert('Error: ' + error.message);
    }
  });

  // Query Patients
  queryBtn.addEventListener('click', async () => {
    const query = sqlQueryInput.value.trim();

    if (!query) {
      queryResult.textContent = 'Please enter a query.';
      return;
    }

    try {
      const result = await db.query(query);
      renderTable(result.rows);
    } catch (error) {
      queryResult.innerHTML = `<div class="error">Error: ${error.message}</div>`;
    }
  });
});
