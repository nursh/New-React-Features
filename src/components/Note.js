import React, { useContext } from 'react';
import NotesContext from '../context/notesContext';
import useMousePosition from '../hooks/useMousePosition';

export default ({ note }) => {

  // return a function to simulate componentDidUnmount
  // useEffect(() => {
  //   return () => {
  //     console.log('Unmounted note')
  //   }
  // }, [])

  const { dispatch } = useContext(NotesContext);
  const position = useMousePosition();

  const removeNote = (title) => {
    dispatch({ type: 'REMOVE_NOTE', title});
  }

  return (
    <div key={note.title}>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <p>x: {position.x} - y: {position.y}</p>
      <button onClick={() => removeNote(note.title)}>x</button>
    </div>
  );

}
