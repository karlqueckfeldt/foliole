// src/components/CodeViewer.jsx
import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import 'highlight.js/styles/stackoverflow-light.css';
import codeIcon from '../../assets/code.svg';
import './CodeViewer.css';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('css', css);

function CodeViewer({ code, language = 'html' }) {
  const codeRef = useRef(null);

  useEffect(() => {
    const el = codeRef.current;
    if (!el) return;

    el.className = `language-${language}`;
    hljs.highlightElement(el);
  }, [code, language]);

  return (
    <div className="code-viewer fo-card fo-card-outlined fo-p-0 fo-m-block-start-1">
      <pre>
        <code ref={codeRef}>{code.trim()}</code>
      </pre>
      <img src={codeIcon} alt="Code icon" />
    </div>
  );
}

export default CodeViewer;
