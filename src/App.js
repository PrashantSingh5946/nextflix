import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home/>} />
      <Route path="login" element={<Login/>} />
      <Route path="signup" element={<SignUp />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

function Home()
{
  return(
    <div>
      Home
    </div>
  )
}


function SignUp()
{
  return(
    <div>
      SignUp
    </div>
  )
}



export default App;
