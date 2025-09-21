import { NavLink } from 'react-router';
import logo from '../../assets/foliole-big.svg';
import './Sidenav.css';
import { routes } from '../../utilities/routes';
import crossIcon from '../../assets/cross.svg';
import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router';

function Sidenav() {
  const location = useLocation();

  const closeMenu = useCallback(() => {
    const menu = document.querySelector('.fo-navigation.navigation');
    menu.classList.remove('open');
    menu.setAttribute('inert', '');
  }, []);

  useEffect(() => {
    const menu = document.querySelector('.fo-navigation.navigation');

    function handleClick(event) {
      if (
        menu &&
        menu.classList.contains('open') &&
        !menu.contains(event.target) &&
        !event.target.closest('.menu-button')
      ) {
        closeMenu();
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape' && menu && menu.classList.contains('open')) {
        closeMenu();
      }
    }

    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeMenu]);

  useEffect(() => {
    const menu = document.querySelector('.fo-navigation.navigation');
    if (menu && menu.classList.contains('open')) {
      closeMenu();
    }
  }, [location, closeMenu]);

  return (
    <nav className="fo-navigation navigation" id="sideMenu" aria-modal="true">
      <button
        aria-label="Close"
        className="menu-button close"
        onClick={() => closeMenu()}
      >
        <img src={crossIcon} aria-hidden="true" />
      </button>
      <img src={logo} alt="Foliole brand icon" className="fo-p-block-end-1" />
      <ul className="fo-navigation-list">
        <li>
          <NavLink
            to={routes.home.path}
            className={({ isActive }) =>
              `fo-button fo-button-flat fo-text-bold${
                isActive ? ' active' : ''
              }`
            }
          >
            {routes.home.name}
          </NavLink>
        </li>

        <li>
          <NavLink
            to={routes.components.path}
            className={({ isActive }) =>
              `fo-button fo-button-flat fo-text-bold${
                isActive ? ' active' : ''
              }`
            }
          >
            {routes.components.name}
          </NavLink>
        </li>
        <ul className="fo-navigation-list">
          <li>
            <NavLink
              to={routes.badge.path}
              className={({ isActive }) =>
                `fo-button fo-button-flat${isActive ? ' active' : ''}`
              }
            >
              {routes.badge.name}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={routes.button.path}
              className={({ isActive }) =>
                `fo-button fo-button-flat${isActive ? ' active' : ''}`
              }
            >
              {routes.button.name}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={routes.card.path}
              className={({ isActive }) =>
                `fo-button fo-button-flat${isActive ? ' active' : ''}`
              }
            >
              {routes.card.name}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={routes.checkbox.path}
              className={({ isActive }) =>
                `fo-button fo-button-flat${isActive ? ' active' : ''}`
              }
            >
              {routes.checkbox.name}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={routes.link.path}
              className={({ isActive }) =>
                `fo-button fo-button-flat${isActive ? ' active' : ''}`
              }
            >
              {routes.link.name}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={routes.navigation.path}
              className={({ isActive }) =>
                `fo-button fo-button-flat${isActive ? ' active' : ''}`
              }
            >
              {routes.navigation.name}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={routes.radioButton.path}
              className={({ isActive }) =>
                `fo-button fo-button-flat${isActive ? ' active' : ''}`
              }
            >
              {routes.radioButton.name}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={routes.select.path}
              className={({ isActive }) =>
                `fo-button fo-button-flat${isActive ? ' active' : ''}`
              }
            >
              {routes.select.name}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={routes.textField.path}
              className={({ isActive }) =>
                `fo-button fo-button-flat${isActive ? ' active' : ''}`
              }
            >
              {routes.textField.name}
            </NavLink>
          </li>
        </ul>

        <li>
          <NavLink
            to={routes.utilities.path}
            className={({ isActive }) =>
              `fo-button fo-button-flat fo-text-bold${
                isActive ? ' active' : ''
              }`
            }
          >
            {routes.utilities.name}
          </NavLink>
        </li>
        <ul className="fo-navigation-list">
          <li>
            <NavLink
              to={routes.classes.path}
              className={({ isActive }) =>
                `fo-button fo-button-flat${isActive ? ' active' : ''}`
              }
            >
              {routes.classes.name}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={routes.properties.path}
              className={({ isActive }) =>
                `fo-button fo-button-flat${isActive ? ' active' : ''}`
              }
            >
              {routes.properties.name}
            </NavLink>
          </li>
        </ul>
      </ul>
    </nav>
  );
}

export default Sidenav;
