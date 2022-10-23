import './App.css';
import Gallery from './components/Gallery/Gallery';
import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Gallery />}></Route>
          <Route path='/register' element={<Register />}></Route>
      </Routes>
      {/* <LogIn></LogIn> */}
      {/* <Register/> */}
      {/* <Gallery/> */}
    </div>
  );
}

export default App;
