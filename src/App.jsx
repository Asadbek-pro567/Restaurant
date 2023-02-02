
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header__logo from './components/folders/header/Header__logo';
import Header from './components/pages/home/header/Header';

function App() {
  return (
    <div className="App">
      <Header__logo/>
      <Routes>
        <Route path='/' element={<Header/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
