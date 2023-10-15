import React from 'react';
class MyComponent extends React.Component {

    state = {
        name: 'Tuan Manh',
        address: 'Ha Tinh',
        age: 19
    };

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
            </div>

        );
    }
}
export default MyComponent;