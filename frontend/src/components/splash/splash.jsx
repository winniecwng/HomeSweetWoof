import React from 'react';

class Splash extends React.Component {  
    render() {
        const { openModal } = this.props;

        return (
            <div>
                <button onClick={() => openModal('login')}>Log in</button>
                <button onClick={() => openModal('signup')}>Sign up</button>
            </div>
        )
    }
}

export default Splash;