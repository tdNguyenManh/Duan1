import React from 'react';
class MyComponent extends React.Component {

    state = {
        name: 'Tuan Manh',
        address: 'Ha Tinh',
        age: 19
    };
    handleClick = (event) => {
        console.log(">> click me my button")
        console.log("random", Math.floor((Math.random()*100)+1))

        this.setState({
            name: 'Manh',
            age:  Math.floor((Math.random()*100)+1)
        })
        
        
    }
    handleOnMoverOver(event) {
        // console.log(event.pageX)
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <button onMouseOver={this.handleOnMoverOver}>Hover me</button>
                <button onClick={(event) => { this.handleClick(event) }}>Click me</button>

            </div>

        );
    }
}
export default MyComponent;