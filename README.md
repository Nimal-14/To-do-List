# Todo List

A responsive Todo List application built with HTML, CSS, and vanilla JavaScript. The app uses browser local storage, so tasks remain available after the page is refreshed or reopened.

## Live Demo

[Open the Vintage Todo List](https://github.com/Nimal-14/To-do-List)

## Features

- Add tasks by clicking the Add Task button
- Add tasks by pressing the Enter key
- Validate and reject empty tasks
- Mark tasks as completed
- Undo completed tasks
- Delete individual tasks
- Filter tasks by All, Active, and Completed
- Display the number of unfinished tasks
- Clear all completed tasks
- Preserve tasks and completion status with local storage
- Adapt the layout for desktop and mobile screens
- Display a vintage parchment-and-sage interface

## Technologies Used

- HTML5 for page structure
- CSS3 for layout, styling, and responsive design
- JavaScript for application behaviour and DOM manipulation
- Browser Local Storage for task persistence
- Git and GitHub for version control
- GitHub Pages for deployment

## Concepts Practised

- Selecting and updating DOM elements
- Handling click and keyboard events
- Creating HTML elements with JavaScript
- Working with arrays and objects
- Using `find()`, `filter()`, `forEach()`, and `some()`
- Adding and removing CSS classes
- Converting data with `JSON.stringify()` and `JSON.parse()`
- Saving and loading data with `localStorage`
- Building responsive interfaces with Flexbox and media queries
- Tracking development with Git commits

## Project Structure

```text
todo-list/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Getting Started

## How It Works

Each task is stored as a JavaScript object:

```javascript
{
    id: Date.now(),
    text: "Learn JavaScript",
    completed: false
}
```

The application follows this flow:

```text
User action → Update tasks array → Save to local storage → Render the task list
```

Filtering changes only the tasks displayed on the screen. It does not delete tasks from storage.

## Local Storage

Tasks are stored in the current browser and remain available after a refresh. They are not synchronized between different browsers or devices. Clearing browser site data will remove the saved tasks.

## Deployment

The project can be deployed with GitHub Pages:

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Choose **Deploy from a branch**.
4. Select the `main` branch and `/(root)` folder.
5. Save the configuration.

The deployed site should be available at:

```text
https://github.com/Nimal-14/To-do-List
```

## Future Improvements

- Edit existing tasks
- Add due dates and priorities
- Search tasks by text
- Reorder tasks with drag and drop
- Add light and dark themes
- Display task creation dates
- Synchronize tasks with a backend database

## Author

Created by **Anto Nimal.** as a project for learning HTML, CSS, JavaScript, local storage, Git, and GitHub.

