import ContactForm from './form/ContactForm';
import css from './App.module.css';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from 'redux/selectors';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  useEffect(() => {
    if (contacts) {
      return;
    }
    dispatch(getContacts());
  }, [contacts, dispatch]);
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h1>Contacts</h1>
      <Filter />
      <ContactList />
    </div>
  );
}
