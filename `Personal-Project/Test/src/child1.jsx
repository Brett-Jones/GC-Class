// Filename - Child1.js

import React, { Component } from "react";

class Child1 extends Component {
    constructor() {
        super();
        this.state = {
            name: "React"
        };
    }

    render() {
        return <div>This is how GFG child component number 1 looks like.</div>;
    }
}

export default Child1;