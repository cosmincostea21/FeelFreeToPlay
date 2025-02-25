import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FreeToPlay from './paginas/FreeToPlay.jsx';
import Inicio from './paginas/Inicio.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/FreeToPlay' element={<FreeToPlay />} />
        <Route path='/' element={<Inicio />} />
      </Routes>
    </Router>
  );
}

export default App;