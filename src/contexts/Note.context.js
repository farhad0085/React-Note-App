import React, { useState, createContext, useEffect } from 'react'

export const NoteContext = createContext()

export const NoteProvider = (props) => {

    const [state, setState] = useState({
        notes: [],
        addNote: (data) => addNote(data),
        removeNote: (id) => removeNote(id)
    })

    const addNote = data => {

        const note = {
            id: data.id,
            title: data.title,
            description: data.description
        }

        const notes = [note, ...state.notes]

        // replace old localstorage with new notes
        localStorage.setItem('notes', JSON.stringify(notes))

        setState({
            ...state,
            notes
        })
    }


    const removeNote = id => {

        // get new notes after removing that note
        const notes = state.notes.filter(note => note.id !== id)

        // replace old localstorage with new notes
        localStorage.setItem('notes', JSON.stringify(notes))

        setState({
            ...state,
            notes
        })
    }

    useEffect(() => {
        let notes = JSON.parse(localStorage.getItem('notes'))
        notes = notes ? notes : []
        setState({
            ...state,
            notes
        })
    }, [])


    return (
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    )

}