import NotesList from "./components/notesList";
import { useState , useEffect } from 'react'
import { nanoid } from 'nanoid'
import Search from "./components/Search";
import Header from "./components/header";
function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is My First note!!",
      date: "14/04/2022"

    },
    {
      id: nanoid(),
      text: "this is My Second note!!",
      date: "13/04/2022"

    },
    {
      id: nanoid(),
      text: "this is My third note!!",
      date: "17/04/2022"

    },
    {
      id: nanoid(),
      text: "this is My fourth note!!",
      date: "17/04/2022"

    }
  ])
  const [searchText, setSearchText] = useState('')
  const [darkmode, setDarkMode] = useState(false)


  useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

  useEffect(() => {
    if (notes.length !== 0) {
      localStorage.setItem(
        'react-notes-app-data',
        JSON.stringify(notes)
      );

    }
	
	}, [notes]);
  
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes)
  }
  return (

    <div className={`${darkmode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
          handleAddnote={addNote}
          handledeleteNote={deleteNote}
        />

      </div>

    </div>

  );
}

export default App;
