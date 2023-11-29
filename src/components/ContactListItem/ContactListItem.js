import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import { deleteContact } from '../../redux/contacts/operations';

import {
  ContactItem,
  ContactName,
  ContactNumber,
  Button,
} from './ContactListItem.module';

export const ContactsListItem = ( contact ) => {
  const dispatch = useDispatch();

  const handleDeleteContact = userId => {
    dispatch(deleteContact(userId));
  };

  return (
    <ContactItem key={contact.id}>
      <ContactName>
        {contact.name}:<ContactNumber>{contact.number}</ContactNumber>
      </ContactName>
      <Button onClick={() => handleDeleteContact(contact.id)}>Delete</Button>
    </ContactItem>
  );
};

 ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
 };