import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            password2: '',
            email: '',
            location: '',
            type: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user) //.then(this.props.closeModal);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li className="error-message" key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    handleDemoUser(e) {
        e.preventDefault();
        const demoUser = { username: "DemoUser", password: "demo123" }
        this.setState(demoUser);
        this.props.processForm(demoUser) //.then(this.props.closeModal);
    }

    render() {
        // const demoSignUp = () => {
        //     return (
        //         <button onClick={(e) => this.handleDemoUser(e)} className="modal-demo-button">Log In as Demo User</button>
        //     )
        // }

        const signUpForm = () => {
            return (
                <div>
                    <label>username:
                        <input 
                            type='text'
                            value={this.state.username}
                            onChange={this.update('username')}
                        />
                    </label>
                    <label>password:
                        <input 
                            type='text'
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label>
                    <label>confirm password:
                        <input 
                            type='text'
                            value={this.state.password2}
                            onChange={this.update('password2')}
                        />
                    </label>
                    <label>email:
                        <input 
                            type='text'
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </label>
                    <label>location:
                        <input 
                            type='text'
                            value={this.state.location}
                            onChange={this.update('location')}
                        />
                    </label>
                    <label>type:
                        <input 
                            type='text'
                            value={this.state.type}
                            onChange={this.update('type')}
                        />
                    </label>
                </div>
            )
        }

        const logInForm = () => {
            return (
                <div>
                    <label>email:
                        <input 
                            type='text'
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </label>
                    <label>password:
                        <input 
                            type='text'
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label>
                </div>
            )
        }


        return (
            <div onClick={e => e.stopPropagation()}>
                <div>
                    <form onSubmit={this.handleSubmit} className='login-form-box'>
                        {this.props.formType === 'signup' ? signUpForm() : logInForm() }      
                        <input type='submit' value={this.props.formType} />
                    </form>
                </div>
            </div>
        )
    }
}

export default SessionForm;