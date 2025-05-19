import CodeViewer from '../../components/code-viewer/CodeViewer';
import SubPage from '../../components/sub-page/SubPage';

function Navigation() {
  const navigationCode = `<nav class="fo-navigation">
  <ul class="fo-navigation-list">
    <li>
      <a href="#" class="fo-button fo-button-flat fo-text-bold">Home</a>
    </li>

    <li>
      <a href="#" class="fo-button fo-button-flat fo-text-bold">Components</a>
    </li>
    <ul class="fo-navigation-list">
      <li>
        <a href="#" class="fo-button fo-button-flat">Buttons</a>
      </li>
      <li>
        <a href="#" class="fo-button fo-button-flat active">Links</a>
      </li>
      <li>
        <a href="#" class="fo-button fo-button-flat">Text fields</a>
      </li>
      <li>
        <a href="#" class="fo-button fo-button-flat">Select</a>
      </li>
      <li>
        <a href="#" class="fo-button fo-button-flat">Radio buttons</a>
      </li>
    </ul>

    <li>
      <a href="#" class="fo-button fo-button-flat fo-text-bold">Utilities</a>
    </li>
    <ul class="fo-navigation-list">
      <li>
        <a href="#" class="fo-button fo-button-flat">Classes</a>
      </li>
      <li>
        <a href="#" class="fo-button fo-button-flat">Properties</a>
      </li>
    </ul>
  </ul>
</nav>`;

  return (
    <SubPage heading="Navigation">
      <nav className="fo-navigation">
        <ul className="fo-navigation-list">
          <li>
            <a href="#" className="fo-button fo-button-flat fo-text-bold">
              Home
            </a>
          </li>

          <li>
            <a href="#" className="fo-button fo-button-flat fo-text-bold">
              Components
            </a>
          </li>
          <ul className="fo-navigation-list">
            <li>
              <a href="#" className="fo-button fo-button-flat">
                Buttons
              </a>
            </li>
            <li>
              <a href="#" className="fo-button fo-button-flat active">
                Links
              </a>
            </li>
            <li>
              <a href="#" className="fo-button fo-button-flat">
                Text fields
              </a>
            </li>
            <li>
              <a href="#" className="fo-button fo-button-flat">
                Select
              </a>
            </li>
            <li>
              <a href="#" className="fo-button fo-button-flat">
                Radio buttons
              </a>
            </li>
          </ul>

          <li>
            <a href="#" className="fo-button fo-button-flat fo-text-bold">
              Utilities
            </a>
          </li>
          <ul className="fo-navigation-list">
            <li>
              <a href="#" className="fo-button fo-button-flat">
                Classes
              </a>
            </li>
            <li>
              <a href="#" className="fo-button fo-button-flat">
                Properties
              </a>
            </li>
          </ul>
        </ul>
      </nav>
      <CodeViewer code={navigationCode} />
    </SubPage>
  );
}

export default Navigation;
