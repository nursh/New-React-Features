import React, { useContext } from 'react';
import Note from './Note';
import NotesContext from '../context/notesContext';


export default () => {
  const { notes } = useContext(NotesContext);
  
  return (
    notes.map(note => (
      <Note key={note.title} note={note} />
    ))
  )
}