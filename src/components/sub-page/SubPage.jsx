import './SubPage.css';

function SubPage({ heading, children }) {
  return (
    <section className="sub-page fo-card">
      <h1 className="fo-display-text-md">{heading}</h1>
      {children}
    </section>
  );
}

export default SubPage;
