
import Main from "./scenes/Main";
import './main.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App=()=>{



    return(
      <div className='app'>
      <BrowserRouter basename="/danial-portfolio">
  
      <Routes>
          <Route path={'/'} element={<Main/> } />
         
      </Routes>
      
      
      
      
      
      
      
      
      
      </BrowserRouter>
      </div>

    )
}













export default App;