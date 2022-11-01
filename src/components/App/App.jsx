import { useDispatch, useSelector } from 'react-redux';
import { getStatusContact } from 'redux/selectors';
import { setStatusContact, deleteContact } from 'redux/contactsSlice';
import Notiflix from 'notiflix';
import Form from 'components/Form';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import css from './App.module.css';

export default function App() {
  const contacts = useSelector(getStatusContact);
  const dispatch = useDispatch();

  const formSubmitHandler = newContact => {
    dispatch(setStatusContact(newContact));
    Notiflix.Notify.success('You have just created a new contact');
  };

  const deleteContacts = contactId => {
    dispatch(deleteContact(contactId));
    Notiflix.Notify.success('You have just deleted a contact');
  };

  return (
    <section className={css.phonebook}>
      <h1 className={css.title}>Your amazing phonebook</h1>
      <Form onSubmit={formSubmitHandler} />

      <h2 className={css.subtitle}>Contacts</h2>
      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList onDeleteContact={deleteContacts} />
        </>
      ) : (
        <p className={css.text}>You have no contacts</p>
      )}
    </section>
  );
}
