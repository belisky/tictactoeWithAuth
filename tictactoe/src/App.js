import GamePage from './Pages/GamePage/GamePage'
import GameHome from './Pages/GameHome/GameHome';
import LoginRegister from "./Pages/LoginRegister/LoginRegister";
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="board">
     <Routes>
       <Route exact path="/" element={<LoginRegister />}/>
       <Route path="/gamehome/" element={<GameHome/>}/>
       <Route path="/gamepage/" element={<GamePage/>}/>      
      </Routes>
    </div>
  );
}

export default App;
