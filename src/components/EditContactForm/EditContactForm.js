import { useDispatch, useSelector } from 'react-redux';
import {editContact } from '../../redux/contacts/operations';
import { selectEditContactData, setEditContactData, setModalStatus } from '../../redux/contacts/modalSlice';
import {selectContactsList} from '../../redux/contacts/selectors'
import { Formstyle, Inputstyle, Inputname, Button } from './EditContactForm.module';
export const EditContactForm = () => {
  const contacts = useSelector(selectContactsList);
  
  const {name, number, id} = useSelector(selectEditContactData);

  const filteredContactsByName = contacts.filter(contact => contact.name !== name);
  const filteredContactsByNumber = contacts.filter(contact => contact.number !== number);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const newName = form.elements.name.value;
    const newNumber = form.elements.number.value;

    if (
      filteredContactsByName.some(
        contact => contact.name.toLocaleLowerCase() === newName.toLocaleLowerCase()
      )
    ) {
      alert(`${newName} is already in contacts`);
    } else if (
      filteredContactsByNumber.some(contact => contact.number === newNumber)
    ) {
        alert(`${newNumber} is already used`);
      }    
    else {
      dispatch(editContact({ id: id, newContactData: {
        name: newName,
        number: newNumber,
      } }));
      dispatch(setModalStatus(false));
      dispatch(setEditContactData(null));
    }
    form.reset();
  };

  return (
    <Formstyle onSubmit={handleSubmit} >
      <Inputname htmlFor={id} >
        New Name
      </Inputname>
      <Inputstyle
        type="text"
        name="name"
        defaultValue={name}
        
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        id={id}
        required
      />

      <Inputname htmlFor={id} >
       New Number
      </Inputname>
      <Inputstyle
        type="tel"
        name="number"
        defaultValue={number}
        
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        id={id}
        required
      />

      <Button type="submit" >
        Edit contact
      </Button>
    </Formstyle>
  );
};

export default EditContactForm;