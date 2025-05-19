import CodeViewer from '../../components/code-viewer/CodeViewer';
import SubPage from '../../components/sub-page/SubPage';

function RadioButton() {
  const radioButtonsCode = `  <fieldset class="fo-form-fieldset">
  <legend class="fo-form-fieldset-legend">Animals</legend>
  <div class="fo-form-radio">
    <input
      class="fo-form-radio-input"
      type="radio"
      value="Cats"
      id="cats"
      name="animal"
      checked
    /><label for="cats">Cats</label>
  </div>
  <div class="fo-form-radio">
    <input
      class="fo-form-radio-input"
      type="radio"
      value="Dogs"
      id="dogs"
      name="animal"
    /><label for="dogs">Dogs</label>
  </div>
  <div class="fo-form-radio">
    <input
      class="fo-form-radio-input"
      type="radio"
      value="Frogs"
      id="frogs"
      name="animal"
      disabled
    /><label for="frogs">Frogs</label>
  </div>
  <div class="fo-form-radio">
    <input
      class="fo-form-radio-input"
      type="radio"
      value="Owls"
      id="owls"
      name="animal"
    /><label for="owls">Owls</label>
  </div>
</fieldset>`;

  return (
    <SubPage heading="Radio buttons">
      <fieldset className="fo-form-fieldset">
        <legend className="fo-form-fieldset-legend">Animals</legend>
        <div className="fo-form-radio">
          <input
            className="fo-form-radio-input"
            type="radio"
            value="Cats"
            id="cats"
            name="animal"
            defaultChecked
          />
          <label htmlFor="cats">Cats</label>
        </div>
        <div className="fo-form-radio">
          <input
            className="fo-form-radio-input"
            type="radio"
            value="Dogs"
            id="dogs"
            name="animal"
          />
          <label htmlFor="dogs">Dogs</label>
        </div>
        <div className="fo-form-radio">
          <input
            className="fo-form-radio-input"
            type="radio"
            value="Frogs"
            id="frogs"
            name="animal"
            disabled
          />
          <label htmlFor="frogs">Frogs</label>
        </div>
        <div className="fo-form-radio">
          <input
            className="fo-form-radio-input"
            type="radio"
            value="Owls"
            id="owls"
            name="animal"
          />
          <label htmlFor="owls">Owls</label>
        </div>
      </fieldset>
      <CodeViewer code={radioButtonsCode} />
    </SubPage>
  );
}

export default RadioButton;
