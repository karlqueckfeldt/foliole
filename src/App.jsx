import { Outlet } from 'react-router';
import './App.css';
import Sidenav from './components/sidenav/Sidenav';
import menuIcon from './assets/menu.svg';

function App() {
  return (
    <div className="app">
      <div className="main-wrapper">
        <button
          className="menu-button"
          aria-label="Open menu"
          onClick={() =>
            document
              .querySelector('.fo-navigation.navigation')
              .classList.toggle('open')
          }
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
