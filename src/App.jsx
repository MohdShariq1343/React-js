import { useEffect, useState } from 'react';
import Weather from './Weather';
import './App.css';
import Weatherapi from './Weatherapi';



function App() {
  const [post, setPosts] = useState([]);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(response => response.json())
  //   .then(json => setPosts(json));
  //   // console.log(post)
  // },[]);

  return (
    <>
      <div className='container'>
        <div className="row justify-content-center pt-4">
          <div className="col-md-5 ">
         < Weatherapi />
          </div>
        </div>

        </div>
    </>
  )
}

export default App
