import React from 'react';
class UserInfor extends React.Component {
    state = {
        name: 'Tuan Manh',
        address: 'Ha Tinh',
        age: 19
    };


    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })

    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    render(){
    return (
        <div>
                           My name is {this.state.name} and I'm {this.state.age}

<form onSubmit={(event) => this.handleOnSubmit(event)}>
    <label>Your name: </label>
    <input
        value={this.state.name}
        type="test"
        onChange={(event) => this.handleOnChangeInput(event)}
    />

    <label>Your age: </label>
    <input
        value={this.state.age}
        type="test"
        onChange={(event) => this.handleOnChangeAge(event)}
    />
    <button>Submit</button>
</form>

        </div>
    )
    }
}
export default UserInfor;