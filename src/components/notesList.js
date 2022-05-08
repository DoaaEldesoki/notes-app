import React from 'react'
import Note from './note'
import AddNote from './AddNote'
const NotesList = ({ notes, handleAddnote, handledeleteNote }) => {
    return (
        <div className='notes-list'>
            {notes.map((note) => 
            <Note
                id={note.id}
                text={note.text}
                date={note.date} 
                handledeleteNote={handledeleteNote}
                />)}
                <AddNote handleAddnote={handleAddnote}
                />
        </div>
    )
}
export default NotesList; 