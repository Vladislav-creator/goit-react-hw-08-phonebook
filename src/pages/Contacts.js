import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './style.module.css'
import { fetchContacts } from '../redux/contacts/operations';
import { selectError, selectIsLoading } from '../redux/contacts/selectors';

import { Section } from '../components/Section/Section';
import { ContactForm } from '../components/ContactForm/ContactForm';
 import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import { useAuth } from 'hooks';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const { user } = useAuth();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section title="Phonebook">
      <p className={css.greetings}>Welcome {user.name}!{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span></p>
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <Filter />
        {isLoading && !error && <b>Request in progress</b>}
        <ContactList />
      </Section>
    </>
  );
};