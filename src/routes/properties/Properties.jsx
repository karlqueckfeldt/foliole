import CodeViewer from '../../components/code-viewer/CodeViewer';
import SubPage from '../../components/sub-page/SubPage';

function Properties() {
  const generalPropertiesCode = `/* General 🍂 */\n--fo-spacing: 1rem;\n--fo-border-width: 1px;\n--fo-radio-border-width: calc(var(--fo-border-width) * 2);\n--fo-border: var(--fo-border-width) solid var(--fo-border-color);\n--fo-radio-border: var(--fo-radio-border-width) solid var(--fo-radio-color);\n--fo-button-radius: 999999px;\n--fo-input-radius: 4px;\n--fo-card-radius: 18px;\n--fo-code-radius: 10px;\n--fo-box-shadow: 0 2px 4px 0 var(--fo-box-shadow-color);\n--fo-outline: 2px solid var(--fo-outline-color);\n`;

  const colorPropertiesCode = `/* Base colors 🍂 */\n--fo-primary-color: rgb(22, 92, 38);\n--fo-secondary-color: rgb(204, 230, 212);\n--fo-warning-color: rgb(210 42 18);\n--fo-light-color: rgb(243, 248, 246);\n--fo-dark-color: rgb(32, 49, 41);\n\n/* Lighter base colors 🍂 */\n--fo-primary-light-color: rgb(34, 106, 40);\n--fo-secondary-light-color: rgb(222, 238, 225);\n--fo-warning-light-color: rgb(229, 52, 46);\n\n/* Misc colors 🍂 */\n--fo-disabled-color: rgb(190, 190, 190);\n--fo-opaque-color: rgba(85, 85, 85, 0.202);\n\n/* Color applications 🍂 */\n--fo-primary-text-color: var(--fo-dark-color);\n--fo-secondary-text-color: var(--fo-light-color);\n--fo-border-color: var(--fo-primary-color);\n--fo-link-color: var(--fo-primary-color);\n--fo-bg-color: var(--fo-light-color);\n--fo-radio-color: var(--fo-primary-color);\n--fo-box-shadow-color: var(--fo-opaque-color);\n--fo-outline-color: var(--fo-primary-color);\n`;

  const typographyPropertiesCode = `/* Font family 🍂 */\n--fo-font-family: Verdana, sans-serif;\n\n/* Font sizes 🍂 */\n--fo-h1-size: 2.5rem;\n--fo-h2-size: 2rem;\n--fo-h3-size: 1.5rem;\n--fo-h4-size: 1rem;\n--fo-h5-size: 0.9em;\n--fo-h6-size: 0.7em;\n--fo-display-text-lg-size: 7rem;\n--fo-display-text-md-size: 4rem;\n--fo-text-sm-size: 0.8rem;\n--fo-text-lg-size: 1.4rem;\n\n/* Line height 🍂 */\n--fo-body-line-height: 1.5;\n--fo-heading-line-height: 1.2;\n`;

  return (
    <SubPage heading="Properties">
      <p>
        All custom properties are scoped inside{' '}
        <code className="fo-code-block">:root</code>.
      </p>
      <h2>General</h2>
      <CodeViewer code={generalPropertiesCode} language="css" />

      <h2>Colors</h2>
      <CodeViewer code={colorPropertiesCode} language="css" />

      <h2>Typography</h2>
      <CodeViewer code={typographyPropertiesCode} language="css" />
    </SubPage>
  );
}

export default Properties;
