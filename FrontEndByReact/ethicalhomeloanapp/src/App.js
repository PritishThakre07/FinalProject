import './styles.css'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Navbar from './Components/Header/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>

          <Route path='/login' element={<Login />} />
          {/* <Route path='/home' element={<Home/>} />
          <Route path='/header' element={<Navbar />} /> */}



        </Routes>

      </BrowserRouter>

      <Navbar />
      <Home />
      <Footer /> 

      

    </div>
  );
}

export default App;
