import { useState ,useEffect} from 'react';
import './App.css';
import Editor from './Components/Editor';


function App() {
  const [html, setHtml] = useState(localStorage.getItem('html') || '');
  const [css, setCss] = useState(localStorage.getItem('css') || '');
  const [js, setJs] = useState(localStorage.getItem('js') || '');
  const [srcDoc,setSrcDoc]=useState('');

  useEffect(()=>{
    const timeout = setTimeout(()=>{ 
      setSrcDoc(
        `
          <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
          </html>
        `

      );

    },250)

    return () => clearTimeout(timeout)
  },[html,css,js]);

   // Save to localStorage whenever html, css, or js changes
   useEffect(() => {
    localStorage.setItem('html', html);
  }, [html]);

  useEffect(() => {
    localStorage.setItem('css', css);
  }, [css]);

  useEffect(() => {
    localStorage.setItem('js', js);
  }, [js]);


  return (
    <div className='pane top'>
      <div className='top-container'>
        <Editor language="xml"
          displayName="HTML"
          value={html} 
          onChange={setHtml}/>

        <Editor language="css"
          displayName="CSS"
          value={css} 
          onChange={setCss}/> 

        <Editor language="javascript"
          displayName="JS"
          value={js} 
          onChange={setJs}/>   
      </div>
      <div className='pane bottom'>
        <iframe
          srcDoc={srcDoc}
          title='output'
          sandbox='allow-scripts'
          style={{ border: 'none' }}
          width="100%"
          height="100%">

        </iframe>        

      </div>
    </div>
  );
}

export default App;
