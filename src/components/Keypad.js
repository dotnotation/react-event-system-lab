import React from 'react';
class Keypad extends React.Component {
    eventLog = () => console.log("Entering password...")
    
    render(){
        return(
            <input type="password" onKeyUp={this.eventLog}></input>
        )
    }
}

export default Keypad