import CodeViewer from '../../components/code-viewer/CodeViewer';
import SubPage from '../../components/sub-page/SubPage';

function Checkbox() {
  const checkboxesCode = `<fieldset class="fo-form-fieldset">
  <legend class="fo-form-fieldset-legend">Food</legend>
  <div class="fo-form-check">
    <input
      class="fo-form-check-input"
      type="checkbox"
      value="Burger"
      id="burger"
      name="food"
      checked
    /><label for="burger">Burger</label>
  </div>
  <div class="fo-form-check">
    <input
      class="fo-form-check-input"
      type="checkbox"
      value="Pancakes"
      id="pancakes"
      name="food"
    /><label for="pancakes">Lasagna</label>
  </div>
  <div class="fo-form-check">
    <input
      class="fo-form-check-input"
      type="checkbox"
      value="Pasta"
      id="pasta"
      name="food"
      disabled
    /><label for="pasta">Pizza</label>
  </div>
  <div class="fo-form-check">
    <input
      class="fo-form-check-input"
      type="checkbox"
      value="Sushi"
      id="sushi"
      name="food"
    /><label for="sushi">Sushi</label>
  </div>
</fieldset>`;

  return (
    <SubPage heading="Checkboxes">
      <fieldset className="fo-form-fieldset">
        <legend className="fo-form-fieldset-legend">Food</legend>
        <div className="fo-form-check">
          <input
            className="fo-form-check-input"
            type="checkbox"
            value="Burger"
            id="burger"
            name="food"
            defaultChecked
          />
          <label htmlFor="burger">Burger</label>
        </div>
        <div className="fo-form-check">
          <input
            className="fo-form-check-input"
            type="checkbox"
            value="Pancakes"
            id="pancakes"
            name="food"
          />
          <label htmlFor="pancakes">Lasagna</label>
        </div>
        <div className="fo-form-check">
          <input
            className="fo-form-check-input"
            type="checkbox"
            value="Pasta"
            id="pasta"
            name="food"
            disabled
          />
          <label htmlFor="pasta">Pizza</label>
        </div>
        <div className="fo-form-check">
          <input
            className="fo-form-check-input"
            type="checkbox"
            value="Sushi"
            id="sushi"
            name="food"
          />
          <label htmlFor="sushi">Sushi</label>
        </div>
      </fieldset>
      <CodeViewer code={checkboxesCode} />
    </SubPage>
  );
}

export default Checkbox;
