import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
// import SigninPage from './pages/signin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SigninPage />} />
      </Routes>
      {/* <Home /> */}
    </BrowserRouter>
  );
}

export default App;
