import { useSelector } from 'react-redux';

import { selectVisibleContacts } from '../../redux/contacts/selectors';

import { ContactsListItem } from '../ContactListItem/ContactListItem';

import { ContactsList } from './ContactList.module';

export const ContactList = () => {

  const visibleContacts = useSelector(selectVisibleContacts);
//   const sortedContacts = visibleContacts.slice().sort((a, b) => {
//     return b.isFavourite - a.isFavourite;
//   });
const sortedContacts =  visibleContacts.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
  
  return (
    <ContactsList>
      {sortedContacts.map(({ name, number, id}) => (
        <ContactsListItem  key={id} id={id} name={name} number={number} />
      ))}
    </ContactsList>
  );
};