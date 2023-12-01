import PropTypes from 'prop-types';
import { ModalEditContact } from '../ModalEditContact/ModalEditContact'
import { useDispatch, useSelector } from 'react-redux';
import { setEditContactData, setModalStatus, selectModalStatus } from '../../redux/contacts/modalSlice'
import { deleteContact } from '../../redux/contacts/operations';
import { useEffect } from 'react';
import css from './ContactListItem.module.css';

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
    <li className={css.contactListItem} key={id}>
    <div className={css.flexWrap}>
    
      <p className={css.contactName}>
        {name}:
      </p>
      
      <span className={css.contactNumber}>{number}</span>
      
      </div>
      <div className={css.flexWrap}>
        <button className={css.button} onClick={() => handleDeleteContact(id)}>Delete</button>
      <button className={css.button}
          type="button"
          onClick={onEditBtnClick}
        >
          Edit
        </button>
        </div>
    </li>
    </div>
  );
};

 ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
 };