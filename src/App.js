import LoginForm from './LoginForm';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import GameView from './GameView'
function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path="/" element={
          <header className="App-header">
            <LoginForm/>
          </header>
          }
        />
        <Route path="/game" element={
          <header className="App-header">
            <GameView/>
          </header>
          }
        />
      </Routes>
      
    </div>
  );
}

export default App;
