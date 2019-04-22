import React, { useState, useContext } from 'react';
import NotesContext from '../context/notesContext';

export default () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { dispatch } = useContext(NotesContext);

  const addNote = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_NOTE', title, body });
    setTitle('');
    setBody('');
  }

  return (
    <>
      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} /> <br/>
        <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        <button type="submit">Create Note</button>
      </form>
    </>
  );
}