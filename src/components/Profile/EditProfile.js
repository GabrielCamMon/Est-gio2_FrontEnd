import React from 'react';
import NavBarEditProfile from "./NavBarEditProfile"
import EditProfilePublic from "./EditProfilePublic"

export class EdiProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>
            <NavBarEditProfile/>
            <EditProfilePublic/>
        </div> );
    }
}
 
export default EdiProfile;