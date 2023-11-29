// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Helmet } from 'react-helmet';
// import { ContactList } from 'components/ContactList/ContactList';
// import { ContactEditor } from 'components/ContactEditor/ContactEditor';
// import { fetchContacts } from 'redux/contacts/operations';
// import { selectLoading } from 'redux/contacts/selectors';

// export default function Contacts() {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectLoading);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <>
//       <Helmet>
//         <title>Your contacts</title>
//       </Helmet>
//       <ContactEditor />
//       <div>{isLoading && 'Request in progress...'}</div>
//       <ContactList />
//     </>
//   );
// }
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from '../redux/contacts/operations';
import { selectError, selectIsLoading } from '../redux/contacts/selectors';

import { Section } from '../components/Section/Section';
import { ContactForm } from '../components/ContactForm/ContactForm';
 import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section title="Phonebook">
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