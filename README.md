![Admin Dashboard Logo](https://clipground.com/images/dashboard-logo.jpg)

# Admin Dashboard

Welcome to the **Admin Dashboard** project! This application is built with React and Vite, designed to provide a seamless and interactive user experience for managing administrative tasks. Explore customizable themes, interactive charts, tables, calendars, and a Kanban board, all designed with a beautiful and modern UI using Tailwind CSS.

## Live Demo

Check out the live demo of the application [here](https://admin-dashboard-i.netlify.app/).

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- **Customizable Themes:** Switch between different themes to suit your preference.
- **Interactive Charts:** Visualize data with interactive charts powered by Chart.js.
- **User Management:** Add, edit, and manage user information seamlessly.
- **Responsive Design:** Fully responsive design ensuring usability across devices.
- **Calendar:** Manage and schedule your tasks with an integrated calendar.
- **Kanban Board:** Organize your workflow with a drag-and-drop Kanban board.

## Installation

To get started with the project, clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/admin-dashboard.git
cd admin-dashboard
npm install
```

## Usage

To run the project locally, use the following command:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Chart.js & react-chartjs-2**: For creating interactive charts.
- **React Router**: For routing and navigation.
- **Heroicons**: Beautiful hand-crafted SVG icons.

## Project Structure

```
/src
  /components
    AddUserForm.jsx
    Navbar.jsx
  /constraints
    index.js
  /pages
    Calendar.jsx
    Charts.jsx
    Dashboard.jsx
    Kanban.jsx
    Users.jsx
  App.jsx
  index.css
  main.jsx
```

- `components`: Contains reusable UI components such as the Navbar and AddUserForm.
- `constraints`: Contains data-related logic and constraints.
- `pages`: Contains the main pages of the application (Dashboard, Users, Charts, Calendar, Kanban).
- `App.jsx`: Main application component.
- `index.css`: Global CSS styles.
- `main.jsx`: Entry point of the application.

## Contributing

We welcome contributions to improve this project. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

