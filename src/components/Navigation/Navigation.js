import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const { user } = useAuth();
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
        <p className={css.p} >Welcome {user.name}!{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span></p>
        </div>
      )}
    </nav>
  );
};