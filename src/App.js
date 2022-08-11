import React from "react";
import './App.mpdule.css';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Skills} from "./components/skills/Skills";
import {Works} from "./components/my_works/works";
import {RemoteWork} from "./components/remote_work/RemoteWork";
import {Contacts} from "./components/contacts/contacts";
import {Footer} from "./components/footer/footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <RemoteWork/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
