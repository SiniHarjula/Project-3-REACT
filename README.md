# Code Snippet Library
This project is a front-end interface for the Snippet API, which was created in Project 2. The goal of this project is to provide an interactive and responsive UI for browsing, adding, filtering, and managing code snippets.

Live deployment:
https://project-3-react-08e7.onrender.com/

## Features of this Project

### React frontend
- Built with functional React components  
- Uses hooks (`useState` and `useEffect`)  
- A custom `useApi` hook handles the backend API communication

### Pages
- **Main page**: browse all snippets, filter by language, and search by title, tags or language  
- **Favorites page**: view and temporarily manage favorite snippets

### API integration

The app connects to the backend from Project 2 and supports:

- Fetch all snippets – `GET /api/snippets`
- Add new snippet – `POST /api/snippets`
- Delete snippet – `DELETE /api/snippets/:id`

Backend repository:  
[Project 2 Snippet API](https://github.com/SiniHarjula/Project-2-snippet-api)

### Tech used
- React + Vite
- React Router
- Bootstrap
- Custom CSS
- Axios
- react-syntax-highlighter

### Other features
- Syntax highlighting with `react-syntax-highlighter`  
- Copy code to clipboard  
- Live preview of the code while typing in the Add Snippet form  
- Favorites system (frontend state)  
- Responsive layout with Bootstrap and custom CSS

## Installation

1. **Clone this repository**

   ```bash
   git clone https://github.com/SiniHarjula/Project-3-REACT.git
   cd Code-Snippet-Library

2. Install dependencies
   ```bash
   npm install

3. Create a `.env` file and add there:
   ```bash
   VITE_API_URL=replace_this_with_your_backend’s_URL

4. Run
   ```bash
   npm run dev

## Reflection
Creating this project taught me a lot of things. During the process, I encountered a lot of errors and unexpected behaviour, which taught me how to debug React applications more effectively. I spent a lot of time checking the browser console, reading error messages, and trying to understand what exactly was going wrong. When I got completely stuck and couldn't move forward, I asked AI for help to point me in the right direction. I also watched tutorials on how to solve different things and create parts for my project. 

This project was quite challenging for me, and I think that it was because this project required managing data flow between multiple components, handling API calls, and keeping track of state updates in React. However, these challenges helped me to learn a lot. Now I understand better how React hooks like useState and useEffect work, how I can build reusable components, how routing works, and how I can integrate a frontend with a REST API.

Even though this was difficult at times, completing it gave me more confidence to work with React and build full-stack applications. 
