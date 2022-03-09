// src/App.js
import './App.css';
import logo from './images/ironhack-logo.png'
import menu from './images/menu-top-xs.png'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'

function App() {
  return (
    <div className="App">
      <div className='topContainer'>
        <div className='navbar'>
            <img src={logo} className='navbarImg'></img> 
            <img src={menu} className='navbarImg'></img>  
        </div>

        <div className='midContainer'>
          <h1>Say hello to</h1>
          <h1>ReactJS</h1>
          <h4>You will learn how to use</h4>
          <h4>the most popular frontend library,</h4>
          <h4>And become a super Ninja developer.</h4>
          <button>Awesome!</button>
        </div>
      </div>

      <div className='bottomContainer'>
        <div className='tileComponent'>
          <img src={icon1}></img>
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>

        <div className='tileComponent'>
          <img src={icon2}></img>
          <h3>Components</h3>
          <p>Build encapsulated components that manage their style.</p>
        </div>

        <div className='tileComponent'>
          <img src={icon3}></img>
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the components.</p>
        </div>

        <div className='tileComponent'>
          <img src={icon4}></img>
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>

      </div>
    </div>
  );
}
export default App;