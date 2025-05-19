import CodeViewer from '../../components/code-viewer/CodeViewer';
import SubPage from '../../components/sub-page/SubPage';

function TextField() {
  const textFieldCode = `<label class="fo-form-label" for="username">Username</label>
<input
  class="fo-form-input"
  type="text"
  id="username"
  name="username"
  placeholder="Buzz Lightyear"
/>

<label class="fo-form-label" for="email">Email (disabled)</label>
<input
  class="fo-form-input"
  type="email"
  id="email"
  name="email"
  placeholder="space@andys.com"
  disabled
/>`;

  return (
    <SubPage heading="Text fields">
      <div className="text-fields">
        <div>
          <label className="fo-form-label" htmlFor="username">
            Username
          </label>
          <input
            className="fo-form-field"
            type="text"
            id="username"
            name="username"
            placeholder="Buzz Lightyear"
          />
        </div>
        <div>
          <label className="fo-form-label" htmlFor="email">
            Email (disabled)
          </label>
          <input
            className="fo-form-field"
            type="email"
            id="email"
            name="email"
            placeholder="space@andys.com"
            disabled
          />
        </div>
        <CodeViewer code={textFieldCode} />
      </div>
    </SubPage>
  );
}

export default TextField;
