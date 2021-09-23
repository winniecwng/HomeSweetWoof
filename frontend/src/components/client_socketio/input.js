import React from 'react';

const Input = ({ message, setMessage, sendMessage }) => {
    return (
        <div>
            <form>
                <input
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null }
                    />
            </form>
        </div>
    )
}

export default Input;