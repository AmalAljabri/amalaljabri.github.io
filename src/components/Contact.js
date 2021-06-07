import React from 'react';
import { contactList } from '../lists/ContactList';
const Contact = () => {
    return (
        <section>
            <div className="main">
                <h3 className="center">I am available for work and open to any ideas of cooperation, get in touch with me! </h3>
                <p className="center">
                {contactList.map((contact,index) =>
                    <a key={index} href={contact.link}>
                    <img className="space" alt={contact.name} src={contact.image}/>
                    </a>
                    )}
                </p>
            </div>
        </section>
    );
}

export default Contact;
