import React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import Notes from './components/notes'
import About from './components/about'
import NotFound from './components/notfound'
import AddNote from './forms/AddNote'
import { Route, Switch } from 'react-router-dom';
import { NoteProvider } from './contexts/Note.context'


const App = () => {

    return (
        <>
            <Header />
            <div className="container">
                <NoteProvider>
                    <Switch>
                        <Route exact path='/' component={Notes} />
                        <Route path='/add' component={AddNote} />
                        <Route path='/about' component={About} />
                        <Route component={NotFound} />
                    </Switch>
                </NoteProvider>

                <Footer />
            </div>
        </>
    );
}

export default App;
