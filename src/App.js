import React, {useState} from 'react';
import ReactMarkdown from 'react-markdown';
// import marked from 'marked';
import './App.css';

export default function App() {
  const [markdown, setMarkdown] = useState('# sup');

  const handleChange = (e) => setMarkdown(e.target.value);

  return (
    <div className="app">
      <textarea
        value={markdown}
        onChange={handleChange}
      />

      {/*<div className="preview" dangerouslySetInnerHTML={{__html: marked(markdown)}}/>*/}

      <ReactMarkdown className="preview" children={markdown}/>

    </div>
  );
}
