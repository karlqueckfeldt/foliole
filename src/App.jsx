import { Outlet } from 'react-router';
import './App.css';
import Sidenav from './components/sidenav/Sidenav';

function App() {
  return (
    <div className="app">
      <Sidenav />
      <main className="main">
        <Outlet />
      </main>
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
