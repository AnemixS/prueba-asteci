import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';

const url = 'https://api.datos.gob.mx/v1/condiciones-atmosfericas'

function App() {
  const [post, setPost] = useState(null)
  const [arrayPost, setArrayPost] = useState()

  useEffect(() => {
    axios.get(url).then(response => {
      setPost(response.data)
      setArrayPost(response.data.results)
    })
  },[])

  console.log('data', post);
  console.log('array', arrayPost)

  return (
    <div className="App">
      <header className="App-header">
        <table>
          <thead>
           <tr>
              {arrayPost != null &&
              arrayPost.forEach(element => {
                element.json().map(index => {
                  <p>{index}</p>
                })
                console.log('element', element)
                })
              }    
          </tr>
          </thead>
          <tbody>
             
            {/*<a
              className="App-link"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a>*/}
          </tbody>
        </table>
      </header>
    </div>
  );
}


export default App;
