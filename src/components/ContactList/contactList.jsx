import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getStatusFilter, getStatusContact } from 'redux/selectors';
import css from './contactList.module.css';

export default function ContactList({ onDeleteContact }) {
  const filter = useSelector(getStatusFilter);
  const contacts = useSelector(getStatusContact);

  const contactsList = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
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
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
};
