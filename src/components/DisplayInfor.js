import React, { useState } from 'react';
import './DisplayInfor.scss';
import logo from './../logo.svg';

// class DisplayInfor extends React.Component {

//     render() {
//         console.log('>>> call me render ')
//         const { listUsers } = this.props;

//         return (
//             <div className='display-infor-conatiner'>

//              {true&&
//              <>

//                     {listUsers.map((user )=> {
//                         return(
//                         <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                             <div>
//                                 <div>My name's {user.name}</div>
//                                 <div>My age's {user.age}</div>
//                             </div>
//                             <div>
//                                 <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                             </div>
//                             <hr />
//                         </div>
//                         )
//                         })}
//                     </>
//                         }
//                 </div>

//         )
//     }
// }
const DisplayInfor = (props) => {
    const { listUsers } = props;
    const [isShowHideListUser, setShowHideListUser] = useState(true);
    useState
    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }
    return (
        <div className='display-infor-conatiner'>
            <div>
                <span onClick={() => handleShowHideListUser()}>
                {isShowHideListUser === true ? "Hide list users" : "Show list users"}
                </span>
            </div>
            {isShowHideListUser &&
                <>

                    {listUsers.map((user) => {
                        return (
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
                        )
                    })}
                </>
            }
        </div>

    )
}


export default DisplayInfor;
