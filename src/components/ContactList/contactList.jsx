import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/ContactSlice';
import { getStatusFilter, getStatusContact } from 'redux/selectors';
import Notiflix from 'notiflix';
import css from './contactList.module.css';

export default function ContactList() {
  const filter = useSelector(getStatusFilter);
  const contacts = useSelector(getStatusContact);
  const dispatch = useDispatch();

  const contactsList = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContacts = contactId => {
    dispatch(deleteContact(contactId));
    Notiflix.Notify.success('You have just deleted a contact');
  };

  return (
    <ul className={css.items}>
      {contactsList().map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <p>
            {name}: {number}
          </p>
          <button
            className={css.button}
            type="button"
            onClick={() => deleteContacts(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
