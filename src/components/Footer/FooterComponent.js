import { Component } from "react";
import './FooterComponent.css';

class FooterComponent extends  Component {

    constructor(props) {
        super(props);
        this.state = {
            //Set all states here
        }
    }

    render(){
        return(
            <footer className="footer">
                This is my Footer
            </footer>
        )
    }
}

export default FooterComponent;