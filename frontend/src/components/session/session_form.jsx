import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            password2: '',
            email: '',
            location: 'none',
            type: 'adopter'
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

        const login3 = function() {
            if(this.props.formType==="signup" && this.props.logCheck){      
                this.props.login(user)
            }
        }
        this.props.processForm(user)

        setTimeout(login3.bind(this), 1000)
    }


    renderErrors() {
        return (
            <ul>
                {Object.values(this.props.errors).map((error, i) => (
                    <li className="error-message" key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    handleDemoUser(e) {
        e.preventDefault();
        const demoUser = { email: "demo@demo.demo", password: "demo123" }
        this.setState(demoUser);
        this.props.processForm(demoUser).then(this.props.closeModal())
    }

    componentWillUnmount(){
        this.props.clearErrors();
    }

    render() {
        let submitText;
        
        if(this.props.formType === 'login') {
            submitText = 'Log In';
        } else {
            submitText = 'Sign Up';
        }
        
        const demoSignUp = () => {
            return (
                <input type="submit" onClick={(e) => this.handleDemoUser(e)} value="Log In as Demo User" />
            )
        }

        const signUpForm = () => {
            return (
                <div className='session-form signup-form'>
                    <h3>Sign Up</h3>
                    
                    <div className='session-form-field'>
                        <label htmlFor='signup-account-type'>Account Type</label>
                        <select 
                            id='signup-account-type'
                            onChange={this.update('type')}>
                            <option value="adopter" disabled>
                                -- Select Account Type --
                            </option>
                            <option value="adopter">Adopter</option>
                            <option value="shelter">Shelter</option>
                        </select>
                    </div>

                    <div className='session-form-field'>
                        <label htmlFor='signup-username'>
                            {this.state.type === 'shelter' ? (
                                <>Shelter Name</>
                            ) : (
                                <>Username</>
                            )}
                        </label>
                        <input
                            id='signup-username'
                            type='text'
                            placeholder='Username'
                            value={this.state.username}
                            onChange={this.update('username')}
                        />
                    </div>
                    
                    <div className='session-form-field'>
                        <label htmlFor='signup-password'>Password</label>
                        <input
                            id='signup-password'
                            type='password'
                            placeholder='Password (minimum length 6 characters)'
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </div>
                    
                    <div className='session-form-field'>
                        <label htmlFor='signup-confirm-pass'>Confirm Password</label>
                        <input
                            htmlFor='signup-confirm-pass'
                            type='password'
                            placeholder='Confirm Password'
                            value={this.state.password2}
                            onChange={this.update('password2')}
                        />
                    </div>
                    
                    <div className='session-form-field'>
                        <label htmlFor='signup-email'>Email</label>
                        <input
                            htmlFor='signup-email'
                            type='text'
                            placeholder='Email@email.com'
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </div>

                    {this.state.type === 'shelter' && (
                        locationDropdown()
                    )}
                    {this.renderErrors()}
                </div>
            )
        }

        const logInForm = () => {
            return (
                <div className='session-form login-form'>
                    <h3>Log In</h3>
                    <p>Welcome back!</p>
                    
                    <div className='session-form-field'>
                        <label htmlFor='login-email' id='login-email'>
                            Email
                        </label>
                        <input
                            id='login-email'
                            type='text'
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </div>
                    
                    <div className='session-form-field'>
                        <label htmlFor='login-password' id='login-pass'>
                            Password
                        </label>
                        <input
                            id='login-password'
                            type='password'
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </div>
                    {this.renderErrors()}
                </div>
            )
        }

        const locationDropdown = () => {
            return(
                <div className='session-form-field'>
                    <label htmlFor='signup-location'>Location</label>
                    <select
                        id='signup-location'
                        onChange={this.update('location')}>
                        <option defaultValue="wyoming" disabled>
                            -- Select a State --
                            </option>
                        <option value="alabama">Alabama</option>
                        <option value="alaska">Alaska</option>
                        <option value="arizona">Arizona</option>
                        <option value="arkansas">Arkansas</option>
                        <option value="california">California</option>
                        <option value="colorado">Colorado</option>
                        <option value="connecticut">Connecticut</option>
                        <option value="delaware">Delaware</option>
                        <option value="florida">Florida</option>
                        <option value="georgia">Georgia</option>
                        <option value="hawaii">Hawaii</option>
                        <option value="idaho">Idaho</option>
                        <option value="illinois">Illinois</option>
                        <option value="indiana">Indiana</option>
                        <option value="iowa">Iowa</option>
                        <option value="kansas">Kansas</option>
                        <option value="kentucky">Kentucky</option>
                        <option value="louisiana">Louisiana</option>
                        <option value="maine">Maine</option>
                        <option value="maryland">Maryland</option>
                        <option value="massachusetts">Massachusetts</option>
                        <option value="michigan">Michigan</option>
                        <option value="minnesota">Minnesota</option>
                        <option value="mississippi">Mississippi</option>
                        <option value="missouri">Missouri</option>
                        <option value="montana">Montana</option>
                        <option value="nebraska">Nebraska</option>
                        <option value="nevada">Nevada</option>
                        <option value="new hampshire">New Hampshire</option>
                        <option value="new jersey">New Jersey</option>
                        <option value="new mexico">New Mexico</option>
                        <option value="new york">New York</option>
                        <option value="north carolina">North Carolina</option>
                        <option value="north dakota">North Dakota</option>
                        <option value="ohio">Ohio</option>
                        <option value="oklahoma">Oklahoma</option>
                        <option value="oregon">Oregon</option>
                        <option value="pennsylvania">Pennsylvania</option>
                        <option value="rhode island">Rhode Island</option>
                        <option value="south carolina">South Carolina</option>
                        <option value="south dakota">South Dakota</option>
                        <option value="Tennessee">Tennessee</option>
                        <option value="texas">Texas</option>
                        <option value="utah">Utah</option>
                        <option value="vermont">Vermont</option>
                        <option value="virginia">Virginia</option>
                        <option value="washington">Washington</option>
                        <option value="west virginia">West Virginia</option>
                        <option value="wisconsin">Wisconsin</option>
                        <option value="wyoming">Wyoming</option>
                    </select>
                </div>
            )
        }


        return (
            <div onClick={e => e.stopPropagation()}>
                <form onSubmit={this.handleSubmit} className='session-form-box' id={this.props.formType}>
                    {this.props.formType === 'signup' ? signUpForm() : logInForm() }      
                    <input type='submit' value={submitText} />

                    {this.props.formType === 'login' && demoSignUp()}
                </form>
            </div>
        )
    }
}

export default SessionForm;