import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './home';
import { BMI } from './component/bmi';
import { API } from './component/simpleapicall';
import { Snapshot } from './component/snapshot';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/bmi" element={ <BMI /> }></Route>
        <Route path="/stask" element={ <API /> }></Route>
        <Route path="/snapshot" element={ <Snapshot /> }></Route>
      </Routes>
    </div>
  );
}

export default App;
