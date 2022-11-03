import { useSelector } from 'react-redux';
import { getStatusContact } from 'redux/selectors';
import Form from 'components/Form';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import css from './App.module.css';

export default function App() {
  const contacts = useSelector(getStatusContact);

  return (
    <section className={css.phonebook}>
      <h1 className={css.title}>Your amazing phonebook</h1>
      <Form />
      <h2 className={css.subtitle}>Contacts</h2>
      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p className={css.text}>You have no contacts</p>
      )}
    </section>
  );
}
