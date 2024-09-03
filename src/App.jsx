import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'


function App() {
  return (
    <>
      <ToastContainer></ToastContainer>
      <Header></Header>
      <Banner></Banner>
      <Recipes></Recipes>
    </>
  )
}

export default App
