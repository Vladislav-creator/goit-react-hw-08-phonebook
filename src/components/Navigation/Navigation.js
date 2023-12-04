import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav className={css.wrapperLeft}>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <div className={css.wrapperRight}>
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
        </div>
      )}
    </nav>
  );
};