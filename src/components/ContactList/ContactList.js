import { useSelector } from 'react-redux';

import { selectVisibleContacts } from '../../redux/contacts/selectors';

import { ContactsListItem } from '../ContactListItem/ContactListItem';

import { ContactsList } from './ContactList.module';

export const ContactList = () => {

  const visibleContacts = useSelector(selectVisibleContacts);

  
  return (
    <ContactsList>
      {visibleContacts.map(({ name, number, id}) => (
        <ContactsListItem  key={id} id={id} name={name} number={number} />
      ))}
    </ContactsList>
  );
};