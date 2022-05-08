import React from 'react'
import { useState } from 'react'

const AddNote = ({ handleAddnote }) => {
    const [noteText, setNoteText] = useState('')
    const handleChange = (event) => {
        if (characterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value)

        }
    }
    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddnote(noteText)
            setNoteText('')
        }
    }
    const characterLimit = 200;
    return (
        <div className='note new'>
            <textarea
                rows="8"
                cols="10"
                value={noteText}
                onChange={handleChange}
                placeholder='type to write a note...'>
            </textarea>
            <div className='note-footer'>
                <small> {characterLimit - noteText.length} remainig</small>
                <button onClick={handleSaveClick} className='save'>Save</button>

            </div>
        </div>
    )
}
export default AddNote;