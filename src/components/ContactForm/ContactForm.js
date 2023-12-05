import { useSelector, useDispatch } from 'react-redux';

import { selectContactsList } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';

import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const formName = e.target.elements.name.value.trim();
    const formNumber = e.target.elements.number.value;

    if (contacts.some(({ name }) => name.toLowerCase() === formName.toLowerCase())) {
      return alert(`${formName} is already in contacts`);
    }

    if (contacts.some(({ number }) => number === formNumber)) {
      return alert(`${formNumber} is already in contacts`);
    }

    dispatch(addContact({ name: formName, number: formNumber }));
    form.reset();
  };

  return (
    <form className={css.formstyle} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.inputname}>
        Name
        <input className={css.inputstyle}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
          value={contacts.name}
        />
      </label>
      <label className={css.inputname}>
        Number
        <input className={css.inputstyle}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter number"
          value={contacts.number}
        />
      </label>
      <button className={css.button} type="submit">Add contact</button>
    </form>
  );
};