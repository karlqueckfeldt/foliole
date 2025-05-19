import CodeViewer from '../../components/code-viewer/CodeViewer';
import SubPage from '../../components/sub-page/SubPage';

function Classes() {
  const marginClassesCode = `\n.fo-m-0\n.fo-m-1\n.fo-m-inline-1\n.fo-m-block-1\n.fo-m-block-start-1\n.fo-m-block-end-1\n.fo-m-inline-end-1\n.fo-m-inline-start-1\n.fo-m-2\n.fo-m-inline-2\n.fo-m-block-2\n.fo-m-block-start-2\n.fo-m-block-end-2\n.fo-m-inline-end-2\n.fo-m-inline-start-2\n.fo-m-3\n.fo-m-inline-3\n.fo-m-block-3\n.fo-m-block-start-3\n.fo-m-block-end-3\n.fo-m-inline-end-3\n.fo-m-inline-start-3\n.fo-m-4\n.fo-m-inline-4\n.fo-m-block-4\n.fo-m-block-start-4\n.fo-m-block-end-4\n.fo-m-inline-end-4\n.fo-m-inline-start-4\n`;

  const paddingClassesCode = `\n.fo-p-0\n.fo-p-1\n.fo-p-inline-1\n.fo-p-block-1\n.fo-p-block-start-1\n.fo-p-block-end-1\n.fo-p-inline-end-1\n.fo-p-inline-start-1\n.fo-p-2\n.fo-p-inline-2\n.fo-p-block-2\n.fo-p-block-start-2\n.fo-p-block-end-2\n.fo-p-inline-end-2\n.fo-p-inline-start-2\n.fo-p-3\n.fo-p-inline-3\n.fo-p-block-3\n.fo-p-block-start-3\n.fo-p-block-end-3\n.fo-p-inline-end-3\n.fo-p-inline-start-3\n.fo-p-4\n.fo-p-inline-4\n.fo-p-block-4\n.fo-p-block-start-4\n.fo-p-block-end-4\n.fo-p-inline-end-4\n.fo-p-inline-start-4\n`;

  const typographyClassesCode = `\n.fo-display-text-lg\n.fo-display-text-md\n.fo-lead-text\n.fo-h1\n.fo-h2\n.fo-h3\n.fo-code-block\n.fo-text-center\n.fo-text-left\n.fo-text-right\n.fo-text-primary\n.fo-text-secondary\n.fo-text-bold\n`;

  return (
    <SubPage heading="Classes">
      <h2>Margin</h2>
      <CodeViewer code={marginClassesCode} language="css" />

      <h2>Padding</h2>
      <CodeViewer code={paddingClassesCode} language="css" />

      <h2>Typography</h2>
      <CodeViewer code={typographyClassesCode} language="css" />
    </SubPage>
  );
}

export default Classes;
