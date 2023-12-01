import { useDispatch, useSelector } from 'react-redux';
import { setContactsFilter } from '../../redux/contacts/filtersSlice';
import { selectContactsFilter } from '../../redux/contacts/selectors';
import css from './Filter.module.css';

export const Filter = () => {
  const userQueryFilter = useSelector(selectContactsFilter);
  
  const dispatch = useDispatch();
  const handleFilterChange = e => {
    const userQuery = e.target.value;
    const normalizedValue = userQuery.toLowerCase().trim();
    dispatch(setContactsFilter(normalizedValue));
  };
  return (
    <div >
      <label className={css.inputname}>Find contacts by name</label>
      <input className={css.inputstyle}
        placeholder="Enter name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={userQueryFilter}
        onChange={handleFilterChange}
      />
    </div>
  );
};