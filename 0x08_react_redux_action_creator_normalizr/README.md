<h1 align="center">React Redux Action Creator & Normalizr</h1>

<p align="center">
  <img src="../img/react_logo.gif" width="600px">
</p>

By: Johann Kerbrat, Engineering Manager at Uber Works

Welcome to the React Redux Action Creator & Normalizr project! In this project, you will learn about Normalizr's purpose and how to use it, schemas and normalization of nested JSON, core concepts of Redux, Redux actions, Redux action creators, async actions in Redux, and how to write tests for Redux.

## Learning Objectives

By the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- Normalizr’s purpose and how to use it
- Schemas and normalization of nested JSON
- Core concepts of Redux
- Redux actions
- Redux action creators
- Async actions in Redux
- How to write tests for Redux

## Requirements

- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- All your files will be interpreted/compiled on Ubuntu 18.04 LTS using node 12.x.x and npm 6.x.x
- A README.md file, at the root of the folder of the project, is mandatory
- Push all of your files, including package.json and .babelrc
- All of your functions must be exported

## Tasks

### Task 0: Read data from a JSON

Reuse the latest dashboard project you worked on in the React course 0x06-React_state.

Create a new notifications.js file in a schema folder:

- Import the JSON data from notifications.json.
- Create a function named getAllNotificationsByUser that accepts userId as an argument.
- The function should return a list containing all the context objects from the notifications.json data when the author id is the same as the userId.
- Add tests for the function.


### Task 1: Normalize a nested JSON

Copy over the dashboard from the previous task into a task_1 directory at the root of the project.

Modify src/schema/notifications.js to set up a schema using Normalizr.

Add tests to verify the normalized data structure.


### Task 2: Filter a normalized Schema

Copy the contents of the dashboard from the task_1 directory into a task_2 directory at the root of the project.

Modify the function getAllNotificationsByUser to use the normalized dataset.


### Task 3: Create actions for the course list

Copy the dashboard folder from the task_2 directory into a directory named task_3.

Create action types and action creators for course selection.


### Task 4: Create actions for the UI

Copy the dashboard folder from task_3 into a directory labeled task_4.

Create action types and action creators for UI interactions like login, logout, and notification drawer.


### Task 5: Create actions for the notification list

Copy the dashboard from the task_4 directory into task_5.

Create action types and action creators for notification list actions like marking as read and setting filters.


### Task 6: Bound the actions

Modify the Course, Notification, and UI actions creators to bind them.


### Task 7: Async Action Creators

Set up Redux and Redux Thunk. Create async action creators for login.


---

*Note: Each task directory contains detailed instructions and requirements for completing the task.*

*Disclaimer: This project content is for educational purposes and is subject to change.*

---

- **Caramon Hofstetter** - [CaramonH](https://github.com/CaramonH) 
- **LinkedIn** - [Caramon Hofstetter](https://www.linkedin.com/in/caramonhofstetter/) <img src="../img/linkedin-original.svg" alt="LinkedIn" width="20" height="20">
