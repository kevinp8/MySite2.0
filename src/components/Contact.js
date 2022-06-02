import React from 'react'

function Contact(props) {
    const noRefresh = (e) => {
        e.preventDefault();
        alert('form submitted')
    }

    if (props.show === 5) {
        return (
            <form onSubmit={noRefresh} netlify>
                <label htmlFor='name'>Name: </label><input type='text' id='name'/>
                <label htmlFor='email'>Email: </label><input type='email' id='email' />
                <label htmlFor='message'>Message: </label><textarea id='message'/>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Contact