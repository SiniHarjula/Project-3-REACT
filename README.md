# Code Snippet Library
This project is a front-end interface for the Snippet API, which was created in Project 2. The goal of this project is to provide an interactive and responsive UI for browsing, adding, filtering, and managing code snippets.

Live deployment:

https://project-3-react-08e7.onrender.com/


## Screenshots
### Main Page
Shows the main view with snippets list and form

<img width="1350" height="939" alt="Näyttökuva 2025-12-11 114108" src="https://github.com/user-attachments/assets/b5c1aa91-1463-4e03-8a73-162f7fcb085d" />


### Favorites Page
Shows the list of favorite snippets

<img width="1086" height="442" alt="Näyttökuva 2025-12-11 114128" src="https://github.com/user-attachments/assets/53c01338-edc0-4e08-84bd-a3beb831cd3f" />



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
Creating this project taught me a lot about React and full-stack development. During the process, I ran into several errors and unexpected behaviours, which helped me improve my debugging skills. I spent time checking the browser console, reading error messages, and trying to understand what exactly was going wrong. When I got completely stuck, I asked AI for help to point me in the right direction. I also watched tutorials on how to solve different things and create parts that I wanted to include for my project. 

This project was challenging at times, because it required managing data flow between multiple components, handling API calls, and keeping track of state updates in React. However, these challenges helped me to learn a lot. Now I understand better how React hooks like useState and useEffect work, how I can build reusable components, how routing works, and how I can integrate a frontend with a REST API.

Overall, completing this project strengthened my understanding of React and improved my confidence in developing full-stack applications.
