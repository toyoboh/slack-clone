import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

function App() {
    return (
        <div className="app">
            <Router>
                <Header />
                <div className="app__body">
                    <Sidebar />

                    <Switch>
                        <Route path="/room/:roomId">
                            <Chat />
                        </Route>
                        <Route path="/">
                            <h1>Welcom</h1>
                        </Route>
                    </Switch>
                        {/* React-Router -> Chat screen */}
                </div>
            </Router>

        </div>
    );
}

export default App;
