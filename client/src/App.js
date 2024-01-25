import { useEffect } from 'react';
import './App.css';
import AppNavBar from './components/pages/AppNavBar';
import { Routes,Route } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import Home from './components/pages/Home';
import { useDispatch,useSelector } from 'react-redux';
import { getAuthUser } from './redux/actions';
import Navigationb from './components/pages/Navigationb';
import Contact from './components/pages/Contact';
import NosServices from './components/pages/NosServices';
import QuiSommeNous from './components/pages/AdminManagement';
import AdminManagement from './components/pages/AdminManagement';

function App() {

  const dispatch=useDispatch()
  const getAuth=()=>{
  dispatch(getAuthUser()) }
  useEffect(getAuth,[])
  const isAuth=useSelector((state)=>state.auth.user)
console.log(isAuth,"heeeeeloooooo")

  return (

    <div className="App">
    <Navigationb />  
    <AppNavBar />
    {isAuth &&
    <Routes>
      <Route path="/Dashboard" element={<Dashboard/>} />
      </Routes>
        }
    <Routes>
      <Route path="/" element={<Home/>} />
    <Route path ="/Contact" element={<Contact/>} />
    <Route path="/NosServices" element={<NosServices/>}/>
    <Route path='/QuiSommesNous' element={<AdminManagement/>}/>
    </Routes>   

    </div>
  );
}

export default App;