import CodeViewer from '../../components/code-viewer/CodeViewer';
import SubPage from '../../components/sub-page/SubPage';

function Select() {
  const selectCode = `<label class="fo-form-label" for="video_games_select">Select</label>
<div class="fo-form-select-container">
  <select
    id="video_games_select"
    name="video_games_select"
    class="fo-form-select"
  >
    <option value="Age of Empires">Age of Empires</option>
    <option value="Super Mario">Super Mario</option>
    <option value="Tetris" disabled>Tetris</option>
    <option value="World of Warcraft">World of Warcraft</option>
  </select>
</div>`;
  const disabledSelectCode = `<label class="fo-form-label" for="video_games_disabled_select">Disabled select</label>
<div class="fo-form-select-container">
  <select
    id="video_games_disabled_select"
    name="video_games_disabled_select"
    class="fo-form-select"
    disabled
    defaultValue="Tetris"
  >
    <option value="Age of Empires">Age of Empires</option>
    <option value="Super Mario">Super Mario</option>
    <option value="Tetris">Tetris</option>
    <option value="World of Warcraft">World of Warcraft</option>
  </select>
</div>`;

  return (
    <SubPage heading="Select">
      <div className="selects">
        <div>
          <label className="fo-form-label" htmlFor="video_games_select">
            Select
          </label>
          <div className="fo-form-select-container">
            <select
              id="video_games_select"
              name="video_games_select"
              className="fo-form-select"
            >
              <option value="Age of Empires">Age of Empires</option>
              <option value="Super Mario">Super Mario</option>
              <option value="Tetris" disabled>
                Tetris
              </option>
              <option value="World of Warcraft">World of Warcraft</option>
            </select>
          </div>
          <CodeViewer code={selectCode} />
        </div>

        <div>
          <label
            className="fo-form-label"
            htmlFor="video_games_disabled_select"
          >
            Disabled select
          </label>
          <div className="fo-form-select-container">
            <select
              id="video_games_disabled_select"
              name="video_games_disabled_select"
              className="fo-form-select"
              disabled
              defaultValue="Tetris"
            >
              <option value="Age of Empires">Age of Empires</option>
              <option value="Super Mario">Super Mario</option>
              <option value="Tetris">Tetris</option>
              <option value="World of Warcraft">World of Warcraft</option>
            </select>
          </div>
          <CodeViewer code={disabledSelectCode} />
        </div>
      </div>
    </SubPage>
  );
}

export default Select;
