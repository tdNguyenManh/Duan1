import React from 'react';
import DisplayInfor from './DisplayInfor';
import UserInfor from './UserInfor';
class MyComponent extends React.Component {

   
    render() {
        const myInfor =['ab','c','c']
        return (
            <div>
 
                <UserInfor />
                <DisplayInfor/>
                <DisplayInfor name="Nguyen Tuan Manh" age="19"/>
                <hr/>
                <DisplayInfor name={"Manh"} age={26} myInfor={myInfor}/>
            </div>   
        );
    }
}
export default MyComponent;
