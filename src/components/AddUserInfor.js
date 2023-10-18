import React from 'react';
class AddUserInfor extends React.Component {
    state = {
        name: '',
        address: 'Ha Tinh',
        age: ''
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

        this.props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: this.state.name,
            age: this.state.age
        });
    }
    handleAddNewUser = (userObj) => {
        console.log("check data from parent: ", userObj)
    }
    render() {
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
export default AddUserInfor;