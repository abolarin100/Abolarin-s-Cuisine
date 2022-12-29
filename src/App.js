
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Menu from './components/Menu';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
// import Foods from './components/Foods';
import ErrorPage from './components/ErrorPage';
import Blog from './components/Blog';
import DetailPage from './components/DetailPage';

// import WTR from './components/WTR';


function App() {


  


  return (
    <Router>
      <Navbar />
   
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/navbar' element={<Navbar/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/about/:id' element={<DetailPage />} />
        <Route path="*" element={<ErrorPage/>} />
        
      </Routes>
    

     {/* <Home /> */}
     
     {/* <Foods /> */}

    
    </Router>
    
  )


  
}

export default App;
