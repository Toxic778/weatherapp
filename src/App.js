import { Route, Routes } from 'react-router-dom';
import './App.css';
import Weather from './pages/Weather';
import About from './pages/About';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';

function App() {
  
  return (
    <>
      <div className="App">
      <header className="App-header">
        <div className='App-header-wrapper'>
          <h1 className='Logotype'>Weather<span style={{paddingLeft: 8,}}>App</span></h1>
          <nav className='Links'>
            <a href='/' id='Link'>Главная</a>
            <a href='/weather' id='Link'>Погода</a>
            <a href='/about' id='Link'>Информация</a>
          </nav>
          <div className='Nav-mobile'>
            <a href='/' id='Link'>Главная</a>
            <a href='/weather' id='Link'>Погода</a>
            <a href='/about' id='Link'>Связаться с нами</a>
          </div>
        </div>
      </header>
    </div>
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/weather' element={<Weather />}/>
        <Route path='/about' element={<About />}/>
        <Route path='*' element={<NotFound />}/>
    </Routes>
    </>
    
  );
}

export default App;
