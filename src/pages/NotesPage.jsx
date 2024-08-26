import React, { useContext } from 'react'
import NoteCard from '../components/NoteCard'
import { NoteContext } from '../context/NoteContext'
import Controls from '../components/Controls'

export default function NotesPage() {

    const {notes} = useContext(NoteContext)

    return (
        <div>
            {notes.map((note) => (
                <NoteCard key={note.$id} note={note}/>
            ))}

            <Controls />
        </div>
    )
}
