import React, { useContext, useState } from 'react'
import { NoteContext } from '../contexts/Note.context'
import { Link } from 'react-router-dom'

function createUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r && 0x3 | 0x8);
        return v.toString(16);
    });
}


const AddNote = (props) => {

    const context = useContext(NoteContext)
    console.log("Context", context);

    const [notes, setNotes] = useState({
        id: createUUID(),
        title: '',
        description: ''
    })

    const [errors, setErrors] = useState({})



    const handleChange = event => {
        setNotes({
            ...notes,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (notes.title === '') {
            setErrors({
                ...errors,
                title: "Title is missing"
            })
            return
        }

        if (notes.description === '') {
            setErrors({
                ...notes.errors,
                title: '',
                description: "Description is missing"
            })
            return
        }

        context.addNote({
            id: notes.id,
            title: notes.title,
            description: notes.description
        })

        setNotes({
            id: createUUID(),
            title: '',
            description: '',
            errors: {}
        })

        props.history.push('/')

    }

    return (
        <div className="my-4">
            <h3 className="capitalize">Add new note <span className="float-right"><Link to="/" className="btn btn-danger">Cancel</Link></span></h3>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        onChange={handleChange}
                        value={notes.title}
                        type="text"
                        className={errors.title ? "form-control is-invalid" : "form-control"}
                        id="title"
                        name="title" />
                    <div className="invalid-feedback">{errors.title}</div>
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        onChange={handleChange}
                        value={notes.description}
                        className={errors.description ? "form-control is-invalid" : "form-control"}
                        id="description"
                        name="description">
                    </textarea>
                    <div className="invalid-feedback">{errors.description}</div>
                </div>

                <button className="btn btn-secondary capitalize">Add Note</button>
            </form>
        </div>
    )
}

export default AddNote
