import React from 'react';
import { contactList } from '../lists/ContactList';
const Contact = () => {
    return (
        <section>
            <div className="main">
                <h2 className="center">I am available for work and open to any ideas of cooperation, get in touch with me! </h2>
                <p className="center">
                {contactList.map((contact,index) =>
                    <a key={index} href={contact.link}>
                    <img className="space contact-img" alt={contact.name} src={contact.image}/>
                    </a>
                    )}
                </p>
            </div>
        </section>
    );
}

export default Contact;
