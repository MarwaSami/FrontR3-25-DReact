
import { Route, Routes } from 'react-router-dom'
import Fav from './pages/Fav'
import FormHook from './pages/FormHook'
import Product from './pages/Product'
import Todo from './pages/Todo'
import Nav from './Components/Nav'
import Auth from './Components/Auth'

// function component 
function App() {
  //logic
  //2- ui 
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/form' element={<FormHook />} />
        <Route element={<Auth />}>
          <Route path='/' index element={<Todo />} />
          <Route path='/product' element={<Product />} />
          <Route path='/fav' element={<Fav />} />
        </Route>
      </Routes>


    </>
  )
}

export default App
