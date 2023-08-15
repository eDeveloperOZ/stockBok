# Stock Trading Bot 

Welcome to the Stock Trading Bot! This project is a stock trading bot that would analyze graphs and trade based on the conclusions it draws. This project is still in development and is not yet ready for use.

- [Project overview](#project-overview)
- [Folder structure](#folder-structure)
- [Development guide](#development-guide)
- [Frontend](#frontend)
- [Backend](#backend)

## Project overview

Here we would decide on the project overview, how it would work, what it would do, etc.

## Folder Structure

The repository is organized into different directories, each serving a specific purpose within the project. Here's a breakdown of the major directories and their contents:

- **frontend**: This directory contains the React frontend application.

  - **public**: Holds static assets and the main HTML file for the application.
  - **src**: Contains the main source code for the React components and application logic.
    - **components**: Reusable UI components used throughout the application.
    - **pages**: Individual pages or views of the application.
    - **services**: API service functions for communicating with the backend.
    - **utils**: Utility functions used across the frontend codebase.
    - **App.js**: The main entry point of the React application.
    - **index.js**: The entry point for rendering the React app.

- **server**: This directory contains the Node.js backend application.

  - **app.js**: The main entry point for the backend application.
  - **routes**: API route definitions.
  - **controllers/**: Logic for handling different aspects of the application.
  - **models**: Data models (if applicable) for database interactions.
  - **config**: Configuration files for the backend.
  - **middlewares**: Middleware functions like authentication and error handling.

- **scripts**: This directory contains utility scripts and automation tasks related to the project.

- **readme.md**: The main README file providing an overview of the project and instructions.

This is the base structure of the project. It may change as the project evolves.

## Development guide

### Setting up the development environment
1. **Clone the repository**
``` bash 
git clone git@github.com:eDeveloperOZ/stockBok.git && 
cd stockBok
```
2. **Install dependencies**
``` bash
cd frontend && npm install && cd ../server && npm install && cd ..
```

### We use a task tracking file, tasks.md to manage and keep track on the features and bugs we are working on.
1. **Adding a new task**
Add a new task to the tasks.md file in the following format:
``` markdown
| #Number | Type | Description | Status | Assigned to |
```
 - **#Number**: The number of the task. It should be the next number in the sequence.
- **Type**: The type of the task. It can be one of the following: Feature, Bug, Improvment.
    - **Feature**: A new feature to be added to the application.
    - **Bug**: A bug in the application that needs to be fixed.
    - **Improvement**: An improvement to an existing feature.
- **Description**: A description of the task.
    - **Feature**: A description of the feature.
    - **Bug**: A description of the bug and HOW TO REPRODUCE IT.
    - **Improvement**: A description of the improvement and the feature it is related to.
- **Status**: The status of the task. It can be one of the following: Open, In progress, Done.
- **Assigned to**: The person git username assigned to the task. you should only assign yourself to a task.

### Branching strategy
We follow a branching strategy to keep the codebase clean and organized. The strategy is as follows: feat for feature, fix for bug fixes and imp for improvements. The branch name should be in the format: `<type>/<name>`. For example, `feat/login-page` or `fix/bug-in-login`.
Commits should be in a format and  explain what the commit does. For example, `feat: add login page` or `fix: fix bug in login page`.
**Use descriptive names for branches.**
1. **Create a new branch**
``` bash
git checkout main && 
git pull origin main && ## pull the latest changes from main
git checkout -b <branch-name>
```
2. **Make changes and commit them**
```bash 
git add . ## add all changes
git commit -m "<commit-message>"
```
3. **Push changes to remote**
```bash
git push origin <branch-name>
```
4. **Create a pull request**
Go to the repository on GitHub and create a pull request. 
5. **Reabse to main**
```bash 
git checkout main
git pull origin main
```

## Frontend

This is a section providing information about the frontend of the application.

## Backend

This is a section providing information about the backend of the application.
