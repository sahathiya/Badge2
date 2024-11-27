
import './App.css';
import Counter from './components/Counter';
import FetchDisplay from './components/FetchDisplay';
import InputList from './components/todo/InputList';
import Inputs from './components/todo/Input';
import{Routes,Route} from 'react-router-dom'
import One from './components/One';
import Two from './components/Two';
import Three from './components/Three';
import Total from './components/Total';
function App() {
  return (
    <div className="App">
      {/* <Counter/>
      <FetchDisplay/> */}
      {/* <Inputs/>
      <InputList/> */}

      <Routes>
<Route path='/' element={<One/>}/>
<Route path='/two' element={<Two/>}/>
<Route path='/three' element={<Three/>}/>
<Route path='/sum' element={<Total/>}/>
      </Routes>
    </div>
  );
}

export default App;
