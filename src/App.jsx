

import Home from './Components/Home';
import './App.css'
import About from './Components/About';
// function component 
function App() {
  //logic
  let div = <div>hi from jsx</div>;

  //2- ui 
  return (
    <>
      <div class="flex">
        <Home />
        <About />
      </div>



    </>
  )
}

export default App
