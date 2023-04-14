import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/clsContacto'

const ContactoList = ({contact}) => {
    return (
        <div>
            <h2>Name: {contact.name} {contact.lastname}</h2>
            <h3>Email: { contact.email} </h3>
            <h4>State: { contact.conected ? 'Contacto en linea' : 'Contacto no disponible'} </h4>

        </div>
    );
};


ContactoList.propTypes = {
    contact:PropTypes.instanceOf(Contact)
};


export default ContactoList;
