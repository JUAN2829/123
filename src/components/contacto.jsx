import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/clsContacto';
import ContactoList from './contactoList';


const Contacto = () => {
    const contact = new Contact('Juan', 'Solano', 'jsolano@gmail.com', false)
    return (
        <div>
            <h1>Contacto</h1>
            <div>
                <ContactoList contact = { contact } />
            </div>
        </div>
    );
};

export default Contacto;
