import React from 'react'
import { NoteContext } from '../contexts/Note.context'

class Note extends React.Component {

    static contextType = NoteContext;

    render() {
        const { removeNote } = this.context
        const { id, title, description } = this.props

        return (
            <div className="card my-2">
                <div className="card-body">
                    <div className="row">
                        <div className="col-1">
                            <button className='btn btn-danger' onClick={() => removeNote(id)}>X</button>
                        </div>
                        <div className="col-11">
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Note
