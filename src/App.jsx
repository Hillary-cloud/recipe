import './App.css'
import Category from './components/Category'
import Header from './components/Header';
import Pages from './pages/Pages'
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Category />
      <Pages />
    </BrowserRouter>
    </>
  )
}

export default App
