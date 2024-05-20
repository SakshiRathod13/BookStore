// client/src/api.js
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api/notes' });

export const fetchNotes = () => API.get('/');
export const createNote = (newNote) => API.post('/', newNote);
export const updateNote = (id, updatedNote) => API.put(`/${id}`, updatedNote);
export const deleteNote = (id) => API.delete(`/${id}`);
