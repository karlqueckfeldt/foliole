<script>
  import logo from '$lib/images/foliole.svg';
  import { base } from '$app/paths';
  import { page } from '$app/stores';

  const links = {
    home: `${base}`,
    components: `${base}/components`,
    buttons: `${base}/components/buttons`,
    links: `${base}/components/links`,
    textFields: `${base}/components/text-fields`,
    select: `${base}/components/select`,
    radioButtons: `${base}/components/radio-buttons`,
    checkboxes: `${base}/components/checkboxes`,
    navigation: `${base}/components/navigation`,
    badges: `${base}/components/badges`,
    cards: `${base}/components/cards`,
    utilities: `${base}/utilities`,
    classes: `${base}/utilities/classes`,
    properties: `${base}/utilities/properties`,
  };
</script>

<nav class="fo-navigation">
  <img
    src={logo}
    alt="Foliole brand icon"
    class="fo-p-inline-start-1 fo-p-block-end-1"
  />
  <ul class="fo-navigation-list">
    <li>
      <a
        href={links.home}
        class="fo-button fo-button-flat fo-text-bold"
        class:active={$page.url.pathname === links.home}>Home</a
      >
    </li>

    <li>
      <a
        href={links.components}
        class="fo-button fo-button-flat fo-text-bold"
        class:active={$page.url.pathname === links.components}>Components</a
      >
    </li>
    <ul class="fo-navigation-list">
      <li>
        <a
          href={links.badges}
          class="fo-button fo-button-flat"
          class:active={$page.url.pathname === links.badges}>Badges</a
        >
      </li>
      <li>
        <a
          href={links.buttons}
          class="fo-button fo-button-flat"
          class:active={$page.url.pathname === links.buttons}>Buttons</a
        >
      </li>
      <li>
        <a
          href={links.cards}
          class="fo-button fo-button-flat"
          class:active={$page.url.pathname === links.cards}>Cards</a
        >
      </li>
      <li>
        <a
          href={links.checkboxes}
          class="fo-button fo-button-flat"
          class:active={$page.url.pathname === links.checkboxes}>Checkboxes</a
        >
      </li>
      <li>
        <a
          href={links.links}
          class="fo-button fo-button-flat"
          class:active={$page.url.pathname === links.links}>Links</a
        >
      </li>
      <li>
        <a
          href={links.navigation}
          class="fo-button fo-button-flat"
          class:active={$page.url.pathname === links.navigation}>Navigation</a
        >
      </li>
      <li>
        <a
          href={links.radioButtons}
          class="fo-button fo-button-flat"
          class:active={$page.url.pathname === links.radioButtons}
          >Radio buttons</a
        >
      </li>
      <li>
        <a
          href={links.select}
          class="fo-button fo-button-flat"
          class:active={$page.url.pathname === links.select}>Select</a
        >
      </li>
      <li>
        <a
          href={links.textFields}
          class="fo-button fo-button-flat"
          class:active={$page.url.pathname === links.textFields}>Text fields</a
        >
      </li>
    </ul>

    <li>
      <a
        href={links.utilities}
        class="fo-button fo-button-flat fo-text-bold"
        class:active={$page.url.pathname === links.utilities}>Utilities</a
      >
    </li>
    <ul class="fo-navigation-list">
      <li>
        <a
          href={links.classes}
          class="fo-button fo-button-flat"
          class:active={$page.url.pathname === links.classes}>Classes</a
        >
      </li>
      <li>
        <a
          href={links.properties}
          class="fo-button fo-button-flat"
          class:active={$page.url.pathname === links.properties}>Properties</a
        >
      </li>
    </ul>
  </ul>
</nav>

<style>
  .fo-navigation {
    position: sticky;
    top: 0;
    padding-block-start: calc(var(--fo-spacing) * 2);
    height: 100dvh;
  }
</style>
