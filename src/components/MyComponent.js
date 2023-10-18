import React from 'react';
import DisplayInfor from './DisplayInfor';
import AddUserInfor from './AddUserInfor';
class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "Nguyen Tuan Manh", age: "19" },
            { id: 2, name: "Nguyen Tuan Manh", age: "29" },
            { id: 3, name: "Nguyen Tuan Manh", age: "14" },

        ]
    }
    handleAddNewUser = (userObj) => {
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }
    handleDeleteUser =(userId) =>{
        let listUsersClone =this.state.listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        this.setState({
            listUsers: listUsersClone
        })
    }
    render() {



        return (
            <>
                <div className='a'>
                <AddUserInfor
                    handleAddNewUser={this.handleAddNewUser}
                />

                <DisplayInfor
                    listUsers={this.state.listUsers}
                    handleDeleteUser={this.handleDeleteUser}
                />
                </div>
                <div className='b'>

                </div>
                </>
        );
    }
}
export default MyComponent;
