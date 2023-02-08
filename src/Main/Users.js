import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Add from '../components/Add';
import Edit from '../components/Edit';
import Home from '../components/Home';


function App() {
  return (
    <div className="App">
      <Home />
      <Router>
        <Routes>
            
            <Route path="/create" element={<Add />} />
            <Route path="/Edit" element={<Edit/>} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
