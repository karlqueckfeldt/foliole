import SubPage from '../../components/sub-page/SubPage';
import CodeViewer from '../../components/code-viewer/CodeViewer';
import { routes } from '../../utilities/routes';

function Badge() {
  const badgeCode = `<div class="fo-badge fo-badge-primary">Primary</div>
<div class="fo-badge fo-badge-secondary">Secondary</div>
<div class="fo-badge">Basic</div>
<div class="fo-badge fo-badge-outlined">Outlined</div>
<div class="fo-badge fo-badge-primary">4</div>
<div class="fo-badge fo-badge-primary"></div>`;

  return (
    <SubPage heading={routes.badge.name}>
      <div className="components">
        <div className="fo-badge fo-badge-primary">Primary</div>
        <div className="fo-badge fo-badge-secondary">Secondary</div>
        <div className="fo-badge">Basic</div>
        <div className="fo-badge fo-badge-outlined">Outlined</div>
        <div className="fo-badge fo-badge-primary">4</div>
        <div className="fo-badge fo-badge-primary" />
      </div>
      <CodeViewer code={badgeCode} />
    </SubPage>
  );
}

export default Badge;
