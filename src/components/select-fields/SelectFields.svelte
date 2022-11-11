<script>
  import ComponentContainer from '../../component-container/ComponentContainer.svelte';
</script>

<ComponentContainer heading="Select fields">
  <div class="selects">
    <div>
      <label class="fo-form-label" for="video_games_select"
        >Select something</label
      >
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
    <div>
      <label class="fo-form-label" for="video_games_disabled_select"
        >Disabled select</label
      >
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
  </div>
</ComponentContainer>
