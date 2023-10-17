import React from 'react';
import DisplayInfor from './DisplayInfor';
import UserInfor from './UserInfor';
class MyComponent extends React.Component {

    state ={
        listUsers: [
            {id:1,name:"Nguyen Tuan Manh" ,age:"19"},
            {id:2,name:"Nguyen Tuan Manh" ,age:"29"},
            {id:3,name:"Nguyen Tuan Manh" ,age:"14"},
    
        ]
    }
    render() {
       
    
      
        return (
            <div>
 
                <UserInfor />
                
                <DisplayInfor
                listUsers={this.state.listUsers}
                
                />
               
            </div>   
        );
    }
}
export default MyComponent;
