# To-Do List Manager

A modern, responsive React-based web application for managing to-do lists with categories and local storage persistence.

## Features

- 📝 Add, edit, and delete tasks
- 📂 Categorize tasks (Personal, Work, Shopping, Other)
- ✅ Mark tasks as complete/incomplete
- 🔍 Filter tasks by category
- 💾 Automatic local storage persistence
- 📱 Responsive design for all screen sizes
- 🎨 Modern Material-UI based interface
- 🔔 User feedback notifications

## Technical Stack

- React.js
- Material-UI (MUI)
- Vite
- Local Storage API

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd to-do-list
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── TodoForm.jsx      # Form for adding new todos
│   ├── TodoList.jsx      # List of todos
│   ├── TodoItem.jsx      # Individual todo item
│   └── CategoryTabs.jsx  # Category filter tabs
├── App.jsx               # Main application component
└── main.jsx              # Application entry point
```

## Features in Detail

### Task Management

- Add new tasks with title and category
- Edit existing tasks
- Delete tasks
- Mark tasks as complete/incomplete
- View task completion status

### Categories

- Predefined categories: Personal, Work, Shopping, Other
- Filter tasks by category
- All tasks view

### Data Persistence

- Automatic saving to local storage
- Data persists across browser sessions
- Error handling for storage operations

### User Experience

- Responsive design for all screen sizes
- Intuitive interface
- Visual feedback for actions
- Error handling and validation
- Tooltips for better usability

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Acknowledgments

- Material-UI for the component library
- React team for the amazing framework
- Vite for the fast build tool
