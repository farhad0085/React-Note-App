import React from 'react'
import { uuid } from 'uuidv4';
import { NoteContext } from '../contexts/Note.context'
import { Link } from 'react-router-dom'

class AddNote extends React.Component {

    static contextType = NoteContext

    state = {
        id: uuid(),
        title: '',
        description: '',
        errors: {}
    }



    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        if (this.state.title === '') {
            this.setState({
                errors: {
                    ...this.state.errors,
                    title: "Title is missing"
                }
            })
            return
        }

        if (this.state.description === '') {
            this.setState({
                errors: {
                    ...this.state.errors,
                    title: '',
                    description: "Description is missing"
                }
            })
            return
        }
        this.context.addNote({
            id: this.state.id,
            title: this.state.title,
            description: this.state.description
        })

        this.setState({
            id: uuid(),
            title: '',
            description: '',
            errors: {}
        })

        this.props.history.push('/')

    }

    render() {

        return (
            <div className="my-4">
                <h3 className="capitalize">Add new note <span className="float-right"><Link to="/" className="btn btn-danger">Cancel</Link></span></h3>
                <hr />
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            onChange={this.handleChange}
                            value={this.state.title}
                            type="text"
                            className={this.state.errors.title ? "form-control is-invalid" : "form-control"}
                            id="title"
                            name="title" />
                        <div className="invalid-feedback">{this.state.errors.title}</div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            onChange={this.handleChange}
                            value={this.state.description}
                            className={this.state.errors.description ? "form-control is-invalid" : "form-control"}
                            id="description"
                            name="description">
                        </textarea>
                        <div className="invalid-feedback">{this.state.errors.description}</div>
                    </div>

                    <button className="btn btn-secondary capitalize">Add Note</button>
                </form>
            </div>
        )
    }
}

export default AddNote
