import React from 'react'
import Note from './note'
import { NoteContext } from '../contexts/Note.context'
import { Link } from 'react-router-dom'

class Notes extends React.Component {

    static contextType = NoteContext;

    render() {

        const { notes } = this.context;

        return (
            <div className="my-4">
                <h3 className="capitalize">All notes ({notes.length}) <span className="float-right"><Link to="/add" className="btn btn-secondary">Add</Link></span></h3>
                <hr />
                {!notes.length ? <h4 className="text-center capitalize">No notes found</h4> : null}
                {notes.map(note => {
                    return (
                        <Note
                            id={note.id}
                            title={note.title}
                            key={note.id}
                            description={note.description}
                        />
                    )
                })}
            </div>
        )
    }
}

export default Notes