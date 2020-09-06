import React, {useState, useEffect} from 'react';
import './index.css';
import Note from "./components/Note";
import noteService from "./services/notes";
import Notification from "./components/Notification";

const  App = () => {

    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState("a new note...")
    const [showAll, setShowAll] = useState(true)
    const [errorMessage, setErrorMessage] = useState('some error happened...')

    useEffect(() => {
        noteService
            .getAll()
            .then(response => {
                setNotes(response)
            })
    }, [])

    const addNote = (event) => {
      event.preventDefault();
      const noteObject = {
          content: newNote,
          date: new Date().toISOString(),
          important: Math.random() < 0.5,
      }

      noteService.create(noteObject)
          .then(response => {
              setNotes(notes.concat(response))
              setNewNote("")
          })
    }

    const handleNoteChange = (event) => {
      setNewNote(event.target.value)
    }

    const toggleImportance = (id) => {
        const note = notes.find(n => n.id === id)
        const changedNote = {...note, important: !note.important}

        noteService.update(id, changedNote).then(response => {
            setNotes(notes.map(note => note.id !== id ? note : response))
        }).catch(error => {
            setErrorMessage(`the note ${note.content} was already deleted`)
            setTimeout(() => {
                setErrorMessage(null)
            })
            setNotes(notes.filter(n => n.id !== id))
        })
    }

    const notesToShow = showAll ? notes : notes.filter(note => note.important)

  return (
      <div>
        <h1>Notes</h1>
          <Notification message={errorMessage} />
          <div onClick={() => setShowAll(!showAll)}>
              show {showAll ? "important" : "all"}
          </div>
        <ul>
          {notesToShow.map((note, i) =>
            <Note
                key={i}
                note={note}
                toggleImportance={() => toggleImportance(note.id)}
            />)}
        </ul>
        <form onSubmit={addNote}>
          <input
              value={newNote}
              onChange={handleNoteChange}
          />
          <button type="submit">save</button>
        </form>
      </div>
  );

}

export default App;
