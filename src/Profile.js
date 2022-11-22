import React, {Component} from 'react';
import Adress from './Adress';
import Email from './Email';
import Name from './Name';
import PersonalInfo from './PersonalInfo';

class Profile extends Component{
    render(){
        const{firstName, lastName, email, personalNum, adress} = this.props;
        return(
            <div className='profile'>
                <Name firstName={firstName} lastName={lastName}/>
                <Email email={email}/>
                <PersonalInfo personalNum={personalNum}/>
                <Adress adress={adress}/>
            </div>
        )
    }
}

export default Profile;