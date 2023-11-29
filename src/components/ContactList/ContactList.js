import { useSelector } from 'react-redux';

import { selectVisibleContacts } from '../../redux/contacts/selectors';

import { ContactsListItem } from '../ContactListItem/ContactListItem';

import { ContactsList } from './ContactList.module';

export const ContactList = () => {

  const visibleContacts = useSelector(selectVisibleContacts);

  const sortedContacts = visibleContacts.slice().sort((a, b) => {
    return b.isFavourite - a.isFavourite;
  });
  return (
    <ContactsList>
      {sortedContacts.map(({isFavourite, name, phone, id}) => (
        <ContactsListItem isFavourite={isFavourite} key={id} id={id} name={name} number={phone} />
      ))}
    </ContactsList>
  );
};