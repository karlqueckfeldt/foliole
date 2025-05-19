import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
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

const router = createBrowserRouter([
  {
    path: routes.home.path,
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: routes.components.path.slice(1),
        element: <div className="fo-card fo-card-secondary">Components</div>,
      },
      {
        path: routes.badge.path.slice(1),
        element: <Badge />,
      },
      {
        path: routes.button.path.slice(1),
        element: <Button />,
      },
      {
        path: routes.card.path.slice(1),
        element: <Card />,
      },
      {
        path: routes.checkbox.path.slice(1),
        element: <Checkbox />,
      },
      {
        path: routes.link.path.slice(1),
        element: <Link />,
      },
      {
        path: routes.navigation.path.slice(1),
        element: <Navigation />,
      },
      {
        path: routes.radioButton.path.slice(1),
        element: <RadioButton />,
      },
      {
        path: routes.select.path.slice(1),
        element: <Select />,
      },
      {
        path: routes.textField.path.slice(1),
        element: <TextField />,
      },
      {
        path: routes.utilities.path.slice(1),
        element: <div className="fo-card fo-card-secondary">Utilities</div>,
      },
      {
        path: routes.classes.path.slice(1),
        element: <Classes />,
      },
      {
        path: routes.properties.path.slice(1),
        element: <Properties />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
