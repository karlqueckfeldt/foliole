import CodeViewer from '../../components/code-viewer/CodeViewer';
import SubPage from '../../components/sub-page/SubPage';

function Link() {
  const linkCode = `<a class="fo-link" href="#">A regular link</a>`;

  return (
    <SubPage heading="Links">
      <a className="fo-link" href="#">
        A regular link
      </a>
      <CodeViewer code={linkCode} />
    </SubPage>
  );
}

export default Link;
