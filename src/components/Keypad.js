// Code Keypad Component Here
import React from 'react'

export default class Keyboad extends React.Component {

    enterPass = () => {
        console.log('Entering password...')
    }

    render() {
        return (
            <input type="password" onKeyUp={this.enterPass}/>
        )
    }
}