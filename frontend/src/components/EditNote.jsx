import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchNotes, updateNote } from '../api';

const EditNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getNote = async () => {
      try {
        const { data } = await fetchNotes();
        const note = data.find(n => n._id === id);
        if (note) {
          setTitle(note.title);
          setContent(note.content);
        }
      } catch (error) {
        console.error('Failed to fetch note:', error);
      }
    };

    getNote();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateNote(id, { title, content });
      navigate('/');
    } catch (error) {
      console.error('Failed to update note:', error);
    }
  };

  return (
    <div>
      <h1>Edit Note</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditNote;
