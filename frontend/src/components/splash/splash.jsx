import React from 'react';

class Splash extends React.Component {  
    render() {
        const { openModal } = this.props;

        return (
            <div className="splash-container">
                <div id="splash-bg"></div>
                <div className="session-btns">
                    <button onClick={() => openModal('login')}>Log In</button>
                    <button onClick={() => openModal('signup')}>Sign Up</button>
                </div>
                <div className="splash-title">
                    <h1>
                        Home <br /> 
                        Sweet  <br /> 
                        Woof
                    </h1>
                </div>
            </div>
        )
    }
}

export default Splash;