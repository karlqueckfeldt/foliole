import SubPage from '../../components/sub-page/SubPage';
import CodeViewer from '../../components/code-viewer/CodeViewer';
import { routes } from '../../utilities/routes';

function Button() {
  const regularButtonCode = `<button class="fo-button fo-button-primary">Primary</button>
<button class="fo-button fo-button-secondary">Secondary</button>
<button class="fo-button">Basic</button>
<button class="fo-button fo-button-outlined">Outlined</button>
<button class="fo-button fo-button-warning">Warning</button>
<button class="fo-button fo-button-flat">Flat</button>
<a href="#" class="fo-button fo-button-flat">Link</a>`;

  const smallButtonCode = `<button class="fo-button fo-button-sm fo-button-primary">Primary</button>
<button class="fo-button fo-button-sm fo-button-secondary">Secondary</button>
<button class="fo-button fo-button-sm">Basic</button>
<button class="fo-button fo-button-sm fo-button-outlined">Outlined</button>
<button class="fo-button fo-button-sm fo-button-warning">Warning</button>
<button class="fo-button fo-button-sm fo-button-flat">Flat</button>
<a href="#" class="fo-button fo-button-sm fo-button-flat">Link</a>`;

  const largeButtonCode = `<button class="fo-button fo-button-lg fo-button-primary">Primary</button>
<button class="fo-button fo-button-lg fo-button-secondary">Secondary</button>
<button class="fo-button fo-button-lg">Basic</button>
<button class="fo-button fo-button-lg fo-button-outlined">Outlined</button>
<button class="fo-button fo-button-lg fo-button-warning">Warning</button>
<button class="fo-button fo-button-lg fo-button-flat">Flat</button>
<a href="#" class="fo-button fo-button-lg fo-button-flat">Link</a>`;

  const disabledButtonCode = `<button class="fo-button fo-button-primary" disabled>Primary</button>
<button class="fo-button fo-button-secondary" disabled>Secondary</button>
<button class="fo-button" disabled>Basic</button>
<button class="fo-button fo-button-outlined" disabled>Outlined</button>
<button class="fo-button fo-button-warning" disabled>Warning</button>
<button class="fo-button fo-button-flat" disabled>Flat</button>`;

  return (
    <SubPage heading={routes.button.name}>
      <section className="fo-m-block-end-3">
        <h3>Regular</h3>
        <div className="components">
          <button className="fo-button fo-button-primary">Primary</button>
          <button className="fo-button fo-button-secondary">Secondary</button>
          <button className="fo-button">Basic</button>
          <button className="fo-button fo-button-outlined">Outlined</button>
          <button className="fo-button fo-button-warning">Warning</button>
          <button className="fo-button fo-button-flat">Flat</button>
          <a href="#" className="fo-button fo-button-flat">
            Link
          </a>
        </div>

        <CodeViewer code={regularButtonCode} />
      </section>

      <section className="fo-m-block-end-3">
        <h3>Small</h3>
        <div className="components">
          <button className="fo-button fo-button-sm fo-button-primary">
            Primary
          </button>
          <button className="fo-button fo-button-sm fo-button-secondary">
            Secondary
          </button>
          <button className="fo-button fo-button-sm">Basic</button>
          <button className="fo-button fo-button-sm fo-button-outlined">
            Outlined
          </button>
          <button className="fo-button fo-button-sm fo-button-warning">
            Warning
          </button>
          <button className="fo-button fo-button-sm fo-button-flat">
            Flat
          </button>
          <a href="#" className="fo-button fo-button-sm fo-button-flat">
            Link
          </a>
        </div>

        <CodeViewer code={smallButtonCode} />
      </section>

      <section className="fo-m-block-end-3">
        <h3>Large</h3>
        <div className="components">
          <button className="fo-button fo-button-lg fo-button-primary">
            Primary
          </button>
          <button className="fo-button fo-button-lg fo-button-secondary">
            Secondary
          </button>
          <button className="fo-button fo-button-lg">Basic</button>
          <button className="fo-button fo-button-lg fo-button-outlined">
            Outlined
          </button>
          <button className="fo-button fo-button-lg fo-button-warning">
            Warning
          </button>
          <button className="fo-button fo-button-lg fo-button-flat">
            Flat
          </button>
          <a href="#" className="fo-button fo-button-lg fo-button-flat">
            Link
          </a>
        </div>

        <CodeViewer code={largeButtonCode} />
      </section>

      <section>
        <h3>Disabled</h3>
        <div className="components">
          <button className="fo-button fo-button-primary" disabled>
            Primary
          </button>
          <button className="fo-button fo-button-secondary" disabled>
            Secondary
          </button>
          <button className="fo-button" disabled>
            Basic
          </button>
          <button className="fo-button fo-button-outlined" disabled>
            Outlined
          </button>
          <button className="fo-button fo-button-warning" disabled>
            Warning
          </button>
          <button className="fo-button fo-button-flat" disabled>
            Flat
          </button>
        </div>

        <CodeViewer code={disabledButtonCode} />
      </section>
    </SubPage>
  );
}

export default Button;
