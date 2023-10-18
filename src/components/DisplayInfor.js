import React from 'react';

class DisplayInfor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowListUser: true
        };
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        });
    }

    render() {
        const { listUsers } = this.props;

        return (
            <div>
                <div>
                    <span onClick={this.handleShowHide}>
                        {this.state.isShowListUser ? "Hide list users:" : "Show list users:"}
                    </span>
                </div>
                {this.state.isShowListUser && listUsers.map(user => (
                    <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                        <div>My name's {user.name}</div>
                        <div>My age's {user.age}</div>
                        <hr />
                    </div>
                ))}
            </div>
        );
    }
}

export default DisplayInfor;
