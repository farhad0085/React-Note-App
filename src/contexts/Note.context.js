import React, { Component, createContext } from 'react'

export const NoteContext = createContext()

export class NoteProvider extends Component {
    state = {
        notes: [],
        addNote: (data) => this.addNote(data),
        removeNote: (id) => this.removeNote(id)
    }

    addNote = (data) => {

        const note = {
            id: data.id,
            title: data.title,
            description: data.description
        }

        const notes = [note, ...this.state.notes]

        // replace old localstorage with new notes
        localStorage.setItem('notes', JSON.stringify(notes))

        this.setState({
            notes
        })
    }


    removeNote = id => {

        // get new notes after removing that note
        const notes = this.state.notes.filter(note => note.id !== id)

        // replace old localstorage with new notes
        localStorage.setItem('notes', JSON.stringify(notes))

        this.setState({
            notes: notes
        })
    }

    componentDidMount() {
        let notes = JSON.parse(localStorage.getItem('notes'))
        notes = notes ? notes : []
        
        this.setState({
            notes
        })
    }

    render() {
        return (
            <NoteContext.Provider value={this.state}>
                {this.props.children}
            </NoteContext.Provider>
        )
    }
}