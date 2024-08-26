import React, { useContext } from 'react'
import Trash from '../icons/Trash'
import { db } from '../appwrite/databases'
import { NoteContext } from '../context/NoteContext'

function DeleteButton({noteID}) {

    const {setNotes} = useContext(NoteContext)

    const handleDelete = async() => {
        db.notes.delete(noteID)

        setNotes((prevState) => prevState.filter((note) => note.$id !== noteID))
    }

    return(
        <div onClick={handleDelete}>
            <Trash />
        </div>
    )
}

export default DeleteButton
