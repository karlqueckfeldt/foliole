import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { S as SubpageContainer, C as CodeViewer } from "../../../../chunks/SubpageContainer.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `${validate_component(SubpageContainer, "SubpageContainer").$$render($$result, { heading: "Select" }, {}, {
    default: () => {
      return `<div class="${"selects"}"><div><label class="${"fo-form-label"}" for="${"video_games_select"}">Select</label>
      <select id="${"video_games_select"}" name="${"video_games_select"}" class="${"fo-form-select"}"><option value="${"Age of Empires"}">Age of Empires</option><option value="${"Super Mario"}">Super Mario</option><option value="${"Tetris"}" disabled>Tetris</option><option value="${"World of Warcraft"}">World of Warcraft</option></select>
      ${validate_component(CodeViewer, "CodeViewer").$$render($$result, { code: selectCode }, {}, {})}</div>

    <div><label class="${"fo-form-label"}" for="${"video_games_disabled_select"}">Disabled select</label>
      <select id="${"video_games_disabled_select"}" name="${"video_games_disabled_select"}" class="${"fo-form-select"}" disabled><option value="${"Age of Empires"}">Age of Empires</option><option value="${"Super Mario"}">Super Mario</option><option value="${"Tetris"}" selected>Tetris</option><option value="${"World of Warcraft"}">World of Warcraft</option></select>
      ${validate_component(CodeViewer, "CodeViewer").$$render($$result, { code: disabledSelectCode }, {}, {})}</div></div>`;
    }
  })}`;
});
export {
  Page as default
};
