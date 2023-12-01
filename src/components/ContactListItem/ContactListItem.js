import PropTypes from 'prop-types';
import { ModalEditContact } from '../ModalEditContact/ModalEditContact'
import { useDispatch, useSelector } from 'react-redux';
import { setEditContactData, setModalStatus, selectModalStatus } from '../../redux/contacts/modalSlice'
import { deleteContact } from '../../redux/contacts/operations';
import { useEffect } from 'react';
import {
  ContactItem,
  ContactName,
  ContactNumber,
  Button,
  FlexWrap
} from './ContactListItem.module';

export const ContactsListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectModalStatus);
  const body = document.body;
  if(isModalOpen) {
    body.classList.add('disable-scroll')
  }else{
    body.classList.remove('disable-scroll')
  }
  const onEditBtnClick = () => {
    dispatch(setModalStatus(true));
    dispatch(setEditContactData({ name, number, id }));
   
  }

  useEffect(()=>{

  }, [])
  const handleDeleteContact = userId => {
    dispatch(deleteContact(userId));
  };

  return (
    <div>
    {isModalOpen && <ModalEditContact />}
    <ContactItem key={id}>
    <FlexWrap>
    
      <ContactName>
        {name}:
      </ContactName>
      
      <ContactNumber>{number}</ContactNumber>
      
      </FlexWrap>
      <FlexWrap>
        <Button onClick={() => handleDeleteContact(id)}>Delete</Button>
      <Button
          type="button"
          onClick={onEditBtnClick}
        >
          Edit
        </Button>
        </FlexWrap>
    </ContactItem>
    </div>
  );
};

 ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
 };