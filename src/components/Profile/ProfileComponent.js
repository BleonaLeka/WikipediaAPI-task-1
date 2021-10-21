import { Component } from "react";
import './ProfileComponent.css';

class ProfileComponent extends  Component {

    constructor(props) {
        super(props);
        this.state = {
            //Set all states here
        }
    }

    render(){
        return(
            <div className="container">
                This is profle page
            </div>
        )
    }
}

export default ProfileComponent;