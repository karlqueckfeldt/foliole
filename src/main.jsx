import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { HashRouter, Routes, Route } from 'react-router';
import Home from './routes/Home.jsx';
import { routes } from './utilities/routes.js';
import Badge from './routes/Badge/Badge.jsx';
import Button from './routes/button/Button.jsx';
import Card from './routes/card/Card.jsx';
import Checkbox from './routes/checkbox/Checkbox.jsx';
import Link from './routes/link/Link.jsx';
import Navigation from './routes/navigation/Navigation.jsx';
import RadioButton from './routes/radio-button/RadioButton.jsx';
import Select from './routes/select/Select.jsx';
import TextField from './routes/text-field/TextField.jsx';
import Classes from './routes/classes/Classes.jsx';
import Properties from './routes/properties/Properties.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path={routes.home.path} element={<App />}>
          {/* Index route */}
          <Route index element={<Home />} />

          {/* Components page */}
          <Route
            path={routes.components.path.slice(1)}
            element={
              <div className="fo-card fo-card-secondary">
                <h1 className="fo-display-text-lg">Components</h1>
                <p className="fo-lead-text">
                  Foliole includes a small collection of components implemented
                  with native HTML and CSS using custom properties.
                </p>
              </div>
            }
          />

          {/* Individual component routes */}
          <Route path={routes.badge.path.slice(1)} element={<Badge />} />
          <Route path={routes.button.path.slice(1)} element={<Button />} />
          <Route path={routes.card.path.slice(1)} element={<Card />} />
          <Route path={routes.checkbox.path.slice(1)} element={<Checkbox />} />
          <Route path={routes.link.path.slice(1)} element={<Link />} />
          <Route
            path={routes.navigation.path.slice(1)}
            element={<Navigation />}
          />
          <Route
            path={routes.radioButton.path.slice(1)}
            element={<RadioButton />}
          />
          <Route path={routes.select.path.slice(1)} element={<Select />} />
          <Route
            path={routes.textField.path.slice(1)}
            element={<TextField />}
          />

          {/* Utilities page */}
          <Route
            path={routes.utilities.path.slice(1)}
            element={
              <div className="fo-card fo-card-secondary">
                <h1 className="fo-display-text-lg">Utilities</h1>
                <p className="fo-lead-text">
                  Foliole includes various CSS classes and properties that can
                  be used to customize your project.
                </p>
              </div>
            }
          />
          <Route path={routes.classes.path.slice(1)} element={<Classes />} />
          <Route
            path={routes.properties.path.slice(1)}
            element={<Properties />}
          />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
