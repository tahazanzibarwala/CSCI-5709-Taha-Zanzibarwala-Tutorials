import './App.css';
import Registration from "./Registration";
import Profile from "./Profile";
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom";

function App() {
  return (

      <Router>
        <div className="App">
            <Routes>
                <Route exact path="/" element={<Registration/>}></Route>
                <Route path="/validated" element={<Profile/>}></Route>
            </Routes>
        </div>
      </Router>
  );
}

export default App;
