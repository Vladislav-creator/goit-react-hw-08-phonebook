import { useDispatch, useSelector } from 'react-redux';
import { setContactsFilter } from '../../redux/contacts/filtersSlice';
import { selectContactsFilter } from '../../redux/contacts/selectors';
import { Label, Input } from './Filter.module';

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
      <Label>Find contacts by name</Label>
      <Input
        type="text"
        value={userQueryFilter}
        onChange={handleFilterChange}
      />
    </div>
  );
};