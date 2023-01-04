import './App.css';
import logo from "../src/logo.svg"
import UserProfile from './components/userProfile';

import Balance from "./components/Balance"
import Demo from './components/Demo';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Navigation from './components/dashboard/Navigation';

import MainComponent from './components/dashboard/MainComponent';
import SideBar from './components/dashboard/SideBar';
import SubContent from './components/dashboard/SubContent';
function App() {
  
  

  return (
   <> 
   <BrowserRouter>
        <Routes>
       
              <Route path='/' element={  <Navigation  />} />
              <Route path='/MainComponent' element={   <MainComponent />} />
              <Route path='/SubContent' element={   <SubContent />} />
          </Routes> 
    </BrowserRouter>
   
    </>
  );
}

export default App;
