import React from 'react';
import Contact from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import css from './ContactList.module.css';

const ContactList = () => {

const filteredContacts = useSelector(selectFilteredContacts)

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={css.listItem}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
