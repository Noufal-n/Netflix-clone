import React from 'react'
import "./components/navbar/navbar.css"
import NavBar from './components/navbar/NavBar.js';
import "./components/app.css"
import Banner from './components/banner/Banner.js';
import "./components/banner/banner.css"
import RawPost from './components/RawPost/RawPost.js';
import {action,orginals,romantic} from './urls.js'


function App() {
  return (
    <div className='App' >
      <NavBar />
      <Banner />
      <RawPost title='Netflix-Orginals'url={orginals}/>
      <RawPost title='Action Movies' url={action} small />
      <RawPost title='Romantic Movies' url={romantic} small />

    </div>
  )
}

export default App;