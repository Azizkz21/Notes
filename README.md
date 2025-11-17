# Notes App

A simple note-taking application built with **React** and **TypeScript**.  
Users can create, edit, filter, and delete notes. Each note supports **Markdown** formatting and can be organized using **tags**. All data is stored in **LocalStorage**, so the notes persist between sessions.

## Features
- Create and edit notes  
- Markdown support for note content  
- Add, edit, and delete tags  
- Filter notes by title and tags  
- View, edit, and delete individual notes  
- Persistent data using LocalStorage  
- Responsive UI with Bootstrap

## Technologies Used
- **React** (with Hooks & Context via React Router Outlet)
- **TypeScript**
- **React Router**
- **React Bootstrap**
- **React Select / Creatable Select**
- **UUID** for unique IDs
- **React Markdown**
- **CSS Modules**
- **LocalStorage** for persistent storage

## Project Structure
- `App.tsx` – main app logic, routes, data handling  
- `NoteForm.tsx` – form for creating and editing notes  
- `NoteList.tsx` – list + filtering UI  
- `NoteLayout.tsx` – layout wrapper for nested note routes  
- `Note.tsx` – single note view  
- `EditNote.tsx` – editing screen  
- `useLocalStorage.ts` – custom hook for LocalStorage  
- `NoteList.module.css` – card styling  

## How to Run
```bash
npm install
npm run dev
