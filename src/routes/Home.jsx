import logo from '../assets/foliole-big.svg';
import './Home.css';

function Home() {
  return (
    <div className="home fo-card fo-card-secondary">
      <div className="header">
        <h1 className="fo-display-text-lg fo-text-center">Foliole</h1>
        <img src={logo} alt="Foliole brand" />
      </div>
      <div className="fo-lead-text">
        <p>
          Welcome to Foliole! A simple, CSS-based, framework agnostic component
          library.
        </p>
        <p>To use it in your project</p>
        <ol>
          <li>
            run <code className="fo-code-block">npm install foliole</code>,
          </li>
          <li>
            import <code className="fo-code-block">foliole</code> where
            suitable,
          </li>
          <li>and have fun! 🍂</li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
