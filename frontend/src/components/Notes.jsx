// client/src/components/Notes.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchNotes, deleteNote } from '../api';

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      const { data } = await fetchNotes();
      setNotes(data);
    };

    getNotes();
  }, []);

  const handleDelete = async (id) => {
    await deleteNote(id);
    setNotes(notes.filter(note => note._id !== id));
  };

  return (
    <div>
      <h1>Notes</h1>
      <Link to="/create">Create Note</Link>
      {notes.map(note => (
        <div key={note._id}>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          <Link to={`/edit/${note._id}`}>Edit</Link>
          <button onClick={() => handleDelete(note._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Notes;
