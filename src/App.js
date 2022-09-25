import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import { Link } from "react-router-dom";


import Main from './Main'

const user = {
    name: 'Vivan',
    numCredits: 3.51,
    lifetimeCredits: 74.63,
    plasticRecycled: 55.2,
    emissionsReduced: 23.2
};

const db = {
    plasticRecycled: 122_997,
    emissionsReduced: 19_801
};

const App = () => {
    const [userHandle, setUserHandle] = useState(user);
    const [globalStatsHandle, setGlobalStatsHandle] = useState(db);

    return (
        <div className="App">
            <header className="App-header">
                <Navbar />
            </header>
            <Main userHandle={userHandle} globalStatsHandle={globalStatsHandle} />
        </div>
    );
}

const Navbar = () => {
    return (
        <>
            <Link to="/">
                <button className="nav-btn" id="btn-game">
                    <i className="fa-solid fa-gamepad"></i>
                </button>
            </Link>
            <Link to="/picture">
                <button className="nav-btn" id="btn-picture">
                    <i className="fa-solid fa-bottle-water"></i>
                </button>
            </Link>
        </>
    );
}


export default App;
