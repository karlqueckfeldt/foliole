<script>
  import CodeViewer from '../../../lib/code-viewer/CodeViewer.svelte';
  import SubpageContainer from '../../../lib/subpage-container/SubpageContainer.svelte';

  const selectCode = `<label class="fo-form-label" for="video_games_select">
    Select
</label>
<select
  id="video_games_select"
  name="video_games_select"
  class="fo-form-select"
>
  <option value="Age of Empires">Age of Empires</option>
  <option value="Super Mario">Super Mario</option>
  <option value="Tetris" disabled>Tetris</option>
  <option value="World of Warcraft">World of Warcraft</option>
</select>`;
  const disabledSelectCode = `<label class="fo-form-label" for="video_games_disabled_select">
    Disabled select
</label>
<select
  id="video_games_disabled_select"
  name="video_games_disabled_select"
  class="fo-form-select"
  disabled
>
  <option value="Age of Empires">Age of Empires</option>
  <option value="Super Mario">Super Mario</option>
  <option value="Tetris" selected>Tetris</option>
  <option value="World of Warcraft">World of Warcraft</option>
</select>`;
</script>

<SubpageContainer heading="Select">
  <div class="selects">
    <div>
      <label class="fo-form-label" for="video_games_select">Select</label>
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
      </div>
      <CodeViewer code={selectCode} />
    </div>

    <div>
      <label class="fo-form-label" for="video_games_disabled_select"
        >Disabled select</label
      >
      <div class="fo-form-select-container">
        <select
          id="video_games_disabled_select"
          name="video_games_disabled_select"
          class="fo-form-select"
          disabled
        >
          <option value="Age of Empires">Age of Empires</option>
          <option value="Super Mario">Super Mario</option>
          <option value="Tetris" selected>Tetris</option>
          <option value="World of Warcraft">World of Warcraft</option>
        </select>
      </div>
      <CodeViewer code={disabledSelectCode} />
    </div>
  </div>
</SubpageContainer>
