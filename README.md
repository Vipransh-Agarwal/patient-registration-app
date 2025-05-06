
# 🏥 Patient Registration App

A lightweight web application designed to register patient details and execute SQL queries on the stored records. Built with **Vite**, **JavaScript**, and **PgLite**, it offers a seamless interface for data entry and retrieval.

---

## 🌐 Live Demo

Access the application online: **[http://assignment-patient-app.netlify.app/](http://assignment-patient-app.netlify.app/)**  
*(Replace with your actual Netlify URL)*

### Example Usage

1. Register a patient using the form.
2. Run SQL queries in the textarea below the form.

#### Example Queries

- `SELECT * FROM patients;`
- `SELECT name, age FROM patients WHERE age > 30;`

> **Note**: The database table is named `patients`.

---

## 💻 Local Setup

Follow these steps to run the app on your local machine.

### Prerequisites

- Node.js and npm installed

### Installation

```bash
git clone https://github.com/yourusername/patient-registration-app.git
cd patient-registration-app/patient-app
npm install
```

### Run the Application

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Build for Production

```bash
npm run build
```

The build will be generated in the `dist/` folder.

---

## 📂 Project Structure

```
PATIENT-REGISTRATION-APP/
├── patient-app/
│   ├── public/
│   ├── src/
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
