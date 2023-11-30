import EditContactForm from 'components/EditContactForm/EditContactForm';

import { useDispatch } from 'react-redux';
import { setEditContactData, setModalStatus } from '../../redux/contacts/modalSlice';
import { useEffect } from 'react';

export const ModalEditContact = () => {
  const dispatch = useDispatch();

  const onCloseBtnClick = () => {
    dispatch(setModalStatus(false));
    dispatch(setEditContactData(null));
  }

    const handleOverlayClick = event => {
        if (event.currentTarget === event.target) {
            dispatch(setModalStatus(false));
            dispatch(setEditContactData(null));
        }
      };
    
      useEffect(() => {
        const handleKeyDown = event => {
          if (event.code === 'Escape') {
            dispatch(setModalStatus(false));
            dispatch(setEditContactData(null));
          }
        };
    
        window.addEventListener('keydown', handleKeyDown);
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      });
    
    return <div  onClick={handleOverlayClick}>
        <div >
            <p >You are trying to change the next contact:</p>
            <button  onClick={onCloseBtnClick}>&times;</button>
            <EditContactForm />
        </div>
    </div>
}

export default ModalEditContact;