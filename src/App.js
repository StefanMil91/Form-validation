import React, { Component } from 'react'

import Form from "./components/Form/Form";

export class App extends Component {

    state = {

    }

    render() {

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <Form />
                </div>
            </div>
        )
    }
}

export default App;
