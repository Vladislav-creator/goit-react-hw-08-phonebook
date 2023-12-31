import { NavLink } from 'react-router-dom';
import css from '../Navigation/Navigation.module.css';

export const AuthNav = () => {
  return (
    <div className={css.authNavFlex}>
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>
      <NavLink className={css.link} to="/login">
        Log In
      </NavLink>
    </div>
  );
};