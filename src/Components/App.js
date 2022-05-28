import React, { Component } from "react";
import Title from "./Title";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import profile from '../assets/profile.png';
import Jokes from "./Jokes";

class App extends Component{
    //state = {displayBio: false};
    
    constructor() {
        super();
        this.state = {displayBio: false};
        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    }

    toggleDisplayBio(){
        this.setState({displayBio:!this.state.displayBio});
    }

    render(){
        return(
            <div>
                <img src={profile} alt="profile" className='profile'/>
                <h1>Hello!</h1>
                <p>My name is Vaibhav.</p>
                <p><Title /></p>
                <p>I'm always looking forward to work on meaningful projects.</p>
            {
                this.state.displayBio ? (
                    <div>
                        <p>I live in Shegaon and code every day</p>
                        <p>My favourite language is JavaScript, and I think React.js is awesome</p>
                        <p>Besides coding I like music and anime.</p>
                        <button onClick={this.toggleDisplayBio}>Show less</button>
                    </div>
                ) : (
                    <button onClick={this.toggleDisplayBio}>Read More</button>
                )
            }
            <hr />

            <Projects />
            
            <hr />

            <SocialProfiles />

            <hr />

            <Jokes />
            </div>
        )
    }
}

export default App;