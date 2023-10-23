
import './App.scss';
import Header from './components/header/header'
import { Outlet } from "react-router-dom";

const App = () => {


  return (
    <div className="app-container">
      <div className='header-container'>
      <Header />
      </div>
      <div className="main-container">
      <div className="sidenav-container">

      </div>
      </div>
      <div className="app-content"></div>
     <Outlet />
      <div>
        
      </div>
    </div>
  );
};

export default App;


