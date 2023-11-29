import { useDispatch, useSelector } from 'react-redux';

import { setContactsFilter } from '../../redux/contacts/filtersSlice';
import { selectContactsFilter } from '../../redux/contacts/selectors';

 import { Label, Input } from './Filter.module';

// export const Filter = () => {
//   const dispatch = useDispatch();
//   const filter = useSelector(selectContactsFilter);

//   const handleChangeFilter = ({ currentTarget: { value } }) => {
//     const normalizedValue = value.toLowerCase().trim();
//     dispatch(setContactsFilter(normalizedValue));
//   };

//   return (
//     <Label>
//       Find contacts by name
//       <Input
//         type="text"
//         name="filter"
//         placeholder="Enter contact name"
//         value={filter}
//         onChange={handleChangeFilter}
//       />
//     </Label>
//   );
// };

import { nanoid } from 'nanoid';

export const Filter = () => {
  const userQueryFilter = useSelector(selectContactsFilter);
  const dispatch = useDispatch();

  const searchInputId = nanoid();

  const handleFilterChange = e => {
    const userQuery = e.target.value;
    dispatch(setContactsFilter(userQuery));
  };

  return (
    <div >
      <Label htmlFor={searchInputId}>Find contacts by name</Label>
      <Input
        type="text"
        id={searchInputId}
        value={userQueryFilter}
        onChange={handleFilterChange}
      />
    </div>
  );
};