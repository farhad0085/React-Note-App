import React, { useContext } from 'react'
import { NoteContext } from '../contexts/Note.context'

const Note = (props) => {

    const context = useContext(NoteContext)

    const { removeNote } = context
    const { id, title, description } = props

    return (
        <div className="card my-2">
            <div className="card-body">
                <div className="row">
                    <div className="col-1 col-lg-1 col-md-1 col-sm-1">
                        <button className='btn btn-sm btn-danger' onClick={() => removeNote(id)}>X</button>
                    </div>
                    <div className="col-11  col-lg-11 col-md-11 col-sm-1">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Note
