import React from 'react';
import './DisplayInfor.scss';
import logo from './../logo.svg';
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
            <div className='display-infor-conatiner'>
                {/* <img src={logo} /> */}
                <div>

                    <div>
                        <span onClick={this.handleShowHide}>
                            {this.state.isShowListUser ? "Hide list users:" : "Show list users:"}
                        </span>
                    </div>
                    {this.state.isShowListUser && listUsers.map(user => (
                        <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                            <div>
                                <div>My name's {user.name}</div>
                                <div>My age's {user.age}</div>
                            </div>
                            <div>
                                <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
                            </div>
                            <hr />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default DisplayInfor;
