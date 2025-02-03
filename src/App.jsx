

import Home from './Components/Home';
import './App.css'
import About from './Components/About';
import Test from './Components/Test';
// function component 
function App() {
  //logic
  let div = <div>hi from jsx</div>;

  //2- ui 
  return (
    <>
      <div class="flex">
        {/* 
        <Test /> */}
        <About />
        <Home />

      </div>



    </>
  )
}

export default App
