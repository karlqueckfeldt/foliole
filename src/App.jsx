import { Outlet } from 'react-router';
import { useState, useEffect } from 'react';
import './App.css';
import Sidenav from './components/sidenav/Sidenav';
import menuIcon from './assets/menu.svg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openMenu() {
    const menu = document.querySelector('.fo-navigation.navigation');
    const mainContent = document.querySelector('.main');
    const footer = document.querySelector('.footer');
    const menuButton = document.querySelector('.menu-button');

    menu.classList.add('open');
    menu.removeAttribute('inert');

    if (mainContent) mainContent.setAttribute('inert', '');
    if (footer) footer.setAttribute('inert', '');
    if (menuButton) menuButton.setAttribute('inert', '');

    menu.querySelector('.navigation .menu-button').focus();
    setIsMenuOpen(true);
  }

  useEffect(() => {
    const menu = document.querySelector('.fo-navigation.navigation');
    const observer = new MutationObserver(() => {
      if (menu && !menu.classList.contains('open')) {
        setIsMenuOpen(false);

        const mainContent = document.querySelector('.main');
        const footer = document.querySelector('.footer');
        const menuButton = document.querySelector('.menu-button');

        if (mainContent) mainContent.removeAttribute('inert');
        if (footer) footer.removeAttribute('inert');
        if (menuButton) menuButton.removeAttribute('inert');
      }
    });

    if (menu) {
      observer.observe(menu, { attributes: true, attributeFilter: ['class'] });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app">
      <div className="main-wrapper">
        <button
          className="menu-button"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          onClick={() => openMenu()}
          aria-controls="sideMenu"
        >
          <img src={menuIcon} aria-hidden="true" />
        </button>
        <Sidenav />
        <main className="main">
          <Outlet />
        </main>
      </div>
      <footer className="footer">
        <p>
          Made by Karl Queckfeldt.{' '}
          <a
            href="https://github.com/karlqueckfeldt/foliole"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub repository
          </a>
          .
          <a
            href="https://www.npmjs.com/package/foliole"
            target="_blank"
            rel="noopener noreferrer"
          >
            NPM page
          </a>
          .
        </p>
      </footer>
    </div>
  );
}

export default App;
