import React, {useState} from 'react';
import {validateEmail} from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    const {name, email, message} = formState;
    const [errorMessage, setErrorMessage] = useState(''); // initial state is empty string

    function handleChange(e) {
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            
            // isValid conditional statement
            if(!isValid) {
                setErrorMessage('Your email is invalid');
            }
            else {
                setErrorMessage('');
            }

            if(!errorMessage) {
                // only allows state to update with user input if no error message
                setFormState({...formState, [e.target.name]: e.target.value});
            }
        }

        setFormState({...formState, [e.target.name]: e.target.value})
    }
    // console.log(formState);

    function handleSubmit(e) {
        e.preventdefault(); // prevent default action of form submit button
        console.log(formState); // log formState object on submit button click
    }

    return (
        <section>
            <h1>Contact me</h1>
            <form id='contact-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                </div>
                {/* will only render if there is an error message */}
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>                
            </form>
        </section>
    );
}

export default ContactForm;