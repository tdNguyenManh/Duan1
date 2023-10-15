import React from 'react';
class MyComponent extends React.Component {

    state = {
        name: 'Tuan Manh',
        address: 'Ha Tinh',
        age: 19
    };
    handleClick(event) {
        console.log(">> click me my button")
        console.log("My name is", this.state.name)
    }
    handleOnMoverOver(event) {
        console.log(event.pageX)
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
                <button onMouseOver={this.handleOnMoverOver}>Hover me</button>
                <button onClick={this.handleClick}>Click me</button>

            </div>

        );
    }
}
export default MyComponent;